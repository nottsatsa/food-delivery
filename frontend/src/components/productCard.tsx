export const ProductCard = ({}) => {
  return (
    <div className="flex p-4 flex-col items-start gap-5 rounded-[20px] bg-[#fff]">
      <div className="w-[365px] h-[210px] rounded-xl bg-cover bg-center bg-[url(https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hgyh2PxfyoXHJOusus7v2jri6Qeninz8zRF9viWJVSUevQYJ0VYhfmfCi9fz2DPcfmzy4Xw0QI4s-~GKJL6nno3SqZY73blZanbyQW5~MgavIES4~Qv5qtlzc9eG4QGArINo-YbsJJabBr~U12RfuhGLjmlZHH0nUoqrSYG2APMSYUrw-WXyY4BHwJ-WNkB9UA~RGl0rmdfMnBPglgHa0x2kvPWz8s-bGAYE1fznjkt97-~J7ff~K3nGQeO-JQzCJPUv1aGQNLmLmkTNlkO1VMp3VfZoE~p8QNWHUsf2VgMV6Xd9QcXkogi687kAJwZsjEVkPCvwvf8PvjHJml2I4Q__)]"></div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex justify-center items-center gap-2.5">
          <h3 className="text-2xl font-semibold text-[#EF4444]">
            Finger food{' '}
          </h3>
          <h4 className="text-lg font-semibold text-[#09090B]">$12.99</h4>
        </div>
        <h3 className="text-sm font-normal text-[#09090B] w-[365px]">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </h3>
      </div>
    </div>
  );
};
