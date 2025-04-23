import { response } from 'express';
import { UserModel } from '../model/user.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, 'hashedPas');

  try {
    const oldUser = await UserModel.find({ email: email });
    console.log(oldUser);
    if (oldUser.length > 0)
      return res.status(405).send({
        success: false,
        message: 'user already create',
      });

    const user = await UserModel.create({
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      isVerified: isVerified,
      address: address,
    });
    return res.status(200).send({ success: true, user: user }).end();
  } catch (error) {
    console.error(error, 'error');
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getUsers = async (_, res) => {
  try {
    const users = await UserModel.find().select('-password');
    return res.status(200).send({ success: true, users: users }).end();
  } catch (error) {
    console.error(error, 'error');
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    return res.status(200).send({ success: true, user: user }).end();
  } catch (error) {
    console.error(error, 'error');
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
