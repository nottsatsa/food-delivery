import { Badge } from '@/components/ui/badge';
export const BadgeStyle = ({ badgeName }: any) => {
  return (
    <Badge className="flex py-1 px-5 items-start gap-2.5 bg-[#FFFFFF] text-[#18181B] text-lg font-normal rounded-full">
      {badgeName}
    </Badge>
  );
};
