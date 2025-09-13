import mongoose from 'mongoose'
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGO-Connected : Host ${connectionInstance.connection.host} `) 
        // study console.log about connectionInstance
    } catch (error){
        console.log("MONGODB error", error)
        process.exit(1) // study ( Node-JS )
    }
}


export default connectDB 