import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Listing from './Listing';

import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';

class MapContainer extends Component {

  renderMarkers(items) {
    var markers = items.map(item => (
      <Marker
        title={item.title}
        position={{ lat: item.lat, lng: item.lng }}
        key={item.lng}
      />
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
          scrollwheel={false}
          streetViewControl={false}
          zoomControl={false}
        >
          <Marker
            position={{ lat: this.props.lat, lng: this.props.lng }}
            key="user"
            label={<Icon>face</Icon>}
          // TODO: Fix icons
          // icon={<FaceIcon />}
          />
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
