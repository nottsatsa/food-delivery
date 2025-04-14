import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoIosArrowBack } from 'react-icons/io';

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Button className="size-9 px-4 py-2" variant="outline">
        <IoIosArrowBack />
      </Button>
      <header className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold text-[ #09090B]">Log in</h3>
        <h6 className="text-base font-normal text-[#71717A]">
          Log in to enjoy your favorite dishes.
        </h6>
      </header>
      <div className="flex flex-col gap-4">
        <Input type="email" placeholder="Enter your email address" />
        <Input type="text" placeholder="Password" />
        <a
          href="http://localhost:3000/forgot-pass"
          className="text-sm font-normal underline text-[#18181B]"
        >
          Forgot password ?
        </a>
      </div>

      <Button className="bg-[#d1d1d1]" variant="secondary">
        Let's Go
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
}
