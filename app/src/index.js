/**
 * @class       : index
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Friday May 17, 2019 15:07:00 EDT
 * @description : index
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import * as firebase from 'firebase';

var firebase_config = {
  apiKey: "AIzaSyBTghhYfsKGyOLoIYfTLnnMCf5QZM4uPlE",
  authDomain: "hey-i-m-hungry.firebaseapp.com",
  databaseURL: "https://hey-i-m-hungry.firebaseio.com",
  projectId: "hey-i-m-hungry",
  storageBucket: "hey-i-m-hungry.appspot.com",
  messagingSenderId: "32086157409",
  appId: "1:32086157409:web:6864f3772196871c"
};
firebase.initializeApp(firebase_config);

ReactDOM.render(< App />, document.getElementById('root'));
