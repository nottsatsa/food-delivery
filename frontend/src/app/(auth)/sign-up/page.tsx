'use client';
import { Button } from '@/components/ui/button';
import { IoIosArrowBack } from 'react-icons/io';
import { CreateAcc } from './_components/createAcc';
import { CreatePass } from './_components/createPass';
import { useState } from 'react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const Show = [CreateAcc, CreatePass][currentStep];

  function backBtn() {
    setCurrentStep(currentStep - 1);
  }

  function nextBtn() {
    setCurrentStep(currentStep + 1);
  }
  return (
    <div className="flex flex-col gap-6">
      <Button className="size-9 px-4 py-2" variant="outline" onClick={backBtn}>
        <IoIosArrowBack />
      </Button>
      <Show />
      <Button className="bg-[#d1d1d1]" variant="secondary" onClick={nextBtn}>
        Let's Go
      </Button>

      <footer className="flex justify-center gap-1">
        <h6 className="text-base font-normal text-[#71717A]">
          Already have an account?
        </h6>
        <a
          href="http://localhost:3000/login"
          className="text-base font-normal text-[#2563EB]"
        >
          Log in
        </a>
      </footer>
    </div>
  );
}
