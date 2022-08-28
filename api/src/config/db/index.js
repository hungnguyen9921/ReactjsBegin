import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/shop_cnpm_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successfully");
  } catch (error) {
    console.log("Connect Failure");
  }
}

export default connect;
