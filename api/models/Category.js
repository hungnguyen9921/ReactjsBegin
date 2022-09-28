import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  title: {
    type: Array,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
