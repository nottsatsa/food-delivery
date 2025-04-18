import express from 'express';
import { createFood, getFoodsByCategoryId } from '../controller/food.js';

export const foodRouter = express.Router();
foodRouter
  .post('/food', createFood)
  .get('/foodsByCagtegoryId/:categoryId', getFoodsByCategoryId);
