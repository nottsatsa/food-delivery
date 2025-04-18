import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  // totalPrice: { type: Number, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedtAt: { type: Date, default: Date.now },
});

export const CategoryModel = mongoose.model('Category', categorySchema);
