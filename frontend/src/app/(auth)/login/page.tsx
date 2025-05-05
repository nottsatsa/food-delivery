'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Eye } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Home() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleOnClick = async () => {
    console.log('duudadgjiin');

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/login`,
      {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }
    );
    localStorage.setItem('token', response.data.token);
    console.log(response, 'response');
  };

  // axios.get('http://localhost:8000/food');
  let [passVisible, setPassVisible] = useState(false);
  const passVisibleOnClick = () => {
    setPassVisible((prev) => !prev);
    console.log(passVisible, 'toggle success');
  };

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
        <Input
          ref={emailRef}
          type="email"
          placeholder="Enter your email address"
        />
        <div className="flex">
          <Input
            ref={passwordRef}
            type={passVisible ? 'text' : 'password'}
            placeholder="Password"
          />
          <Button variant="outline" size="icon" onClick={passVisibleOnClick}>
            <Eye size={16} strokeWidth={1} />
          </Button>
        </div>

        <a
          href="http://localhost:3000/forgot-pass"
          className="text-sm font-normal underline text-[#18181B]"
        >
          Forgot password ?
        </a>
      </div>

      <Button
        className="bg-[#d1d1d1]"
        variant="secondary"
        onClick={handleOnClick}
      >
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
