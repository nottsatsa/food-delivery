import { CategoryModel } from '../model/category.js';

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await CategoryModel.create({
      name: name,
      // totalPrice: totalPrice,
    });
    return res.status(200).send({ success: true, category: category }).end();
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
