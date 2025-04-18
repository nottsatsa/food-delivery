import mongoose, { Schema } from 'mongoose';

// const foodOrderItems

const foodOrderSchema = new mongoose.Schema({
  totalPrice: { type: Number, required: true },
  // foodOrderItems:FoodorderItem[],
  status: {
    type: String,
    enum: ['Pending', 'Canceled', 'Delivered'],
    default: 'Pending',
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  // category: { type: Schema.Types.ObjectId, ref: 'Category' },
  createdAt: { type: Date, default: Date.now },
  updatedtAt: { type: Date, default: Date.now },
});

export const FoodOrderModel = mongoose.model('foodOrder', foodOrderSchema);
