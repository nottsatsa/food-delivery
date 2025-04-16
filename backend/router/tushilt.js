import express from 'express';
import { getHello } from '../controller/turshilt.js';

export const turshiltRouter = express.Router();

turshiltRouter.get('/', getHello);
