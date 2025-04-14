import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoIosArrowBack } from 'react-icons/io';

export const Verify = ({}) => {
  return (
    <div className="flex flex-col gap-6">
      <Button className="size-9 px-4 py-2" variant="outline">
        <IoIosArrowBack />
      </Button>
      <header className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold text-[ #09090B]">
          Please verify Your Email
        </h3>
        <h6 className="text-base font-normal text-[#71717A]">
          We just sent an email to Test@gmail.com. Click the link in the email
          to verify your account.
        </h6>
      </header>

      <Button className="bg-[#d1d1d1]" variant="secondary">
        Resend email
      </Button>
    </div>
  );
};
