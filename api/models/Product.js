import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const specShema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  imagereview: {
    type: Array,
    required: false,
  },
  image360: {
    type: Array,
    required: false,
  },
});

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 50,
    },
    type: {
      type: String,
      max: 50,
    },
    image: {
      type: String,
    },
    capacity: {
      type: Array,
    },
    description: {
      type: String,
      required: true,
    },
    imageReviews: {
      type: String,
    },
    reviews: [reviewSchema],
    specs: [specShema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      max: 50,
    },
    discount: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
