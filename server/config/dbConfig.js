import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected`);
  } catch (error) {
    throw new Error(error);
  }
};
