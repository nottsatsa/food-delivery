import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  // role:UserRoleEnum,
  // orderedFoods:Object
  isVerified: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedtAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model('User', userSchema);
