import { Types } from 'mongoose';
import { CategoryModel } from '../model/category.js';
import { FoodModel } from '../model/food.js';

export const createFood = async (req, res) => {
  const { foodName, price, ingredients, image, category } = req.body;
  try {
    const food = await FoodModel.create({
      foodName: foodName,
      price: price,
      ingredients: ingredients,
      image: image,
      category: category,
    });
    return res.status(200).send({ success: true, food: food }).end();
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

export const getFoodsByCategoryId = async (req, res) => {
  const { categoryId } = req.body;
  // const { categoryId } = req.params;
  try {
    const foodByCategoryId = await FoodModel.find({
      category: categoryId,
    }).populate('category');

    return res
      .status(200)
      .send({ success: true, foodByCategoryId: foodByCategoryId })
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

// export const getFoods = async (req, res) => {
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

//////////////////////////////////////////////////////////////////////////
//////aggregate uzdeg ue
// export const getFoodsByCategoryId = async (req, res) => {
//   const { categoryId } = req.body;
//   // const { categoryId } = req.params;

//   const match = categoryId
//     ? {
//         $match: { _id: new Types.ObjectId(categoryId) },
//       }
//     : { $match: {} };
//   try {
//     const food = await CategoryModel.aggregate([
//       {
//         $lookup: {
//           from: 'foods',
//           localField: '_id',
//           foreignField: 'category',
//           as: 'foods',
//         },
//       },
//       {
//         $project: {
//           name: 1,
//           foods: 1,
//         },
//       },
//     ]);

//     return res.status(200).send({ success: true, food: food }).end();
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
