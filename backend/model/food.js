import mongoose, { Schema } from 'mongoose';

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  updatedtAt: { type: Date, default: Date.now },
});

export const FoodModel = mongoose.model('Food', foodSchema);
