import { Input } from '@/components/ui/input';

export const CreateAcc = ({}) => {
  return (
    <>
      <header className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold text-[ #09090B]">
          Create your account
        </h3>
        <h6 className="text-base font-normal text-[#71717A]">
          Sign up to explore your favorite dishes.
        </h6>
      </header>
      <Input type="email" placeholder="Enter your email address" />
    </>
  );
};
