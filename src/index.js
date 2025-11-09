import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./db/index.js";
import {app} from "./app.js";
dotenv.config({
    path:'./.env'
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.error("Error connecting to the database", err);
});

















/*
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.error("Error from the server side", error);
        });
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port : ${process.env.PORT}`);
        });
        

    }
    catch(error){
        console.error("Error connecting to the database", error);

    }

})()
*/