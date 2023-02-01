import mongoose from "mongoose";

const connectDB = async (url) => {
  //*sirve para hacer una consulta estricta
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(url);
    console.log("Connected MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
