import express from 'express';
import { createCategory, getCatergories } from '../controller/category.js';

export const categoryRouter = express.Router();
categoryRouter
  .post('/category', createCategory)
  .get('/categories', getCatergories);
