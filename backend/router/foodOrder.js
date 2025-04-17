import express from 'express';
import { createFoodOrder } from '../controller/foodOrder.js';

export const foodOrderRouter = express.Router();
foodOrderRouter.post('/order', createFoodOrder);
