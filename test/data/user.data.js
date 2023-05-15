export const VALID_AUTH = {
    "username": "admin",
    "password": "password123"
}

export const INVALID_AUTH = {
    "username": "admin",
    "password": "password"
}

export const PARTIAL_UPDATE_CASE_1 = {
    "additionalneeds": "Extra bed"
}

export const PARTIAL_UPDATE_CASE_2 = {
    "firstname": "Geraldine"
}

export const PARTIAL_UPDATE_CASE_3 = {
    "lastname": "Indiana"
}

export const PARTIAL_UPDATE_CASE_4 = {
    "totalprice": 800000
}

export const PARTIAL_UPDATE_CASE_5 = {
    "depositpaid": false
}

export const PARTIAL_UPDATE_CASE_6 = {
    "bookingdates":{
        checkin: "2023-05-18", 
        checkout: "2023-05-19"
    } 
}

export const PARTIAL_UPDATE_CASE_7 = {
    "firstname": "Jennie",
    "lastname": "Lovrienka"
}

export const PARTIAL_UPDATE_CASE_8 = {
    "totalprice": 10000000,
    "depositpaid": true,
    "bookingdates":{
        checkin: "2023-06-28", 
        checkout: "2023-06-30"
    },
    "additionalneeds": "Extra bed and extra mineral water"
}

export const PARTIAL_UPDATE_EMPTY = {
    "firstname": null,
    "totalprice": null,
    "additionalneeds": null
}

export const PARTIAL_UPDATE_INVALID_DATA = {
    "firstname": 1000000,
    "lastname": 65000,
    "totalprice": "yes",
    "depositpaid": false,
    "additionalneeds": 4000
}

export const PARTIAL_UPDATE_INVALID_CHECKOUT = {
    "bookingdates":{
        checkin: "2023-05-14", 
        checkout: "2023-03-01"
    }
}