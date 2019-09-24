import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Container, Grid, GridList,
} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/styles';

import Alert from './Alert';
import Listing from './Listing';

import Banana from '../assets/images/banana.jpg';
import Apple from '../assets/images/apple.jpg';
import Orange from '../assets/images/orange.jpg';

const style = theme => ({
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

class ListingFeed extends Component {
  constructor(props) {
    super(props);
    this.listings = [];
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
  }
  render() {
    const { classes } = this.props;
    return (
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
    );
  }
}
export default withStyles(style)(ListingFeed);
