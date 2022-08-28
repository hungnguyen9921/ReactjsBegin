import express from "express";
import products from "./data/Product.js";
import cor from "cors";
import path from "path";
import dotenv from "dotenv";
import connect from "./src/config/db/index.js";
import userRoute from "./routers/userRoute.js";
import AuthRoute from "./routers/authRoute.js";
const app = express();
const port = 8800;

dotenv.config();

// Connect to db//

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cor());

//// Router /////

//// API ////
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.use("/api/users", userRoute);
app.use("/api/auth", AuthRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
