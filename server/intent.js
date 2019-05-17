/**
 * @class       : intent
 * @author      : Sam Lehman (samlehman617@gmail.com)
 * @created     : Sunday Mar 17, 2019 04:02:12 EDT
 * @description : intent
 */
const {dialogflow} = require('actions-on-google');
const {WebhookClient} = require('dialogflow-fulfillment');
const functions = require('firebase-functions');

var users = [];
//var listings = [];

class User {
    constructor(username, friendly_name) {
        this.name = friendly_name;
        this.username = username;
    }
}
class Reservation {
    constructor(props) {}
}
class FoodItem {
    constructor(owner, name, amount) {
        this.owner = props.owner
        this.name = props.product
        this.amount = props.amount
    }
    toString() {}
}

class FoodListing {
    constructor(owner, props) {
        this.owner = owner;
        this.items = [];
        for (let [i, item] of props.parameters['product']) {
            this.items.push(new FoodItem(owner, item, props.parameters['product'][i]));
        }
    }
    addItem(props) {
        this.items.push(new FoodItem());
    }
    editItem(props) {

    }
    removeItem(props) {
    }
    toString() {}
}

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    function welcome(agent) {}
    function addListing(agent) {
        var listing = new FoodListing(agent);
    }
    function editListing(agent) {}
    function removeListing(agent) {}
    function getListing(agent) {}
    function addItem(agent) {}
    function editItem(agent) {}
    function removeItem(agent) {}
    function getItem(agent) {}

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('food.list', addListing);
    agent.handleRequest(intentMap);
}
