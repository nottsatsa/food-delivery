'use client';
import { ResetPass } from './_components/reset-pass';
import { Verify } from './_components/verify';
import { NewPass } from './_components/newpass';
import { useState } from 'react';

export default function Home() {
  //   return <ResetPass />;
  //   return <Verify />;
  const [currentStep, setCurrentStep] = useState(0);

  function backBtn() {
    setCurrentStep(currentStep - 1);
  }

  function nextBtn() {
    setCurrentStep(currentStep + 1);
  }

  const Show = [ResetPass, Verify, NewPass][currentStep];

  return (
    <div>
      <Show />
    </div>
  );
}
