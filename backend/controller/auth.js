import { UserModel } from '../model/user.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    console.log(user);
    if (user) {
      const pass = await bcrypt.compare(password, user.password);
      console.log(pass, 'pass');
      if (pass) {
        return res.status(200).send({ success: true });
      }
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
