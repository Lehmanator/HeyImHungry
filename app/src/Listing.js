/**
 * @class       : Listing
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 18:57:08 EDT
 * @description : Listing
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import {
  Button,
  Card, CardHeader, CardContent, CardActionArea, CardActions, CardMedia,
  Grid, GridList, GridListTile, GridListTileBar,
  Paper, Typography,
} from "@material-ui/core";
import { withStyles, withTheme } from '@material-ui/styles';

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
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    borderRadius: 8,
  },
  img: {
    borderRadius: 8,
    maxHeight: "200",
    maxWidth: "200",
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
        <GridListTileBar title={item.title} classes={{ root: classes.titleBar, title: classes.title }} />
      </GridListTile>
    ))

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
          <Grid container justify="space-between">
            <Grid item><Typography gutterBottom variant="h5" component="h5">{this.props.title}</Typography></Grid>
            <Grid item><Typography>{this.props.min_ago} min ago</Typography></Grid>
          </Grid>
          <Typography component="p">{this.props.description}</Typography>
          {this.renderItems(this.props.items)}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Claim Item(s)</Button>
          <Button size="small" color="primary">Claim All</Button>
        </CardActions>
      </Card>
    );
  }
}
Listing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  square: PropTypes.bool,
  min_ago: PropTypes.number,
  items: PropTypes.array,
};
Listing.defaultProps = {
  title: "Default Title",
  description: "This is the default description text for a food listing.",
  lat: 42.05,
  lng: -80.22,
  square: false,
  min_ago: 0,
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
