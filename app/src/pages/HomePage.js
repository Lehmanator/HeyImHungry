import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Fab, } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, withTheme } from '@material-ui/styles';

import * as ROUTES from '../Routes';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import PasswordForgetPage from './PasswordForgetPage';
import AccountPage from './AccountPage';
import AdminPage from './AdminPage';

import ListingFeed from '../components/ListingFeed';
import MapContainer from '../components/Map';

import Banana from '../assets/images/banana.jpg';
import Apple from '../assets/images/apple.jpg';
import Orange from '../assets/images/orange.jpg';

const style = theme => ({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  map: {
    height: '100vh',
    position: 'fixed',
    overflow: 'hidden',
  },
});

class HomePage extends Component {

  getLocation() {
    var geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    };
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }));
    } else {

    }
  }
  getListings(lat, listing) {

  }
  getAlerts() {

  }

  constructor(props) {
    super(props);
    this.listings = [];
    this.auth = false;
    this.listings = [{
      title: "Soup Kitchen",
      description: "We have food here at the soup kitchen!",
      min_ago: 5,
      lat: 42.07,
      lng: -80.25,
      items: [{
        title: "Orange",
        img: Orange,
      }, {
        title: "Apple",
        img: Apple,
      }, {
        title: "Banana",
        img: Banana,
      }]
    }];
    this.state = { lat: 42, lng: -80 };
    this.getLocation();
  }

  render() {
    const { classes } = this.props;
    return (
      <main>
        <MapContainer
          className={classes.map}
          google={this.props.google}
          lat={this.state.lat || 42}
          lng={this.state.lng || -80}
          items={this.listings}
        />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={ListingFeed} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </Switch>
        <Fab className={classes.fab} color="primary" variant="extended"><AddIcon />New Donation</Fab>
      </main >
    );
  }
}
export default withStyles(style)(HomePage);
