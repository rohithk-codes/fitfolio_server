import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    if (!mongoURL) throw new Error("DB URL not defined");
    await mongoose.connect(mongoURL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Error in DB Connection");
    process.exit(1);
  }
};
export default connectDB;
