/**
 * @class       : FoodListing
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Sunday Mar 17, 2019 12:43:50 EDT
 * @description : FoodListing
 */
import React from 'react';
import { ScrollView } from 'react-native';
import { Header, ThemeProvider, Text, Card, Image } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const theme = {};

export default class FoodListing extends React.Component {
    constructor(props) {
        const endpoint = "https://api.heyimhungryapp.com/api/listings"
        fetch(endpoint).then((res) => {})
    }
    render() {
        return (
            <Card title={} image={require('./assets/icon.png')}>
                <MapView
                    initialRegion={{
                        latitude: 40.803863,
                        longitude: -77.864962,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001
                    }} >
                </MapView>
                {this.state.fooditems.map(item => (
                    <FoodItem data={item.data} />
                ))}
            </Card>
        )
    }
}


