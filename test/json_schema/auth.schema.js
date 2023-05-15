export const AUTH_SCHEMA = {
    "type": "object",
    "properties": {
    "token": {
        "type": "string"
    }
    },
    "required": [
    "token"
    ]
}

export const INVALID_AUTH_SCHEMA = {
    "type": "object",
    "properties": {
        "reason": {
            "type": "string"
        }
    },
    "required": ["reason"]
}
