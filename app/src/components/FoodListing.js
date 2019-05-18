/**
 * @class       : FoodListing
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Sunday Mar 17, 2019 12:43:50 EDT
 * @description : FoodListing
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const theme = {};

class FoodListing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Yolo</div>
      /*
      <Card title={"yolo"} image={require("../assets/icon.png")}>
        <MapView
          initialRegion={{
            latitude: 40.803863,
            longitude: -77.864962,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
        />
        {this.state.data.map(item => (
          <FoodItem data={item.data} />
        ))}
      </Card>
      */
    );
  }
}

export default FoodListing;
