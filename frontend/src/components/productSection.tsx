import { useEffect, useState } from 'react';
import { ProductCard } from './productCard';
import axios from 'axios';

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
      <div className="w-[100vw] flex flex-wrap gap-9">
        {/* <div className="w-[100vw] grid grid-flow-row grid-cols-5 gap-9"> */}
        {/* xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 */}
        {foodByCategoryId.map((value: any, index: any) => {
          return (
            <ProductCard
              key={index}
              foodName={value.foodName}
              foodPrice={value.price}
              ingredients={value.ingredients}
              imgLink={value.image}
            />
          );
        })}
      </div>
    </div>
  );
};
