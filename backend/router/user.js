import express from 'express';
import { createUser, getUserById, getUsers } from '../controller/user.js';

export const userRouter = express.Router();

userRouter
  .post('/user', createUser)
  .get('/users', getUsers)
  .get('/user/:id', getUserById);
