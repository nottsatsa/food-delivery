import { foodOrderModel } from '../model/foodOrder.js';

export const createFoodOrder = async (req, res) => {
  const { totalPrice, status } = req.body;
  try {
    const foodOrder = await foodOrderModel.create({
      status: status,
      totalPrice: totalPrice,
    });
    return res.status(200).send({ success: true, foodOrder: foodOrder }).end();
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
