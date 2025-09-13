// require('dotenv').config({path: './env' })
// As require() reduces consistency, we follow other approach

import dotenv from "dotenv"
import express from 'express'
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

const app = express()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Successfully running at PORT: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!!", err)
})


// Approach - 1
// IIFE ;()() directly execute fxn

// ;( async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERROR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on PORT ${process.env.PORT}`)
//         })
//     } catch (error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()

