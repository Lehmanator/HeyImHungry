/**
 * @class       : Listing
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 18:57:08 EDT
 * @description : Listing
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Avatar,
  Button,
  Card, CardHeader, CardContent, CardActionArea, CardActions, CardMedia,
  Grid, GridList, GridListTile, GridListTileBar,
  ListItem, List, ListItemAvatar, ListItemText, ListItemSecondaryAction,
  Paper, Typography,
} from "@material-ui/core";
import {
  AccountIcon,
} from '@material-ui/icons';
import { withStyles, withTheme } from '@material-ui/styles';
//import Purple from '@material-ui/styles/Colors/Purple';

import Banana from './assets/images/banana.jpg';
import Apple from './assets/images/apple.jpg';
import Orange from './assets/images/orange.jpg';

const style = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "purple",
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: "white",
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(50,0,50,0.7) 0%, rgba(50,0,50,0.3) 70%, rgba(50,0,50,0) 100%)',
    borderRadius: 8,
  },
  img: {
    borderRadius: 8,
    maxHeight: 200,
    maxWidth: 200,
    height: 150,
    width: 150,
  }
});

class Listing extends Component {
  constructor(props) {
    super(props);


  }
  renderItems(items) {
    const { classes } = this.props;
    var itemTiles = items.map(item => (
      <GridListTile key={item.img}>
        <img crossOrigin="true" src={item.img} alt={item.title} classes={{ img: classes.img }} />
        <GridListTileBar
          title={item.title}
          classes={{ root: classes.titleBar, title: classes.title }}
          actionIcon={
            <Button>Claim</Button>
          }
        />
      </GridListTile>
    ))
    // <Grid item><Typography>{this.props.min_ago} min ago</Typography></Grid>
    return (
      <GridList cols={2.5} className={classes.gridList}>
        {itemTiles}
      </GridList>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardContent>
          <ListItem alignItems="flex-start">
            <ListItemAvatar><Avatar /></ListItemAvatar>
            <ListItemText primary={this.props.title} secondary={this.props.user} />
            <ListItemSecondaryAction>
              <Typography align="right" component="p">{this.props.min_ago} min ago</Typography>
              <Typography align="right" component="p">{this.props.dist} feet away</Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <Typography gutterBottom component="p">{this.props.description}</Typography>
          {this.renderItems(this.props.items)}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Claim Items</Button>
          <Button size="small" color="primary">Message User</Button>
        </CardActions>
      </Card >
    );
  }
}
Listing.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  description: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  square: PropTypes.bool,
  min_ago: PropTypes.number,
  dist: PropTypes.number,
  items: PropTypes.array,
};
Listing.defaultProps = {
  title: "Default Title",
  user: "samlehman617",
  description: "This is the default description text for a food listing.",
  lat: 42.05,
  lng: -80.22,
  square: false,
  min_ago: 0,
  dist: 500,
  items: [{
    title: "Banana",
    img: Banana,
  }, {
    title: "Apple",
    img: Apple,
  }, {
    title: "Orange",
    img: Orange,
  }],
};
export default withStyles(style)(Listing);
