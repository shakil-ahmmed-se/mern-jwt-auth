import "dotenv/config";
import express, { Request, Response } from 'express';
import connectToDatabase from './config/db';


const app = express();

app.get("/", (req, res)=> {
   res.status(200).json({
        status: "healthy"
    });
});

app.listen(4004, async ()=>{
    console.log(`Listening port 4004`);
    await connectToDatabase();
})