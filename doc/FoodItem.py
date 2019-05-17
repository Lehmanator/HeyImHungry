#!/usr/bin/env python3

class FoodItem:
    def __init__(self, userID, name, dropzone, desc="", amount=1, requiresUser=0):
        self.owner = userID
        self.name = name
        self.quantity = amount
    def getFoodInfo(self):
        # Get food type
        self.category = self.determineCategory()
        # Get food nutrition info
        self.nutritionData = self.getNutritionalData()
        # Get food freshness info
        self.spoilTime = self.calcSpoilTime()
        self.roomTempTime = self.calcIdealTime()
        pass
    def determineCategory(self):
        pass
    def getNutritionalData(self):
        pass
    def calcIdealTime(self):
        pass
    def calcSpoilTime(self):
        pass

class FoodListing:
    def __init__(self, ownerUserID, foodItems=[]):
        self.items = foodItems
        self.owner = ownerUserID

class DesireListing:
    def __init__(self, isPublic, name,):
        pass

class DropZone:
    def __init__(self, name, defaultAuthLevel=5, hasCam=0, hasHeat=0, hasCool=0, hasLock=0, hasKiosk=0):
        self.name = name
        self.authLevel = defaultAuthLevel
        self.defaultAuthLevel = defaultAuthLevel
        self.hasHeat = hasHeat
        self.hasCool = hasCool
        self.hasLock = hasLock
        self.hasKiosk = hasKiosk
        self.hasCam = hasCam
        self.id = self.generateID()
    def generateID()
        pass
    def setAuthLevel(self, level=self.defaultAuthLevel):
        self.authLevel = level
    def getCoordinates(self):
        pass

class User:
    def __init__(self, username, friendlyName, email):
        self.username = username
        self.friendlyName = friendlyName
        self.email = email
        self.karma = 0
        self.dropzones = []
        self.openDonorListings = []
        self.openDesireListings = []

class Reservation:
    def __init__(self, ownerID, recipientID):
        pass
