import { Checkbox } from '@/components/ui/checkbox';
import { OrderText } from './orderText';

export const OrderInfo = ({}) => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-[#fff] border-[1px] border-[#E4E4E7]">
      orderinfooooooooooooo
      {/* Card header */}
      <div className="flex p-4 justify-between items-center "> </div>
      {/* table row */}
      <div className="flex flex-start ">
        <div className="flex p-4 items-center gap-2.5 ">
          <Checkbox />
        </div>
        <div className="flex w-14 p-4 items-center gap-2.5">
          <h3 className="text-[#09090B] text-sm font-normal">#</h3>
        </div>
        <div className="flex py-4 items-center gap-2.5">
          <OrderText iimText={'Customer'} />
        </div>
      </div>
    </div>
  );
};
