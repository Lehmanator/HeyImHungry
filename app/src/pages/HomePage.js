import React, { Component } from 'react';

import {
  Container, Fab, Grid, GridList,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, withTheme } from '@material-ui/styles';

import Alert from '../components/Alert';
import Listing from '../components/Listing';
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
  content: {
    position: 'fixed',
    bottom: 0,
    padding: '20px',
    overflow: 'scroll',
    overflowY: 'scroll',
    overflowX: 'hidden',
    maxHeight: '55vh',
    minHeight: '25vh',
    scrollbarWidth: 'none',
  },
  list: {
    overflowY: 'scroll',
    overflowX: 'hidden',
  }
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
      <div>
        <MapContainer
          className={classes.map}
          google={this.props.google}
          lat={this.state.lat || 42}
          lng={this.state.lng || -80}
          items={this.listings}
        />
        <main>
          <Container className={classes.content} maxWidth="sm">
            <Alert description="Be patient, migration to Firebase is in progress" />
            <GridList className={classes.list} spacing={8} cellHeight='auto' cols={1}>
              {this.listings.map(listing => (
                <Grid item key={listing.title}><Listing {...listing} /></Grid>
              ))}
              <Grid item key="example"><Listing title="Food Listing" /></Grid>
              <Grid item key="default"><Listing title="Food Listing 2" /></Grid>
            </GridList>
          </Container>
        </main>
        <Fab className={classes.fab} color="primary"><AddIcon /></Fab>
      </div >
    );
  }
}
export default withStyles(style)(HomePage);
