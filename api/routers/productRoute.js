import express from "express";
import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

const productRoute = express.Router();

productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findOne({
      id: req.params.id,
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw Error("Product not Found");
    }
  })
);

export default productRoute;
