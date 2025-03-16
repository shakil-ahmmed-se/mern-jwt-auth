import mongoose from "mongoose"
import { MONGO_URI } from "../constants/env";


const connectToDatabase = async () =>{

    try {
        await mongoose.connect(MONGO_URI);
        console.log("Successfully connect to Database")
    } catch (error) {
        console.log("Colud not connect to database", error)
        process.exit(1);
    }
}

export default connectToDatabase;