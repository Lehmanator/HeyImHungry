import React, { Component, } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { CssBaseline, } from '@material-ui/core';
import * as firebase from 'firebase';

import Nav from './components/Nav';
import * as ROUTES from './Routes';

import AdminPage from './pages/AdminPage';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import PasswordForgetPage from './pages/PasswordForgetPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }
  componentDidMount() {
    const rootRef = firebase.database().ref().child('heyimhungry');
    const listingsRef = rootRef.child('listings');
    listingsRef.on('value', snap => {
      this.setState({
        listings: snap.val()
      });
    });
  }
  render() {
    return (
      <Router>
        <div className="App" style={{ overflow: 'hidden' }}>
          <CssBaseline />
          <Nav auth={this.auth} />
          <Route exact path={ROUTES.LANDING} component={HomePage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.HOME2} component={HomePage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div >
      </Router>
    );
  }
}

export default App;
