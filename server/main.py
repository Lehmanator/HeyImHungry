#!/usr/bin/python3

###################################################
# IMPORTS
###################################################
from flask import Flask, abort, request, jsonify, g, url_for
from util import prepare_key_value
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth
from passlib.apps import custom_app_context as pwd_context
from itsdangerous import (TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired)
from flask_sqlalchemy import SQLAlchemy
import json
import os

###################################################
# CONFIGURATION
###################################################
app = Flask(__name__)
app.config['SECRET_KEY'] = 'iuLH@N$piu23jI@#ULVN'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

oauth_client_id = 'google'
oauth_client_secret = 'thisisthegoogleclientsecret'
oauth_project_id = 'hey-i-m-hungry'
auth_token_validity = 180000

db = SQLAlchemy(app)
auth = HTTPBasicAuth()

###################################################
# MODELS
###################################################
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), index=True)
    password_hash = db.Column(db.String(64))
    device_pin = db.Column(db.Integer)
    food_listings = db.relationship('FoodListing', backref='User', lazy=True)

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)

    def generate_auth_token(self, expiration=auth_token_validity):
        s = Serializer(app.config['SECRET_KEY'], expires_in=expiration)
        return s.dumps({'id': self.id})

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except SignatureExpired:
            return None    # valid token, but expired
        except BadSignature:
            return None    # invalid token
        user = User.query.get(data['id'])
        return user

class FoodListing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    loc_lat = db.Column(db.Float)
    loc_long = db.Column(db.Float)
    user = db.Column(db.Integer, db.ForeignKey('user.id'))
    added = db.DateTime()
    food_items = db.relationship('FoodItem', backref='FoodListing', lazy=True)

class FoodItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60))
    photo = db.Column(db.String(60))
    quantity = db.Column(db.Integer)
    reserved_by = db.Column(db.Integer, db.ForeignKey('foodlisting.id'))

###################################################
# GENERAL
###################################################
@app.route('/')
def root():
	return jsonify({'info': 'Hello, you have reached the HeyI\'mHungry API endpoint.'})

###################################################
# AUTHENTICATION
###################################################

# Verify a username/token and password combo
@auth.verify_password
def verify_password(username_or_token, password):
    # First try to authenticate by token
    user = User.verify_auth_token(username_or_token)

    if not user:
        # Try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False

    g.user = user
    return True

# Create new users
@app.route('/api/users', methods=['POST'])
def new_user():
    username = request.json.get('username')
    password = request.json.get('password')
    
    if username is None or password is None:
        abort(400)
    
    if User.query.filter_by(username=username).first() is not None:
        abort(400)
    
    # Create a new user
    user = User(username=username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    
    return (jsonify({'username': user.username}), 201, {'Location': url_for('get_auth_token')})

# Get a simple auth token using the username and password
@app.route('/api/login')
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token()
    return jsonify({'token': token.decode('ascii'), 'duration': auth_token_validity})

# Log in via OAuth flow with Google
@app.route('/oauth/login', methods=['GET', 'POST'])
def oauth_login():
    # Verify requestor
    if request.args.get('client_id', '') != oauth_client_id:
        return (jsonify({'error': 'invalid_grant'}), 400)

    # If GET, show the login page
    if request.method == 'GET':
        return render_template('login.html')

    # If POST, verify the password is correct, if so, generate an authorization token and redirect back to Google
    elif request.method == 'POST':
        if not verify_password(request.form['username'], request.form['password']):
            return ('Invalid username or password. Please try again.', 400, {'Location': url_for('device_login')})

        # Login was successful, lets verify the redirect URI has the right project ID
        redirect_uri = request.args.get('redirect_uri', '')
        sent_project_id = redirect_uri.split('/')[-1]
        if sent_project_id != oauth_project_id:
            abort(400)

        # Generate a new authorization token
        auth_token = g.user.generate_auth_token()

        # Redirect back to requestor
        return redirect(redirect_uri + '?code=' + auth_token.decode('ascii') + '&state=' + request.args.get('state', ''), code=302)
        

###################################################
# FUNCTIONALITY
###################################################
@app.route('/api/resource')
@auth.login_required
def get_resource():
    return jsonify({'data': 'Hello, %s!' % g.user.username})

if __name__ == '__main__':
    if not os.path.exists('db.sqlite'):
    	db.create_all()

    app.run(debug=True)