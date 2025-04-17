import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, min: 8 },
  // orderedFoods:Object
  isVerified: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedtAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['User', 'Admin'], default: 'User' },
});

export const UserModel = mongoose.model('User', userSchema);
