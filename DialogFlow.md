# Hey, I'm Hungry!
## Intents
## Entities
- FoodItem
- User
    - isDonor/Consumer?
    - Karma
    - Location

## Flows
    - Finding food
        1. Ask for food/availibility
        2. Find availible food nearby
        3. Return results

    - Requesting private food
        1. Find food

## Listings
    - Public food listing
        - Anyone can view/receive
        - Anyone can view/pin to receive
    - Private food listing
        - Request to pickup -> Donor approval -> PIN unlock
    - Public desire listing
        - Potential donors browse listings
        - Donors initiate fullfillment from listing

## Desire Listing:
    - Owner (User)
    - isAnonymous? (Bool)
    - isFullfilled? (Bool)
    - AvailibleAt (Time) - AvailibleUntil (Time)
    - Visibility:
        - VisibleAt (Time) - VisibleUntil (Time)
        - VisibilityDistance (Int)
    - DesireQuery (List<FoodListing|FoodCategory|FoodName>)

## Food Listing:
    - Owner (User)
    - FoodList (FoodItem)
    - Location (Lat/Lng)
    - AvailibleAt (Time) - AvailibleUntil (Time)
    - Visibility:
        - isPublic? (Bool)
        - VisibleAt (Time) - VisibleUntil (Time)
        - VisibilityDistance (Int)
    - CreatedAt (Time)
    - isReserved? (Bool)

## FoodItem:
    - Name
    - Type
    - Count/Amount
    - needsRefridgeration?
        - isRefriderated?
        - coldSinceTime
    - needsHeating?
        - isHot?
        - hasHeatingAvailable?
        - hotSinceTime
    - isReserved?

## Hardware:
    - Anchorable Box:
        - Dumb
        - IOT camera recognition
        - Refridgerated
        - Heated
    - IOT recognition camera
        - Fridge Cam

## Ideas:
    - Reserve food
        - At time?
        - Closest?
        - Specific food?
        - Create post expressing desire?
    - Classify food in dropzone
        - Create listing automatically?
        - Create listing on confirmation?
        - Send notification to modify/edit listing
    - User karma

## Notes:
    -
