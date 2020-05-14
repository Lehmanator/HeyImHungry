<div align="center">
    <h3 align="center">
    <img text-align="middle" src="https://raw.githubusercontent.com/samlehman617/HeyImHungry/master/logo.png" width="30%"/>
  <h3>
<h1 align="center">Hey, I'm Hungry!<br/>
  <span>
  <img src="https://travis-ci.com/samlehman617/HeyImHungry.svg?branch=master" />
  <img src="http://hits.dwyl.io/samlehman617/samlehman617/heyimhungry.svg" />
  <a href="https://samlehman.me/HeyImHungry"><img src="https://img.shields.io/badge/Demo-brightgreen.svg?style=flat" /></a>
  <a href="https://saythanks.io/to/publicSamLehman">
    <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/publicSamLehman">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
  </span>
  <br/>
</h1>
<h4>Hey, I'm Hungry helps eliminate food waste buy connecting hungry users with people who have excess or leftover food.</h4>


<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#usage">Usage</a> •
  <a href="#web-app-installation">Web App Installation</a> •
  <a href="#web-app-usage">Web App Usage</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#hardware-installation">Hardware Installation</a> •
  <a href="#hardware-usage">Hardware Usage</a> •
  <a href="#google-assistant">Google Assistant</a> •
  <a href="#license">License</a>
</p>
</div>

## Overview

HeyImHungry is a platform through which individuals, companies, and food banks can list available food for hungry individuals to claim and consume. We have built a web application using [React](https://reactjs.org). We have also built an Actions on Google application that uses DialogFlow for intent recognition to allow users to request food from posted listings and post new food listings. We have also written code to be deployed on small computers like [Raspberry Pi](https://raspberrypi.org) that enables using motion sensing and image recognition to automatically create new listings to HeyImHungry.

## Web App

The web application is a single-page application built with [React](https://reactjs.org) that shows food listings and allows posting of new food listings and requesting existing listings. The hardware device performs the image recognition on the device and interacts with the API automatically.

## Web App Installation

To install the necessary prerequisites to run the web app, run
```bash
$ git clone https://github.com/samlehman617/HeyImHungry
$ cd HeyImHungry/app
$ npm install
```
from the command line

## Web App Usage

To run the web app, simply run
```bash
$ npm start
```
from the command line


## Food Recognition Application

The food recognition application is a docker container that detects motion using the motion sensor (if unavailable, falls back to camera) to detect when new items are placed in the DropZone and uses image recognition to create a listing for the newly added items.

## Requirements

* Linux computer such as [Raspberry Pi](https://raspberrypi.org) and accompanying hardware (SD card, power supply)
* Camera (such as camera modules for Raspberry Pi or a USB webcam)
* (Optional) Motion sensor

## Hardware Installation

On the machine you intend to run the food recognition software:
1. Install docker
```bash
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
# Optional
$ sudo usermod -aG docker {your-user}
```

## Hardware Usage

To start the service on your machine, run
```bash
$ sudo docker run \
    -p 3000:3000 \
    --name HeyImHungry \
    --restart unless-stopped \
    samlehman617/HeyImHungry
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
