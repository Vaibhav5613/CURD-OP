import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`\n MongoDB connected successfully`);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
  }
};

export default connectDB;


