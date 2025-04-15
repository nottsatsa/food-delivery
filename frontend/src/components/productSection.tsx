import { ProductCard } from './productCard';

export const ProductSection = ({ category }: any) => {
  const array = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col gap-13.5">
      <h2 className="text-3xl font-semibold text-[#fff]">{category}</h2>
      <div className="w-full flex flex-row items-start gap-9">
        {array.map((value, index) => {
          return <ProductCard key={index} />;
        })}
      </div>
    </div>
  );
};
