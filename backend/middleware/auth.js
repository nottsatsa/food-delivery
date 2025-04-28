// import { configDotenv } from 'dotenv';
// import jwt from 'jsonwebtoken';

import { decode } from 'jsonwebtoken';

// configDotenv();
// const secret_key = process.env.SECRET_KEY;

// export const verifyToken = (req, res, next) => {
//   console.log(req.header.Authorization);
//   next();
//   //   const { token } = req.body;
// };
req.body = { ...req.body, user: decode._doc }; //user iin medeelel avah heseg
