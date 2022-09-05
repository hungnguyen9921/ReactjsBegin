import express from "express";
import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

const singleproductRoute = express.Router();

singleproductRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw Error("Product not Found");
    }
  })
);

export default singleproductRoute;
