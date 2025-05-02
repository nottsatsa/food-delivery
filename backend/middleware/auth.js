import { configDotenv } from 'dotenv';
import { response } from 'express';
import jwt from 'jsonwebtoken';
import { decode } from 'jsonwebtoken';

configDotenv();
const secret_key = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      res.send({ success: false, message: 'user not found' });
    }
    const token = header.split(' ')[1];
    console.log(header, 'token');
    const decode = jwt.verify(token, secret_key);
    if (!decode._doc._id) {
      res.status(401).send({
        success: false,
        message: 'unuthorized',
      });
    }
    console.log(decode._doc._id, 'decode');

    // req.body = { ...req.body, user: decode._doc }; //user iin medeelel avah heseg
    next();
    // //   //   const { token } = req.body;
  } catch (error) {
    res.send({
      message: 'token espired',
      error: error,
    });
  }
};

// import jwt from 'jsonwebtoken';
// const secret_key = process.env.SECRET_KEY;

// export const verifytoken = (req, res, next) => {
//   const token = req.headers.authorization;
//   const splitted = token.split(' ')[1];
//   const decode = jwt.decode(splitted, secret_key);
//   req.body = { ...req.body, userData: decode._doc };
//   console.log(req.body, 'body');
//   next();
// };
