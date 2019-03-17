import React from 'react';
import { ScrollView } from 'react-native';
import { Header, ThemeProvider, Text, Card, Image } from 'react-native-elements';
import { MapView, Marker } from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FoodListing from './components/FoodListing';

const theme = {};

export default class HeyImHungryApp extends React.Component {
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
        <FoodItem /><FoodItem /><FoodItem /><FoodItem />
        </ScrollView>

      </ThemeProvider>
    );
  }
}
