import React from "react";
import { customizered, downloadred } from "../../../assets";

const StickyTripCustomization = () => {
  return (
    <div className="fixed z-[1082804165] rounded-l-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] bg-[#FFF2D1] lg:w-[65px] xl:w-[72.36px] 2xl:w-[80px] text-black text-[12px] w-[70px] py-3 px-2 lg:text-[10px] 2xl:text-[13px] font-[600] top-1/2 transform translate-y-1/3 md:-translate-y-1/2 right-0 lg:px-[9px] xl:px-[13px] lg:py-[14px] xl:py-[19px] 2xl:px-[15px] 2xl:py-[15px]">
      <div className="flex flex-col items-center gap-[8px]">
        <img
          className="w-5 md:w-full xl:w-[30px] lg:w-[25px] lg:h-[15px] xl:h-[20px] 2xl:w-[35px] 2xl:h-[25px]"
          src={customizered}
          alt="customize"
        />
        <p className="text-center text-[10px] md:text-md">
          Customize your trip
        </p>
      </div>
      <div className="my-[12px] h-[1px] md:h-[2px] bg-black rounded-full" />
      <div className="flex flex-col items-center gap-[8px]">
        <img
          className="w-4 md:w-full xl:w-[30px] lg:w-[25px] lg:h-[15px] xl:h-[20px] 2xl:w-[35px] 2xl:h-[25px]"
          src={downloadred}
          alt="customize"
        />
        <p className="text-center text-[10px] md:text-md">
          Download trip details
        </p>
      </div>
    </div>
  );
};

export default StickyTripCustomization;
