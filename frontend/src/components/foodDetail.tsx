import { useState } from 'react';
import { Button } from './ui/button';
import axios from 'axios';

interface foodDetailTypes {
  imageLink: String;
  foodName: String;
  foodPrice: String;
  ingredients: String;
}

export const FoodDetailOne = ({
  imageLink,
  foodName,
  foodPrice,
  ingredients,
}: foodDetailTypes) => {
  const postOrder = async () => {
    const data = {
      userId: '6801c3b8fc02dc6597b25e90',
      foods: [
        {
          quantity: orderQuantity,
          food: '6805a7ba368006c6eb274043',
        },
      ],
      totalPrice: 0,
    };

    try {
      const response = await axios.post('http://localhost:8000/order', data);
      console.log('Амжилттай:', response.data);
    } catch (error) {
      console.error('Алдаа:', error);
    }
    console.log('duudchla');
  };

  let [orderQuantity, setOrderQuantity] = useState(0);

  const increase = () => {
    setOrderQuantity(orderQuantity + 1);
  };

  const decrease = () => {
    if (orderQuantity >= 1) {
      setOrderQuantity(orderQuantity - 1);
    }
  };

  return (
    <div className="flex w-[826px] h-[412px] p-6 items-start gap-6 rounded-[20px] bg-[#FFF]">
      <img className="w-[377px] h-[364px] rounded-xl" src={`${imageLink}`} />
      {/* <div className="flex flex-col items-end"></div> */}
      <div className="flex h-full flex-col items-start justify-between gap-2">
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-2xl font-semibold text-[#EF4444]">{foodName}</h3>
          <h3 className="text-sm font-normal text-[#09090B] w-[365px] text-left">
            {ingredients}
          </h3>
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <h4 className="text-base font-normal text-[#09090B]">
                Total price
              </h4>
              <h4 className="text-lg font-semibold text-[#09090B]">{`$${foodPrice}`}</h4>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Button
                onClick={decrease}
                variant="outline"
                className="w-11 h-11 flex py-2 px-4 items-center gap-2 rounded-full"
              >
                -
              </Button>
              <h1 className="text-lg font-semibold text-[#09090B]">{`${orderQuantity}`}</h1>
              <Button
                onClick={increase}
                variant="outline"
                className="w-11 h-11 flex py-2 px-4 items-center gap-2 rounded-full"
              >
                +
              </Button>
            </div>
          </div>
          <Button
            onClick={postOrder}
            className="flex h-11 y-2 px-8 justify-center items-center rounded-full"
          >
            <h6 className="text-[#FAFAFA] text-sm font-medium">Add to cart</h6>
          </Button>
        </div>
      </div>
    </div>
  );
};
