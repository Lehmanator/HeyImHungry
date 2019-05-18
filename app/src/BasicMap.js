/**
 * @class       : BasicMap
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 20:58:58 EDT
 * @description : BasicMap
 */

import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import logo from '../../logo.png';
import Fastfood from '@material-ui/icons/Fastfood';

class BasicMap extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
        document.getElementById(this.props.id),
        {
          center: this.props.center,
          zoom: this.props.zoom,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
        }
    );
    const bounds = new google.maps.LatLngBounds();
    const user_marker = new window.google.maps.Marker({
      position: this.props.center,
      map: map,
      title: 'You',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        strokeColor: 'blue',
        scale: 10,
      },
    });
    const marker = new window.google.maps.Marker({
      position: this.props.pin,
      map: map,
      // label: this.props.title,
      title: this.props.title,
      icon: 'https://icongr.am/material/hamburger.svg?size=48&color=F09060',
    });
    bounds.extend(user_marker.getPosition());
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBcg9ZOJX84kevI_cng627MTTzAo7WAK3Y`;
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', (e) => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return <div style={{width: 500, height: 500}} id={this.props.id} />;
  }
}

BasicMap.propTypes = {
  center: PropTypes.object,
  pin: PropTypes.object,
  zoom: PropTypes.number,
  title: PropTypes.string,
};
BasicMap.defaultProps = {
  center: {lat: 42.05, lng: -80.22},
  pin: {lat: 42.07, lng: -80.23},
  zoom: 11,
  title: 'DefaultItem',
};
export default BasicMap;
