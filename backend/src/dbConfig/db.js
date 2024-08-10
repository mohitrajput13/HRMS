

import mongoose from "mongoose";

//connectDB function
const connection = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://mohitrajputntf:1Urg6iTQwN0Jn2pH@cluster0.lyrp7km.mongodb.net/");
        console.log(`MongoDb Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit(1)
    }
}
export default connection;