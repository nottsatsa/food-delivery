import express from 'express';
import { createFood, getFoodsByCategoryId } from '../controller/food.js';
import { verifyToken } from '../middleware/auth.js';

export const foodRouter = express.Router();
foodRouter
  .post('/food', createFood)
  .get('/foodsByCagtegoryId', verifyToken, getFoodsByCategoryId);
//.get('/foodsByCagtegoryId/:categoryId', getFoodsByCategoryId);
//  .get('/foodsByCagtegoryId/:categoryId', verifyToken, getFoodsByCategoryId);
