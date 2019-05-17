import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Header, ThemeProvider, Text, Card, Image } from 'react-native-elements';
import { MapView, Marker } from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FoodListing from './components/FoodListing.js';
const theme = {};

class FoodItem extends Component {
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

export default class HeyImHungryApp extends React.Component {
    constructor(props) {
        const endpoint = "https://api.heyimhungry.com/api/listings";
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) => {
                var ps = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
                fetch(endpoint, {
                    method: "GET",
                    body: ps
                }).then(response => response.json())
                  .then(data => this.setState({ data.listings }))
            })
        }
        render() {
            return (
                <ThemeProvider theme={theme}>
                    {/* Page header */}
                    <Header
                        containerStyle = {{ backgroundColor: 'orange' }}
                        leftComponent = { <FontAwesome name={'plus'} size={23} color="#fff" /> }
                        centerComponent = { <Text style={{fontSize: 23, color: '#fff'}}>Hey, I'm Hungry</Text> }
                        rightComponent = { <FontAwesome name={'sign-out'} size={23} color="#fff" /> }
                    />

                <ScrollView>
                    { this.state.listings.map(listing => (
                        <FoodListing data={listing} />
                    ))}
                </ScrollView>

            </ThemeProvider>
            );
        }
    }

export default FoodItem;
