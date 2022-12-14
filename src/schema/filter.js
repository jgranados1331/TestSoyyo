var validate = {
    "type": "object",
    "properties": {
        "startId":{
            "type": "integer",
          "format": "int32",
          "minimum": 1,
          "maximum": 20
        },

        "endId":{
          "type": "integer",
          "format":"int32",
          "minimum": 1,
          "maximum": 20
        }
    },
    "required":["startId","endId"]
}