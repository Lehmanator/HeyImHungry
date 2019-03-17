import React from 'react';
import { Header, ThemeProvider, Icon, Text, Card, Image } from 'react-native-elements';

const theme = {
  Header: {
    containerStyle: { backgroundColor: 'orange' },
  },
  Icon: {
    type: 'font-awesome',
  },
};

class FoodItem extends React.Component {
  render() {
    return (
      <Card title='Sushi' image={require('./assets/icon.png')}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
      </Card>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>

        {/* Common page header */}
        <Header
          leftComponent = {{ icon: 'plus', color: '#fff' }}
          centerComponent = { <Text style={{fontSize: 23, color: '#fff'}}>Hey, I'm Hungry</Text> }
          rightComponent = {{ icon: 'sign-out', color: '#fff' }}
        />

        <FoodItem />

      </ThemeProvider>
    );
  }
}