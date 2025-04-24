import { Checkbox } from '@/components/ui/checkbox';
import { OrderText } from './orderText';
import { ChevronsUpDown } from 'lucide-react';

export const OrderInfo = ({
  nomer,
  customer,
  foodNo,
  orderDate,
  total,
  deliveryAddress,
  state,
}: any) => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-[#fff] border-[1px] border-[#E4E4E7]">
      orderinfooooooooooooo
      {/* Card header */}
      <div className="flex p-4 justify-between items-center "> </div>
      {/* table row */}
      <div className="flex flex-start ">
        <div className="flex p-4 items-center gap-2.5 w-12">
          <Checkbox />
        </div>
        <div className="flex w-14 p-4 items-center gap-2.5">
          <h3 className="text-[#09090B] text-sm font-normal">{nomer}</h3>
        </div>
        <div className="flex py-4 items-center gap-2.5 w-53.5">
          <OrderText iimText={customer} />
        </div>
        <div className="flex py-4 items-center gap-2.5 w-40">
          <OrderText iimText={foodNo} />
        </div>
        <div className="flex py-4 justify-between items-center gap-2.5 w-40">
          <OrderText iimText={orderDate} />
          <ChevronsUpDown strokeWidth={1.25} size={16} stroke="#09090B" />
        </div>
        <div className="flex py-4 items-center gap-2.5 w-40">
          <OrderText iimText={total} />
        </div>
        <div className="flex py-4 items-center gap-2.5 w-53.5">
          <OrderText iimText={deliveryAddress} />
        </div>
        <div className="flex py-4 justify-between items-center gap-2.5 w-40">
          <OrderText iimText={state} />
          <ChevronsUpDown strokeWidth={1.25} size={16} stroke="#09090B" />
        </div>
      </div>
    </div>
  );
};
