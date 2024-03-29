import cor from "cors";
import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routers/authRoute.js";
import productRoute from "./routers/productRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
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

const PORT = process.env.PORT || 8000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cor());

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
