var entityval={
    "type": "object",
    "properties": {
        "entityId":{
            "type":"integer"
        },

        "name":{
            "type":"string"
        },

        "identificationNumber":{
            "type":"string"
        },

        "expirationDate":{
            "type":"string"
        },

        "contactName":{
            "type":"string"
        },

        "contactEmail":{
            "type":"string"
        },

        "logo":{
            "type":"string"
        }
        
    },

    "required":["name","identificationNumber","expirationDate","contactName","contactEmail"]
}
