import express from "express";
import path from "path";
import cor from "cors";
import dotenv from "dotenv";
import connect from "./src/config/db/index.js";
import authRoute from "./routers/authRoute.js";
import productRoute from "./routers/productRoute.js";
import ImportData from "./routers/dataImported.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connect();

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
