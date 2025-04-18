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
  // const { categoryId } = req.body;
  const { categoryId } = req.params;
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
