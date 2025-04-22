import { useEffect, useState } from 'react';
import { ProductCard } from './productCard';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';

export const ProductSection = ({ categoryId, categoryName }: any) => {
  const [foodByCategoryId, setFoodByCategoryId] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryId) return;
    const fetchCategory = async () => {
      try {
        const categoriesRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/foodsByCagtegoryId/${categoryId}`
        );
        setFoodByCategoryId(categoriesRes.data.foodByCategoryId);
      } catch (error) {
        console.error('Error fetching categories data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return (
    <div className="w-[100vw] flex flex-col gap-13.5">
      <h2 className="text-3xl font-semibold text-[#fff]">{categoryName}</h2>
      <div className="w-[100vw] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-9">
        {foodByCategoryId.map((value: any, index: any) => {
          return (
            <Dialog>
              <DialogTrigger>
                <ProductCard
                  key={index}
                  foodName={value.foodName}
                  foodPrice={value.price}
                  ingredients={value.ingredients}
                  imgLink={value.image}
                />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
};
