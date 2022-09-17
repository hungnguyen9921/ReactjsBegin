import mongoose from "mongoose";

async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successfully");
  } catch (error) {
    console.log("Connect Failure");
  }
}

export default connect;
