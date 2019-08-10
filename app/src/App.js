import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardContent, CardHeader, } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Divider from '@material-ui/core/Divider';
// import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav';
//import BasicMap from './BasicMap';
import GoogleMapReact, { GoogleApiWrapper } from 'google-maps-react';
import Alert from './Alert';
import MapContainer from './Map';
import Listing from './Listing';
import { withStyles, withTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';


import Banana from './assets/images/banana.jpg';
import Apple from './assets/images/apple.jpg';
import Orange from './assets/images/orange.jpg';

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
    bottom: 20,
    padding: '20px',
    overflow: 'scroll',
    maxHeight: '55vh',
    minHeight: '25vh',
  },
});

class App extends Component {
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
    this.listings = [{
      title: "Soup Kitchen",
      description: "We have food here at the soup kitchen!",
      min_ago: 5,
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
      <div className="App" style={{ overflow: 'hidden' }}>
        <CssBaseline />
        <Nav />
        <MapContainer className={classes.map} google={this.props.google} lat={this.state.lat || 42} lng={this.state.lng || -80} />
        <main>
          <Container className={classes.content}>
            <Alert description="Be patient, migration to Firebase is in progress" />
            <GridList spacing={8} cellHeight='auto' cols={1}>
              {this.listings.map(listing => (
                <Grid item><Listing {...listing} /></Grid>
              ))}
              <Grid item><Listing title="Food Listing" /></Grid>
              <Grid item><Listing title="Food Listing" /></Grid>
              <Grid item><Listing title="Food Listing" /></Grid>
              <Grid item><Listing title="Food Listing" /></Grid>
            </GridList>
          </Container>
        </main>
        <Fab className={classes.fab} color="primary"><AddIcon /></Fab>
      </div >
    );
  }
}

export default withStyles(style)(App);

// ReactDOM.render(< App />, document.getElementById('root'));
