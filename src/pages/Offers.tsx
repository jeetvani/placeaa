import React, { useState } from "react";
import { offer, offerBanner } from "../assets";
import BankOffers from "../components/home/bank_offers/BankOffers";
import MiniFooter from "../components/mini_footer/MiniFooter";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import { FaFilter } from "react-icons/fa";
import About from "../components/home/about/About";
import Footer from "../components/home/footer/Footer";
import Slider from "react-slick";

const Offers = () => {
  const [offers, setOffers] = useState<
    Array<{
      image: string;
      title: string;
      value: string;
      process: string;
      validity: { from: string; to: string };
      id: number | string;
    }>
  >([
    {
      id: "x1",
      image: offer,
      value: "59,900",
      process: "Book Bus using UPI and get 10% instant descount",
      title: "Dubai",
      validity: { from: "11/Nov/2023", to: "11/Dec/2023" },
    },
    {
      id: "x1",
      image: offer,
      process: "Book Bus using UPI and get 10% instant descount",
      value: "59,900",
      title: "Dubai",
      validity: { from: "11/Nov/2023", to: "11/Dec/2023" },
    },
    {
      id: "x1",
      image: offer,
      value: "59,900",
      title: "Dubai",
      process: "Book Bus using UPI and get 10% instant descount",
      validity: { from: "11/Nov/2023", to: "11/Dec/2023" },
    },
    {
      id: "x1",
      image: offer,
      value: "59,900",
      process: "Book Bus using UPI and get 10% instant descount",
      title: "Dubai",
      validity: { from: "11/Nov/2023", to: "11/Dec/2023" },
    },
    {
      id: "x1",
      image: offer,
      value: "59,900",
      process: "Book Bus using UPI and get 10% instant descount",
      title: "Dubai",
      validity: { from: "11/Nov/2023", to: "11/Dec/2023" },
    },
    {
      id: "x1",
      image: offer,
      value: "59,900",
      title: "Dubai",
      process: "Book Bus using UPI and get 10% instant descount",
      validity: { from: "11/Nov/2023", to: "11/Dec/2023" },
    },
  ]);

  const [filters, setFilters] = useState<
    Array<{ type: string; available: number; selected: boolean }>
  >([
    { type: "Trending", available: 52, selected: false },
    { type: "Bank offer", available: 11, selected: false },
    { type: "Flight", available: 10, selected: false },
    { type: "Bus", available: 14, selected: false },
    { type: "Hotel", available: 6, selected: false },
  ]);
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const bannerImages = [offerBanner, offerBanner, offerBanner]; // Add more images as needed

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const FilterContent = () => (
    <div
      className="rounded-[15px] sticky md:top-[100px] xl:top-28 h-fit xl:pt-[24px] xl:pl-[24px] xl:pr-[18px] xl:pb-[56px] md:pt-[18px] pr-[15px] pb-[45px] pl-[18px]"
      style={{
        border: "1px solid rgba(185, 185, 185, 0.60)",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex items-center justify-between gap-[65px] xl:gap-[75px]">
        <p className="text-[18px] xl:text-[22px] font-[600]">Filters</p>
        <p className="text-[12px] xl:text-[13px] font-[600] text-[#082485]">
          Clear all
        </p>
      </div>
      <div className="mt-[28px] xl:mt-[32px]">
        {filters?.map((f, index: number) => (
          <div
            key={index}
            className="flex text-[15px] xl:text-[18px] font-[500] items-center gap-[20px]"
          >
            <input type="checkbox" name={f?.type} id={f?.type} />
            <label className="cursor-pointer" htmlFor={f?.type}>
              {f?.type} ({f?.available})
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {!isAboveMediumScreen && <MobileNavbar />}

      <div className="md:mx-[30px] xl:mx-[40px] mb-[50px] xl:mb-[70px] mt-10 md:mt-0 overflow-hidden">
        <Slider {...sliderSettings}>
          {bannerImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className="w-full scale-90"
                style={{ objectFit: "cover" }}
                alt={`Offer Banner ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        <BankOffers />
        <div className="flex justify-between px-5 md:px-0">
          <p className="mt-[30px] xl:mt-[50px] text-center font-inter text-[18px] md:text-[28px] xl:text-[32px] font-[600] mb-[28px] xl:mb-[32px] ">
            Offers and Deals
          </p>
          {!isAboveMediumScreen && (
            <button onClick={() => setShowMobileFilters(!showMobileFilters)}>
              <FaFilter size={20} fill="black" />
            </button>
          )}
        </div>
        <div className="flex relative">
          {isAboveMediumScreen ? (
            <FilterContent />
          ) : (
            showMobileFilters && (
              <div className="absolute right-0 bg-white shadow-xl z-10">
                <FilterContent />
              </div>
            )
          )}
          <div className="flex-1  md:justify-center flex gap-5 md:gap-x-[15px] md:gap-y-[22px] md:flex-wrap overflow-x-auto px-5 md:px-0">
            {offers?.map((o) => (
              <div
                className="border md:w-[300px] font-inter border-[#b9b9b9] 2xl:w-[350px] rounded-xl"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
                key={o?.id}
              >
                <div>
                  <img src={o?.image} className="rounded-xl" alt="" />
                </div>
                <div className="mt-[7px] pb-[12px] px-[12px]">
                  <div>
                    <p className="text-[14px] xl:text-[16px] font-[500] leading-none">
                      Pay with UPI
                    </p>
                    <p className="mt-[7px] text-[10px] xl:text-[11px] font-[500] text-[#5e5e5e] leading-none">
                      {o?.process}
                    </p>
                  </div>
                  <div className="mt-[18px] xl:mt-[26px] flex gap-10 items-center justify-between">
                    <div>
                      <p className="text-[12px] font-[500] text-[#5e5e5e]">
                        Validity
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] font-[500]">
                        <p className="leading-none">{o?.validity?.from}</p>
                        <p className="leading-none">to</p>
                        <p className="leading-none">{o?.validity?.to}</p>
                      </div>
                    </div>
                    <button className="py-[3px] rounded-[7px] border-[0.5px] border-black px-[12px] xl:px-[14px] text-[11px] xl:text-[12px] text-[#0f0e0e] font-[600]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isAboveMediumScreen ? (
        <MiniFooter />
      ) : (
        <>
          <About />
          <Footer />
        </>
      )}
    </>
  );
};

export default Offers;
