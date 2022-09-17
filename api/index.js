import cor from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import authRoute from "./routers/authRoute.js";
import ImportData from "./routers/dataImported.js";
import productRoute from "./routers/productRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cor());

//// Router /////

//// SINGLE PRODUCT ///

app.use("/api/import", ImportData);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
