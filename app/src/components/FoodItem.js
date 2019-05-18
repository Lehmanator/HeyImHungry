import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import FoodListing from './components/FoodListing.js';
const theme = {};

class FoodItem extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
        <div>
        <Image source={{ uri: this.props.image_url }}/>
        <Text style={{marginBottom: 10}}>
            {this.props.name} - {this.props.description}
        </Text>
        <div>
    )
  }
}
export default FoodItem;
