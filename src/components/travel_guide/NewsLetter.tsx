import React from "react";
import { newsletterBG } from "../../assets";

const NewsLetter = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={newsletterBG}
        className="w-full h-[200px] md:h-auto object-cover"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center py-4 px-10">
        <p className="font-inter text-center leading-tight  text-[20px] md:text-[25px] xl:text-[30px] font-[600] tracking-[2px] md:tracking-[3px] text-[#f9f9f9]">
          PLACEA NEWSLETTER
        </p>
        <p className="text-center text-[12px] md:text-[16px] xl:text-[18px] mt-[8px] xl:mt-[10px] mb-[15px] xl:mb-[18px] font-[600] leading-tight tracking-[1.5px] md:tracking-[1.7px] text-white">
          Let Us Plan Your Perfect Getaway
        </p>
        <div className="flex md:flex-row items-center justify-center gap-[10px] md:gap-[18px] xl:gap-[26px] w-full">
          <button className="w-full md:w-auto rounded-[15px] border-2 border-white px-[20px] xl:px-[25px] py-[6px] xl:py-[10px] font-inter text-[15px] xl:text-[18px] font-[600] text-white">
            LEARN MORE
          </button>
          <button className="w-full md:w-auto rounded-[15px] bg-[#AB0101] border-2 border-[#AB0101] px-[20px] xl:px-[25px] py-[6px] xl:py-[10px] font-inter text-[15px] xl:text-[18px] font-[600] text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
