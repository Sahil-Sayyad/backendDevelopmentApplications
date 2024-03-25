import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const MOGNO_URL = "";
    await mongoose.connect(MOGNO_URL);
    console.log(`MongoDb connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDb;
