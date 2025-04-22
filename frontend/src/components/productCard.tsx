interface productCardTypes {
  foodName: string;
  foodPrice: string;
  ingredients: string;
  imgLink: string;
}

export const ProductCard = ({
  foodName,
  foodPrice,
  ingredients,
  imgLink,
}: productCardTypes) => {
  return (
    <div className="flex w-fit p-4 flex-col items-start gap-5 rounded-[20px] bg-[#fff]">
      {/* <div
        className={`w-[365px] h-[210px] rounded-xl bg-cover bg-center bg-[url(${imgLink})]`}
      ></div> */}
      <img className="w-[365px] h-[210px] rounded-xl" src={`${imgLink}`} />
      <div className="flex flex-col items-start gap-2">
        <div className="flex justify-center items-center gap-2.5">
          <h3 className="text-2xl font-semibold text-[#EF4444]">{foodName}</h3>
          <h4 className="text-lg font-semibold text-[#09090B]">{foodPrice}</h4>
        </div>
        <h3 className="text-sm font-normal text-[#09090B] w-[365px]">
          {ingredients}
        </h3>
      </div>
    </div>
  );
};
