import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
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

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
