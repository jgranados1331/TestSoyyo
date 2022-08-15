import getEntityId from "../schema/getEntityId.json"
const Ajv = require("ajv")
const ajv = new Ajv()
var postEntityId = require("axios");

async function filterEntityId(data){
    let {startId,endId}=data;
    console.log('==========',startId);
    let result=[]
    for (;startId <= endId;){
        const response = await postEntityId.get(`https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${startId}`);
        const data=response.data.data;
        const respuesta={
            entityId:data.entityId,
            name:data.name
        };
        result.push(respuesta)
        
        //result.push(response);
           /* if(error){
               //return console.dir(error);
            }
            console.log(JSON.parse(result));
        };*/
        startId++
    };
    return result.sort(SortArray)
}
   
function SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}

export default filterEntityId;