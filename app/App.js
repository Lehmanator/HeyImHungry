import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ScrollView } from "react-native";
import {
  Header,
  ThemeProvider,
  Text,
  Card,
  Image
} from "react-native-elements";
import { MapView, Marker } from "react-native-maps";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FoodListing from "./components/FoodListing";
import PropTypes from "prop-types";

const theme = {};

class HeyImHungryApp extends Component {
  constructor(props) {}
  componentWillMount() {}
  componentDidMount() {}
  componentWillUpdate() {}
  componentDidUpdate() {}

  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* Page header */}
        <Header
          containerStyle={{ backgroundColor: "orange" }}
          leftComponent={<FontAwesome name={"plus"} size={23} color="#fff" />}
          centerComponent={
            <Text style={{ fontSize: 23, color: "#fff" }}>Hey, I'm Hungry</Text>
          }
          rightComponent={
            <FontAwesome name={"sign-out"} size={23} color="#fff" />
          }
        />
        <ScrollView>
          {this.state.listings.map(listing => (
            <FoodListing data={listing} />
          ))}
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default HeyImHungryApp;
