import React, { Component, } from 'react';
import { CssBaseline, } from '@material-ui/core';
import * as firebase from 'firebase';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }
  componentDidMount() {
    const rootRef = firebase.database().ref().child('heyimhungry');
    const listingsRef = rootRef.child('listings');
    listingsRef.on('value', snap => {
      this.setState({
        listings: snap.val()
      });
    });
  }
  render() {
    return (
      <div className="App" style={{ overflow: 'hidden' }}>
        <CssBaseline />
        <Nav auth={this.auth} />
        <HomePage />
      </div >
    );
  }
}

export default App;
