import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDB connected successfully!!")
    } catch (error) {
        console.log("Error connecting to the MongoDB : ", error)
        process.exit(1)
    }
}