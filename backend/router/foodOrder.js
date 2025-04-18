import express from 'express';
import { createFoodOrder, getOrderByUserId } from '../controller/foodOrder.js';

export const foodOrderRouter = express.Router();
foodOrderRouter
  .post('/order', createFoodOrder)
  .get('/orderByUserId/:userId', getOrderByUserId);
