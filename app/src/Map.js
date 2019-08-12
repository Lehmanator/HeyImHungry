import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Listing from './Listing';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

class MapContainer extends Component {

  renderMarkers(items) {
    var markers = items.map(item => (
      <Marker position={{ lat: item.lat, lng: item.lng }} key={item.lng} />
    ));
    return markers;
  }
  render() {
    const mapStyles = {
      width: '100%',
      height: '35vh',
    };

    return (
      <Paper elevation={1}>
        <Map
          google={this.props.google}
          zoom={12}
          // style={mapStyles}
          initialCenter={{ lat: this.props.lat - 0.075, lng: this.props.lng }}
        >
          <Marker position={{ lat: this.props.lat, lng: this.props.lng }} key="user" />
          {this.renderMarkers(this.props.items)}
        </Map >
      </Paper>
    );
  }
}

MapContainer.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  items: PropTypes.array,
}
MapContainer.defaultProps = {
  lat: 42.0844,
  lng: -80.05,
  items: [{
    lat: 42.0850,
    lng: -80.055,
  }]
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBcg9ZOJX84kevI_cng627MTTzAo7WAK3Y'
})(MapContainer);
