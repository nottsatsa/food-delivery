import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FoodDetailOne } from './foodDetail';
import { Button } from './ui/button';
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

      <div
        className="flex r w-[365px] h-[210px] bg-cover bg-center overflow-hidden relative"
        style={{
          backgroundImage: `url(${imgLink})`,
        }}
      >
        {/* <img
            className=" rounded-xl"
            src={`${imgLink}`}
          ></img> */}

        <Dialog>
          <DialogTrigger>
            <Button
              variant="outline"
              className="w-11 h-11 flex py-2 px-4 items-center justify-center gap-2 rounded-full text-[#EF4444] absolute bottom-5 right-5"
            >
              +
            </Button>{' '}
          </DialogTrigger>
          <DialogContent>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <FoodDetailOne
                imageLink={imgLink}
                foodName={foodName}
                foodPrice={foodPrice}
                ingredients={ingredients}
              ></FoodDetailOne>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col items-start gap-2">
        <div className="flex w-full flex-row justify-between">
          <h3 className="text-2xl font-semibold text-[#EF4444]">{foodName}</h3>
          <h4 className="text-lg font-semibold text-[#09090B]">{`$${foodPrice}`}</h4>
        </div>
        <h3 className="text-sm font-normal text-[#09090B] w-[365px] text-left">
          {ingredients}
        </h3>
      </div>
    </div>
  );
};
