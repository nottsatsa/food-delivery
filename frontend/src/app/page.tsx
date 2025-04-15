import { BadgeStyle } from '@/components/badgeStyle';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { ProductCard } from '@/components/productCard';
import { ProductSection } from '@/components/productSection';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <img src="https://s3-alpha-sig.figma.com/img/8984/6312/a2a7c22f5fe9122b2bd6276cdd549c3e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZT8ix8PnvS5PNCzC9Xqfe8g8T2DgO7M5SL~Xr0wI2LjCQqEDVh0ErkR4plCjukQZu4NWzuG3uAlO3IiW~xj2TXJzkTt1hAsTXfb9fM~kZzBq1ovNXX-oiElqqZiRHq2iIuq3o1xOTwmqXwtHN-rGlsh0xYvc6POiPqbmE2FFeRw0zMovo8AeroEmkEa-HRDjTUURjnZtd-cbGpkL-fnOqf1pNGbT2Hk2iepnd9Qfu~uFj7-0PiEL-bgc7yLhrRHOgNH0UFIwABTkhSqyQrPmB9nrvjtByLDhc725MYKkRofHdYQAIhYPwIwuB4oCQwHbbZ8VAw2hyJl5AXZbdjAJiA__" />
      <div className="flex w-full py-8 px-12 flex-col items-start gap-9">
        <div className="flex px-10 justify-center items-center gap-2.5 ">
          <h2 className="text-3xl font-semibold text-[#fff]">Categories</h2>
        </div>
        <div className="flex items-center gap-2 ">
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 size-10"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <div className="flex items-center gap-2 w-[86vw] overflow-hidden">
            <BadgeStyle badgeName={'Appetizers'} />
            <BadgeStyle badgeName={'Salads'} />
            <BadgeStyle badgeName={'Pizzas'} />
            <BadgeStyle badgeName={'Lunch favorites'} />
            <BadgeStyle badgeName={'Main dishes'} />
            <BadgeStyle badgeName={'Fish & Sea foods'} />
            <BadgeStyle badgeName={'Side dish '} />
            <BadgeStyle badgeName={'Brunch'} />
            <BadgeStyle badgeName={'Desserts'} />
            <BadgeStyle badgeName={'Beverages'} />
          </div>
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 size-10"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
      {/* menu container */}
      <div className="flex flex-col items-start gap-13.5 px-22">
        <ProductSection category={'Appetizers'} />
      </div>
      <Footer />
    </div>
  );
}
