import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"

dotenv.config();

const connectDB = async () => {
    try {
        const contc = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected successfully on host ${contc.connection.host}`.bgGreen);
    } catch (error) {
        console.log(`Error : ${error.message}`.bgRed);
    }
}

export default connectDB