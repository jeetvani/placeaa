import {
  info,
  manali,
  pkgImg1,
  pkgImg2,
  pkgImg3,
  popularadds,
} from "../assets";
import SponsoredAd from "../components/home/ads/SponsoredAd";
import About from "../components/home/about/About";
import Footer from "../components/home/footer/Footer";
import SelectionBox from "../components/holiday_package/selection_box/SelectionBox";
import PackageCard from "../components/holiday_package/package_card/PackageCard";
import AssistanceBanner from "../components/holiday_package/assistance_banner/AssistanceBanner";
import Filter from "../components/holiday_package/filter/Filter";
import { useMediaQuery } from "react-responsive";
import SelectionBoxMobile from "../components/holiday_package/selection-box-mobile/SelectionBoxMobile";

const HolidayPackage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const packageData = {
    name: "Manali",
    info: "Info",
    packagesFound: 8,
    packages: [
      {
        id: 1,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
      {
        id: 2,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
      {
        id: 3,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
      {
        id: 4,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
      {
        id: 5,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
      {
        id: 6,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
      {
        id: 7,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
      {
        id: 8,
        image: manali,
        place: "Delightful Shimla & Manali Vacay",
        nights: 6,
        days: 7,
        distribution: [
          { place: "Shimla", for: 2 },
          { place: "Kullu", for: 1 },
          { place: "Manali", for: 3 },
        ],
        packageImages: [pkgImg1, pkgImg2, pkgImg3, pkgImg3],
        services: [
          "Round Trip Flights",
          "Airport Pickup & Drop",
          "3 Star Hotel",
          "Selected Meals",
          "2 Activity",
          "Taxi Service",
        ],
        prices: {
          original: 12180,
          discounted: 10580,
          discountedPercentage: 15,
          checkpoints: [
            "Exclusive Offer At Checkout",
            "Price Change According to date",
          ],
        },
        offeredBy: "Adventure Travels",
      },
    ],
  };

  return (
    <div>
      {isMobile ? (
        <SelectionBoxMobile />
      ) : (
        <SelectionBox stickyClasses={"sticky top-0"} />
      )}

      {/* Tag */}
      <div className="mx-[50px] xl:mx-[75px] mt-[30px] xl:mt-[36px]">
        <div className="flex font-inter font-[600] text-[25px] xl:text-[30px] 2xl:text-[32px] items-center xl:tracking-[1.3px] gap-[8px] xl:gap-[10px]">
          <p className="leading-none">{packageData?.name} Packages</p>
          <div
            title={packageData?.info}
            className="h-[22px] cursor-pointer translate-y-[2.2px]"
          >
            <img src={info} alt="info" className="h-full w-full" />
          </div>
        </div>
        <p className="font-inter leading-none lg:mt-[6px] font-[500] text-[15px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] 2xl:mt-[8px] mt-2">
          “{packageData?.packagesFound}” Packages Found
        </p>
      </div>

      <Filter />

      {/* Data */}
      <div className="flex flex-wrap items-center w-full gap-[25px] 2xl:gap-[35px] 2xl:px-[80px] lg:mt-[22px] 2xl:mt-[30px] justify-center mt-[20px] px-5">
        {packageData?.packages?.map((p, index) => (
          <>
            <PackageCard p={p} />
            {(index + 1) % 3 === 0 &&
              index < packageData?.packages?.length - 1 && (
                <div className={`my-[20px] md:my-[50px]`}>
                  <SponsoredAd ad={popularadds} />
                </div>
              )}
          </>
        ))}
      </div>

      <AssistanceBanner />
      <About />
      <Footer />
    </div>
  );
};

export default HolidayPackage;
