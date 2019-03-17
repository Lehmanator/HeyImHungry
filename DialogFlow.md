## Intents
## Entities
### User:
    User-Supplied Fields:
    - Username (Str)
    - Friendly Name (Str)
    - Email (Str: Email)
    - DropZones (List<DropZones>)
    - Availibiliy:
        - defaultSchedule (List(7)<Day:List<Start,End>>)
        - MaxDesireSearchDistance (Int+)
        - MaxDonateSearchDistance (Int+)
    Calculated Fields:
    - karma (Int+)
    Status Fields:
    - currentSchedule (List<Time:Start,End>>)
    - currentLocation (Int[2]:Lat,Lng)
    - openDonorListings (List<FoodListing>)
    - openDesireListings (List<DesireListing>)

### DropZone:
    Implied Fields:
    - Owner (Str: Username)
    User-Supplied Fields:
    - FriendlyName (Str)
    - Location (Array[2]<Int: Lat,Lng>)
    - LocationDescription (Str)
    - defaultRequiresUserPresent (Bool)
    - defaultAuthLevel (Int+)
    Calculated Fields:
    - ID (Int+)
    Status Fields:
    - isAvailible? (Bool)
    - isFull? (Bool)
    - FoodItems (List<FoodItem>)
    Hardware-Defined Fields:
    - hasCapability? (Array[2]<Bool>)
    - capacity (Int+)

### Desire Listing:
    Implied Fields:
    - Owner (Str: Username)
    User-Supplied Fields:
    - isAnonymous? (Bool)
    - DesireQuery (List<FoodListing|FoodCategory|FoodName>)
    - AvailiblitySchedule (Time[2]: Start, End)
    Calculated Fields:
    - isAvailible? (Bool)
    Status Fields:
    - Availibility:
        - AvailibleAt (Time) - AvailibleUntil (Time)
        - isFulfilled? (Bool)
    - Visibility:
        - VisibleAt (Time) - VisibleUntil (Time)
        - VisibilityDistance (Int+)

### Food Listing:
    Implied Fields:
    - Owner (Str: Username)
    User-Supplied Fields:
    - FoodList (List<FoodItem>)
    - authLevel (Int+)
    Calculated Fields:
    - ID (Int+)
    - CreatedAt (Time)
    Status Fields:
    - FoodList (List<FoodItem>)
    - Location (Int[2]: Lat,Lng)
    - Availibility:
        - AvailibleAt (Time) - AvailibleUntil (Time)
        - hasHeatingAvailible? (Bool)
        - hasCoolingAvailible? (Bool)
    - Visibility:
        - isPublic? (Bool)
        - VisibleAt (Time) - VisibleUntil (Time)
        - VisibilityDistance (Int+)
    - isReserved? (Bool)

### FoodItem(Int+:ID, Str:Name, Float/Int+: Count/Amount, Bool:NeedsHeating, Bool: NeedsCooling, Int+: DropZone.ID)
    Implied Fields:
    - Owner (Str: Username)
    User-Supplied Fields:
    - Name (Str)
    - Quantity (Float+)
    Calculated Fields:
    - Category (Str)
    - needsHeating/Cooling (Bool)
    - Freshness:
        - idealTimeRemaining (Int = (+/-) hot/cold_remaining | 0)
        - freshTimeRemaining (Int = +fresh_time_remaining | 0)
    Status Fields:
    - Availibility:
        - AvailibleAt (Time) - AvailibleUntil (Time)
        - isAvailible? (Bool)
        - isReserved? (Bool)
        - reservedBy (User)
        - requiresUserAvailible? (Bool)

## Flows:
### onDropzoneMotionDetected
    1. Classify Food
    2. Auto build listing
    3. Edit listing
        3a. Add unknown fields
    4. Confirm details
    5. Post
### addFoodListing(User, FoodListing)
    1. Ask for fields of FoodListing
    2. Create FoodListing object
### addFoodItemToListing(FoodListing.ID, FoodItem)
    1. Ask for fields of FoodItem
### searchFoodListings
    1. Ask for time
    1. Return nearest listings
    - Finding food
    1. Ask for food/availibility
    2. Find availible food nearby
    3. Return results

    - Requesting private food
    1. Find food

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
