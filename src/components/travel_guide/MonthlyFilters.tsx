import React from "react";

const MonthlyFilters = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-black xl:pb-[50px] xl:pt-[20px] pt-[18px] pb-[40px]">
      <p className="text-[22px] xl:text-[24px] text-white font-[400] tracking-[1.2px] text-center mb-[20px] xl:mb-[30px]">
        Best <span className="text-[#AB0101] font-[600]">places</span> According
        to <span className="text-[#AB0101] font-[600]">Month</span>
      </p>
      <div className="md:px-[60px] xl:px-[80px]">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-[18px] xl:gap-x-[22px] gap-y-[8px] xl:gap-y-[14px] px-5 md:px-0">
          {months?.map((m) => (
            <button
              key={m}
              className="bg-white font-alegreya text-center text-black rounded-[10px] xl:text-[20px] font-[700] md:tracking-[1px] px-[20px] xl:px-[30px] py-[9px] xl:py-[11px]"
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyFilters;
