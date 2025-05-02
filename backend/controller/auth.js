import { UserModel } from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
import nodemailer from 'nodemailer';
import { response, text } from 'express';
import { sendMail } from '../utils/sendMailer.js';

configDotenv();
const secret_key = process.env.SECRET_KEY;

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch, 'isMatch');
      if (!isMatch) {
        return res
          .status(404)
          .send({ success: false, message: 'user pass or email incorrect' });
      }

      console.log(user, 'user');
      const token = jwt.sign({ ...user }, secret_key, { expiresIn: 3600 * 24 });

      return res.status(200).send({ success: true, token });
    } else {
      return res
        .status(404)
        .send({ success: false, message: 'user not found' });
    }
  } catch (error) {
    // console.error(error, 'error');
    // return res
    //   .status(400)
    //   .send({
    //     success: false,
    //     message: error,
    //   })
    //   .end();
  }
};

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   secure: true,
//   port: 465,
//   auth: {
//     user: 'tsatsralsainbolor@gmail.com',
//     pass: 'iyklyplzkumjpmgv',
//   },
// });

export const sendMailer = async (req, res) => {
  const { email, subject, text } = req.body;
  try {
    const response = await sendMail(email, subject, text);
    res.status(200).send({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};
