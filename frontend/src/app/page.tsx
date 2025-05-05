'use client';
import { BadgeStyle } from '@/components/badgeStyle';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/productCard';
import { ProductSection } from '@/components/productSection';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RxValue } from 'react-icons/rx';

export default function Home() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchUsers = async () => {
    try {
      // const response = await axios.get(
      //   `${process.env.NEXT_PUBLIC_BACKEND_URI}/users`
      // );
      // console.log(response, 'response bnuuuu');
      // setData(response.data);
      // setUsers(response.data.users);

      const categoriesRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/categories`
      );
      setCategories(categoriesRes.data.categories);
    } catch (error) {
      console.log('err ene yumshig l bnda', error);
    }

    const token = localStorage.getItem('token');
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URI}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(data, 'data');
  console.log(users, 'response.data.users');
  console.log(categories, 'categories');

  return (
    <div className="bg-[#404040]">
      <Header />
      {/* <img src="https://s3-alpha-sig.figma.com/img/8984/6312/a2a7c22f5fe9122b2bd6276cdd549c3e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZT8ix8PnvS5PNCzC9Xqfe8g8T2DgO7M5SL~Xr0wI2LjCQqEDVh0ErkR4plCjukQZu4NWzuG3uAlO3IiW~xj2TXJzkTt1hAsTXfb9fM~kZzBq1ovNXX-oiElqqZiRHq2iIuq3o1xOTwmqXwtHN-rGlsh0xYvc6POiPqbmE2FFeRw0zMovo8AeroEmkEa-HRDjTUURjnZtd-cbGpkL-fnOqf1pNGbT2Hk2iepnd9Qfu~uFj7-0PiEL-bgc7yLhrRHOgNH0UFIwABTkhSqyQrPmB9nrvjtByLDhc725MYKkRofHdYQAIhYPwIwuB4oCQwHbbZ8VAw2hyJl5AXZbdjAJiA__" /> */}
      {/* <img src="[url(/bg.png)] " /> */}
      <div className="max-w-[1440px]">
        <div className="flex py-8 px-12 flex-col items-start gap-9">
          <div className="flex px-10 justify-center items-center gap-2.5 ">
            <h2 className="text-3xl font-semibold text-[#fff]">Categories</h2>
          </div>
          <div className="flex items-center gap-2 ">
            <Button
              variant="ghost"
              className="flex items-center justify-center gap-2 size-10"
            >
              <ChevronLeft className="size-4 text-[#fff]" />
            </Button>
            <div className="flex items-center gap-2 w-[86vw] overflow-hidden">
              {categories.map((value: any, index: any) => {
                return (
                  <Button
                    variant="ghost"
                    className="w-fit h-fit"
                    // onClick={() => setFilter(`${value.name}`)}
                  >
                    <BadgeStyle key={index} badgeName={`${value.name}`} />
                  </Button>
                );
              })}
              {/* <BadgeStyle badgeName={'Appetizers'} />
            <BadgeStyle badgeName={'Salads'} />
            <BadgeStyle badgeName={'Pizzas'} />
            <BadgeStyle badgeName={'Lunch favorites'} />
            <BadgeStyle badgeName={'Main dishes'} />
            <BadgeStyle badgeName={'Fish & Sea foods'} />
            <BadgeStyle badgeName={'Side dish '} />
            <BadgeStyle badgeName={'Brunch'} />
            <BadgeStyle badgeName={'Desserts'} />
            <BadgeStyle badgeName={'Beverages'} /> */}
            </div>
            <Button
              variant="ghost"
              className="flex items-center justify-center gap-2 size-10"
            >
              <ChevronRight className="size-4 text-[#fff]" />
            </Button>
          </div>
        </div>
        {/* menu container */}

        <div className="flex max-w-[1440px] flex-col items-start gap-13.5 pl-22">
          {categories.map((value: any, index: number) => {
            return (
              <ProductSection
                key={index}
                categoryId={value._id}
                categoryName={value.name}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
