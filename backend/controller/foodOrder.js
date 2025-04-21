import { FoodOrderModel } from '../model/foodOrder.js';

export const createFoodOrder = async (req, res) => {
  const { userId, foods, totalPrice } = req.body;
  try {
    const foodOrder = await FoodOrderModel.create({
      totalPrice: totalPrice,
      user: userId,
      foodOrderItems: foods,
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

export const getOrderByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const orderByUserId = await FoodOrderModel.find({
      user: userId,
    }).populate('user');
    // });
    return res
      .status(200)
      .send({ success: true, orderByUserId: orderByUserId })
      .end();
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

// export const getFoodsByCategoryId = async (req, res) => {
//   // const { categoryId } = req.body;
//   const { categoryId } = req.params;
//   try {
//     const foodByCategoryId = await FoodModel.find({
//       category: categoryId,
//     }).populate('category');

//     return res
//       .status(200)
//       .send({ success: true, foodByCategoryId: foodByCategoryId })
//       .end();
//   } catch (error) {
//     console.error(error, 'error');
//     return res
//       .status(400)
//       .send({
//         success: false,
//         message: error,
//       })
//       .end();
//   }
// };
