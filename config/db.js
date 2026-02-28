import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.log(`MongoDB Error ${err}`);
  }
};

export default connectDB;
