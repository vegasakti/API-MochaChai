export const BOOKING_SCHEMA = {
    "type": "object",
    "properties": {
    "firstname": {
        "type": "string"
    },
    "lastname": {
        "type": "string"
    },
    "totalprice": {
        "type": "integer"
    },
    "depositpaid": {
        "type": "boolean"
    },
    "bookingdates": {
        "type": "object",
        "properties": {
        "checkin": {
            "type": "string",
            "format": "date"
        },
        "checkout": {
            "type": "string",
            "format": "date"
        }
        },
        "required": [
        "checkin",
        "checkout"
        ]
    },
    "additionalneeds": {
        "type": "string"
    }
    },
    "required": [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates"
    ]
}


export const CREATE_SCHEMA = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
    "bookingid": {
        "type": "integer"
    },
    "booking": {
        "type": "object",
        "properties": {
        "firstname": {
            "type": "string"
        },
        "lastname": {
            "type": "string"
        },
        "totalprice": {
            "type": "integer"
        },
        "depositpaid": {
            "type": "boolean"
        },
        "bookingdates": {
            "type": "object",
            "properties": {
            "checkin": {
                "type": "string"
            },
            "checkout": {
                "type": "string"
            }
            },
            "required": [
            "checkin",
            "checkout"
            ]
        },
        "additionalneeds": {
            "type": "string"
        }
        },
        "required": [
        "firstname",
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds"
        ]
    }
    },
    "required": [
    "bookingid",
    "booking"
    ]
}