import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  capacity: {
    type: Array,
  },
  description: {
    type: Array,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
