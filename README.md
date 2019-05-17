<h1 align="center">
  <img alt="logo" src="https://github.com/samlehman617/HeyImHungry/raw/master/logo.png" />
  <br />
  HeyImHungry
</h1>


<div align="center">
  <a href="https://travis-ci.com/samlehman617/HeyImHungry">
    <img alt="Build Status" src="https://travis-ci.com/samlehman617/HeyImHungry.svg?branch=master" />
  </a>
  <a href="https://opensource.org/licenses/mit-license.php">
    <img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" />
  </a>
  <a href="https://samlehman.me/HeyImHungry">
    <img alt="Hits" src="http://hits.dwyl.io/samlehman617/samlehman617/HeyImHungry.svg" />
  </a>
</div>

<br />

<p align="center">
  Hey, I'm Hungry helps eliminate food waste buy connecting hungry users with people who have excess or leftover food.
</p>

<br />

## Overview

HeyImHungry is a platform through which individuals, companies, and food banks can list available food for hungry individuals to claim and consume. We have built a web application using [React](https://reactjs.org). We have also built an Actions on Google application that uses DialogFlow for intent recognition to allow users to request food from posted listings and post new food listings. We have also written code to be deployed on small computers like [Raspberry Pi](https://raspberrypi.org) that enables using motion sensing and image recognition to automatically create new listings to HeyImHungry.

## Web App

The web application is a single-page application built with [React](https://reactjs.org) that shows food listings and allows posting of new food listings and requesting existing listings.

### Installation

To install the necessary prerequisites to run the web app, run
```bash
$ git clone https://github.com/samlehman617/HeyImHungry
$ cd HeyImHungry/app
$ npm install
```
from the command line

### Running

To run the web app, simply run
```bash
$ npm start
```
from the command line


## Food Recognition Application

The food recognition application is a docker container that detects motion using the motion sensor (if unavailable, falls back to camera) to detect when new items are placed in the DropZone and uses image recognition to create a listing for the newly added items.

### Requirements

* Linux computer such as [Raspberry Pi](https://raspberrypi.org) and accompanying hardware (SD card, power supply)
* Camera (such as camera modules for Raspberry Pi or a USB webcam)
* (Optional) Motion sensor

### Installation

On the machine you intend to run the food recognition software:
1. Install docker
```bash
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
# Optional
$ sudo usermod -aG docker {your-user}
```

### Running

To start the service on your machine, run
```bash
$ sudo docker run --name HeyImHungry -p 3000:3000 --restart unless-stopped samlehman617/HeyImHungry
```

To enable the service to start on boot, run:
```bash
$ sudo chmod +x detector/HeyImHungry.service
$ sudo cp detector/HeyImHungry.service /etc/systemd/system
$ sudo systemctl enable HeyImHungry
```
on systemd-based distros.


## Google Assistant

Actions on Google project to allow users to request a claim on a listing or post new listings from the Google Assistant. 

### Usage

#### Initiate an interaction
Initiate an interaction with HeyImHungry by saying `talk to HeyImHungry` after activating Google Assistant.

#### Post a new listing
Say one of the following:
* `I have extra food`
* `I have leftovers`
* `Create a new listing`

#### Read available listings
Say one of the following:
* `I'm hungry.`
* `I need food.`
* `What food is available?`

#### Make request to claim listing

* `Claim listing number {listing number}`


## License

[MIT](https://github.com/samlehman617/web-resume/blob/master/LICENSE) © [Sam Lehman](https://samlehman.me)
