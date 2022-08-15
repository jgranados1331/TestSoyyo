import filterEntityId from "./controllers/postControllerEntityId";
import express from "express";
import morgan from "morgan";
//routes
import routesapi from "./routes/routes";
import request from "request";


const app=express();

//settings
app.set("port",4000);

//middlewares
app.use(express.json())
app.use(morgan("dev"));

//routes

//app.get(`https://awovcw7p76.execute-api.us-east-1.amazonaws.com/${ambiente}/entity/v2.1/entities/1`);
app.use(`/api/postEntity`, routesapi)
export default app;

app.post("/api/filter", async (req,res)=>{
    console.log(req.body)
    const data={
        startId:req.body.startId,
        endId:req.body.endId 
    }
    const resjson = await filterEntityId(data)
    res.json(resjson);
})