import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { LinkStyle } from './linkStyle';
import { LinkFooterStyle } from './linkFooterStyle';

export const Footer = ({}) => {
  return (
    <div className="flex flex-col bg-[#18181B] pt-15">
      <header className="flex w-full py-7 px-24.5 gap-8.5 items-center bg-[#EF4444]">
        <h2 className="text-3xl font-semibold text-[#FAFAFA]">
          Fresh fast delivered{' '}
        </h2>
        <h2 className="text-3xl font-semibold text-[#FAFAFA]">
          Fresh fast delivered{' '}
        </h2>
      </header>
      {/* content container */}
      <div className="w-full py-19 px-22 flex flex-col gap-26">
        <div className="flex flex-row items-start gap-55">
          <div className="flex flex-col items-center gap-3">
            <div className="w-11.5 h-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="38"
                viewBox="0 0 46 38"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.4661 0.596777C21.2291 0.833763 21.2203 0.885153 21.2426 1.9211C21.2552 2.5138 21.225 3.03926 21.1755 3.0886C21.1259 3.13793 20.6008 3.24894 20.0086 3.33508C17.4119 3.71312 15.2288 4.47478 12.9118 5.81124C11.2389 6.77621 10.332 7.45516 8.96201 8.76841C7.54568 10.1261 6.61075 11.3101 5.40645 13.2712C5.06061 13.8346 4.39556 15.1528 4.39556 15.2753C4.39556 15.3004 4.28711 15.5582 4.15457 15.848C3.40896 17.4781 2.74567 20.4878 2.72169 22.3496C2.70515 23.6372 2.75654 23.5819 1.46795 23.6997C0.491915 23.7889 0.337253 23.8283 0.174956 24.0287C-0.0801388 24.3437 -0.0554713 24.6869 0.243672 24.986C0.494558 25.2369 0.506402 25.2385 1.58962 25.175C2.19075 25.1398 4.00401 25.0461 5.61916 24.9668C7.2343 24.8875 9.32664 24.779 10.2688 24.7255C12.9744 24.5722 13.6591 24.5369 15.0163 24.4812C16.351 24.4264 18.8048 24.2963 21.5258 24.1361C22.4142 24.0838 23.7827 24.0179 24.567 23.9896C25.3513 23.9613 26.3424 23.9185 26.7695 23.8946C27.1966 23.8708 28.6031 23.8046 29.8952 23.7476C31.1873 23.6907 32.9493 23.6025 33.8107 23.5515C34.6721 23.5005 35.8835 23.4335 36.5026 23.4026C37.1217 23.3716 37.8926 23.3274 38.2156 23.3043C38.5387 23.2812 39.3536 23.2367 40.0266 23.2054C44.4149 23.0016 45.5977 22.9022 45.7989 22.7201C46.0619 22.482 46.0683 21.8817 45.8102 21.6481C45.6521 21.505 45.4529 21.4824 44.5388 21.5035C43.9425 21.5173 43.4225 21.4963 43.3831 21.457C43.3438 21.4175 43.2376 20.8922 43.1471 20.2894C42.9636 19.0657 42.9276 18.8926 42.7262 18.2635C42.6486 18.0212 42.5337 17.6248 42.471 17.3825C42.4082 17.1402 42.317 16.8656 42.2685 16.7721C42.2198 16.6786 42.1801 16.5522 42.1801 16.4914C42.1801 16.262 41.2488 14.1865 40.7617 13.3303C40.1169 12.1969 39.5495 11.3243 39.2569 11.0164C39.1309 10.8837 38.9115 10.6209 38.7694 10.4325C38.1678 9.63452 36.9438 8.41152 35.9437 7.60894C35.1665 6.9852 33.0212 5.57268 32.3913 5.27002C29.6127 3.93483 27.0152 3.25001 24.2341 3.11963C23.3564 3.07842 22.9368 3.01959 22.8415 2.92434C22.7592 2.84212 22.7019 2.56637 22.6969 2.22973C22.6781 0.962387 22.6502 0.760641 22.4651 0.556154C22.2086 0.27277 21.7723 0.290488 21.4661 0.596777ZM13.6928 7.61824C13.6916 7.68558 13.5044 8.03318 13.2768 8.39086C12.6521 9.37218 11.4437 11.6414 11.4436 11.8337C11.4435 11.8775 11.3333 12.1541 11.1987 12.4484C11.0641 12.7426 10.954 13.0393 10.954 13.1078C10.954 13.1761 10.9131 13.274 10.8631 13.3251C10.7311 13.46 10.1131 15.9035 9.93589 16.9909C9.78377 17.9238 9.72827 18.4794 9.63283 20.0255C9.54806 21.3972 9.29718 21.5872 7.53589 21.6141C6.16967 21.6349 5.92045 21.5301 5.67329 20.8306C5.48975 20.3112 5.61651 19.6267 6.25728 17.6762C6.78284 16.0766 6.8957 15.7947 7.45219 14.6906C8.33719 12.9348 9.10825 11.7598 10.2787 10.3836C11.8626 8.52105 13.7028 7.03052 13.6928 7.61824ZM27.2523 27.2415C25.6318 27.2807 21.3166 27.478 19.1276 27.6131C17.3433 27.7232 16.5484 27.7676 13.8906 27.9056C12.3563 27.9852 10.5723 28.0932 9.9262 28.1457C9.28014 28.1982 7.49615 28.2897 5.96176 28.3491C4.42738 28.4086 3.11118 28.477 3.03699 28.5012C2.89818 28.5465 2.90826 28.7062 3.11402 29.7163C3.26604 30.4631 3.6989 31.8914 3.90799 32.3363C4.01733 32.5688 4.17747 32.9444 4.26381 33.171C4.70479 34.3275 5.64842 35.9636 6.49838 37.0454C6.75749 37.3753 6.97676 37.6452 6.98566 37.6452C6.99457 37.6452 7.21932 37.5405 7.48518 37.4127C8.8421 36.7601 9.48022 36.4756 9.90966 36.3319C11.2996 35.8672 13.6228 35.5663 15.2076 35.6461C16.6816 35.7202 24.4092 35.718 25.4903 35.643C26.6211 35.5647 27.2861 35.4309 27.9375 35.1508C28.1528 35.0582 28.8136 34.7845 29.4058 34.5427C29.998 34.301 30.5266 34.0682 30.5804 34.0254C30.6343 33.9826 31.1938 33.7241 31.8238 33.4509C32.4537 33.1777 33.0484 32.9107 33.1453 32.8575C33.3558 32.7418 34.1206 32.3949 35.9642 31.5788C36.718 31.2451 37.5549 30.8682 37.8241 30.7413C38.0933 30.6142 38.5778 30.393 38.9009 30.2496C39.5464 29.963 40.3375 29.597 41.5624 29.0183C42.0034 28.81 42.3916 28.6395 42.4252 28.6395C42.5646 28.6395 43.5374 28.1526 43.5998 28.0516C43.6371 27.9913 43.5861 27.8506 43.4867 27.7389C43.0455 27.2435 42.1856 27.1433 41.0477 27.4549C40.0669 27.7235 38.7366 28.1347 38.5093 28.2397C38.4016 28.2893 37.9611 28.4431 37.5304 28.5812C36.3337 28.9651 33.7049 29.8845 33.3465 30.0445C33.1711 30.1228 32.8074 30.2612 32.5382 30.3522C32.269 30.443 31.6082 30.6707 31.0699 30.8582C29.9959 31.2321 26.6929 31.9388 25.5799 32.033C24.7195 32.1057 24.4144 32.0368 24.2092 31.7237C23.8544 31.1822 24.1202 30.4338 24.7541 30.1893C25.0942 30.058 26.4941 29.8182 26.9324 29.816C27.2964 29.8142 29.5315 29.4573 30.92 29.1791C31.9009 28.9827 32.6325 28.6052 32.8271 28.1951C33.0174 27.7942 33.0165 27.7115 32.8183 27.4091L32.6581 27.1645L30.3956 27.1923C29.1514 27.2076 27.7368 27.2298 27.2523 27.2415Z"
                  fill="#EF4444"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex">
                <h4 className="text-xl font-semibold text-[#FAFAFA]">Nom</h4>
                <h4 className="text-xl font-semibold text-[#EF4444]">Nom</h4>
              </div>
              <h6 className="text-xs font-normal text-[#F4F4F5]">
                Swift delivery
              </h6>
            </div>
          </div>
          {/* links container */}
          <div className="flex items-start gap-28">
            {/* nom nom links */}
            <div className="flex flex-col items-start gap-4">
              <p className="text-base font-normal text-[#71717A]">NOMNOM </p>
              <LinkStyle linkName={'Home'} />
              <LinkStyle linkName={'Contact us'} />
              <LinkStyle linkName={'Delivery zone'} />
            </div>
            {/* frame */}
            <div className="flex items-start gap-14">
              <div className="flex flex-col items-start gap-4">
                <p className="text-base font-normal text-[#71717A]">Menu</p>
                <LinkStyle linkName={'Appetizers'} />
                <LinkStyle linkName={'Salads'} />
                <LinkStyle linkName={'Pizzas'} />
                <LinkStyle linkName={'Main dishes'} />
                <LinkStyle linkName={'Desserts'} />
              </div>
              <div className="flex flex-col items-start justify-end gap-4">
                <LinkStyle linkName={'Side dish '} />
                <LinkStyle linkName={'Brunch'} />
                <LinkStyle linkName={'Desserts'} />
                <LinkStyle linkName={'Beverages'} />
                <LinkStyle linkName={'Fish & Sea foods'} />
              </div>
            </div>
            {/* follow us */}
            <div className="flex flex-col justify-end items-start gap-4">
              <p className="text-base font-normal text-[#71717A]">FOLLOW US</p>
              <div className="flex p-1.5 justify-center items-start gap-4">
                <div className="flex justify-center items-center size-7">
                  <FaFacebook className="size-6 text-[#fafafa]" />
                </div>
                <div className="flex justify-center items-center size-7">
                  <FaInstagram className="size-7 text-[#fafafa]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex p-8 items-center gap-12 border-t-2 border-solid border-[#71717A]">
          <div className="flex items-end gap-1">
            <LinkFooterStyle tekst={'Copy right 2024'} />
            <LinkFooterStyle tekst={'©'} />
            <LinkFooterStyle tekst={'Nomnom LLC'} />
          </div>
          <LinkFooterStyle tekst={'Privacy policy  '} />
          <LinkFooterStyle tekst={'Terms and conditoin'} />
          <LinkFooterStyle tekst={'Cookie policy'} />
        </footer>
      </div>
    </div>
  );
};
