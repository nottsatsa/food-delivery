import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoIosArrowBack } from 'react-icons/io';

export const ResetPass = ({}) => {
  return (
    <div className="flex flex-col gap-6">
      <Button className="size-9 px-4 py-2" variant="outline">
        <IoIosArrowBack />
      </Button>
      <header className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold text-[ #09090B]">
          Reset your password
        </h3>
        <h6 className="text-base font-normal text-[#71717A]">
          Enter your email to receive a password reset link.
        </h6>
      </header>
      <Input type="email" placeholder="Enter your email address" />
      <Button className="bg-[#d1d1d1]" variant="secondary">
        Send link
      </Button>

      <footer className="flex justify-center gap-1">
        <h6 className="text-base font-normal text-[#71717A]">
          Don’t have an account?
        </h6>
        <a
          href="http://localhost:3000/sign-up"
          className="text-base font-normal text-[#2563EB]"
        >
          Sign up
        </a>
      </footer>
    </div>
  );
};
