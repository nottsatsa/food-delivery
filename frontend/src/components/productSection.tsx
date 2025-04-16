import { ProductCard } from './productCard';

export const ProductSection = ({ category }: any) => {
  const array = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="w-[100vw] flex flex-col gap-13.5">
      <h2 className="text-3xl font-semibold text-[#fff]">{category}</h2>
      <div className="w-[100vw] grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-9">
        {array.map((value, index) => {
          return <ProductCard key={index} />;
        })}
      </div>
    </div>
  );
};
