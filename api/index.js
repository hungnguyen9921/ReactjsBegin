import express from "express";
import cor from "cors";
import path from "path";
import dotenv from "dotenv";
import connect from "./src/config/db/index.js";
import userRoute from "./routers/userRoute.js";
import AuthRoute from "./routers/authRoute.js";
import productRoute from "./routers/productRoute.js";
import ImportData from "./dataImported.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connect();
// Connect to db//

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
app.use("/api/users", userRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/products", productRoute);

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
