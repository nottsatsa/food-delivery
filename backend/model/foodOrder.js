import mongoose from 'mongoose';

const foodOrderSchema = new mongoose.Schema({
  totalPrice: { type: Number, required: true },
  // foodOrderItems:FoodorderItem[],
  status: {
    type: String,
    enum: ['Pending', 'Canceled', 'Delivered'],
    default: 'Pending',
  },
  createdAt: { type: Date, default: Date.now },
  updatedtAt: { type: Date, default: Date.now },
});

export const foodOrderModel = mongoose.model('foodOrder', foodOrderSchema);
