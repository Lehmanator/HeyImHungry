/**
 * @class       : Listing
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 18:57:08 EDT
 * @description : Listing
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import BasicMap from "./BasicMap";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Listing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <BasicMap id={"map-" + this.props.title} />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography component="p">
                This is the default description text for a food listing.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Claim
            </Button>
            <Button size="small" color="primary">
              Claim All
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
Listing.propTypes = {
  title: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
};
Listing.defaultProps = {
  title: "Default Title",
  lat: 42.05,
  lng: -80.22
};
export default Listing;
