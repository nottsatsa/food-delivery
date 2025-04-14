import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export const CreatePass = ({}) => {
  return (
    <>
      <header className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold text-[ #09090B]">
          Create a strong password
        </h3>
        <h6 className="text-base font-normal text-[#71717A]">
          Create a strong password with letters, numbers.
        </h6>
      </header>
      <div className="flex flex-col gap-4">
        <Input type="email" placeholder="Enter your email address" />
        <Input type="text" placeholder="Password" />
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show password
          </label>
        </div>
      </div>
    </>
  );
};
