import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const MOGNO_URL = "mongodb+srv://igsahilsayyad:9325@real-time-chat-app.q5bdt8q.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(MOGNO_URL);
    console.log(`MongoDb connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDb;
