import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
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

const CartItem = mongoose.model("CartItem", CartItemSchema);

export default CartItem;
