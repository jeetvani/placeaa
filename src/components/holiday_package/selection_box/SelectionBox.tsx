import { useState } from "react";
import { searchTripBanner } from "../../../assets";

const SelectionBox = ({ stickyClasses }: { stickyClasses?: string }) => {
  const [travelData, setTravelData] = useState<{
    from: { name: string; location: string };
    to: { name: string; location: string };
    date: {
      day: string;
      dayShort: string;
      date: number;
      month: string;
      year: number;
    };
    budget: { min: number; max: number };
    person: number;
  }>({
    from: { name: "Ahmedabad", location: "Gujarat, IND" },
    to: { name: "Manali", location: "Himachal Pradesh, IND" },
    person: 1,
    budget: { min: 10000, max: 20000 },
    date: {
      day: "Friday",
      dayShort: "Fri",
      date: 1,
      month: "March",
      year: 2024,
    },
  });

  const getLocation = (name: string) => {};

  return (
    <div
      className={`block relative z-[1000] ${stickyClasses} lg:h-[100px] xl:h-[115px] 2xl:h-[120px]`}
    >
      <div
        className="absolute flex items-center justify-center top-0 right-0 left-0 bottom-0 z-10"
        style={{
          background:
            "linear-gradient(0deg, rgb(0 0 0 / 30%) 0%, rgb(0 0 0 / 30%) 100%)",
        }}
      >
        <div className="flex 2xl:scale-125 font-[600] font-inter items-center border border-[#FFFFFF40] bg-[#000000B2] px-[15px] py-[10px] rounded-[20px]">
          <div className="flex items-center">
            <div className="w-[100px] xl:w-[130px]">
              <input
                type="text"
                className="text-white overflow-hidden w-[90px] xl:w-[120px] bg-transparent outline-none border-none text-[14px] xl:text-[18px] mt-[3px] leading-[22px]"
                value={travelData?.from?.name}
                onChange={(e) =>
                  setTravelData((prev) => ({
                    ...prev,
                    from: { ...prev?.from, name: e.target.value },
                  }))
                }
              />
              <p className="text-[#B9B9B9] text-[11px] xl:text-[13px] leading-[15px]">
                {travelData?.from?.location}
              </p>
            </div>
            <div className="bg-white text-black rounded-full font-[700] text-[9px] xl:text-[11px] xl:leading-[12px] p-[8px] xl:p-[10px]">
              To
            </div>
            <div className="w-[130px] xl:w-[170px] ml-[20px] xl:ml-[25px]">
              <input
                type="text"
                className="text-white bg-transparent w-[90px] xl:w-[120px] outline-none border-none text-[14px] xl:text-[18px] mt-[3px] leading-[22px]"
                value={travelData?.to?.name}
                onChange={(e) =>
                  setTravelData((prev) => ({
                    ...prev,
                    to: { ...prev?.to, name: e.target.value },
                  }))
                }
              />
              <p className="text-[#B9B9B9] text-[11px] xl:text-[13px] leading-[15px]">
                {travelData?.to?.location}
              </p>
            </div>
          </div>
          <div className="px-[18px] xl:px-[28px] border-x border-x-[#FFFFFF40]">
            <p className="text-[#B9B9B9] text-[12px] xl:text-[13px] leading-[15px]">
              Starting Date
            </p>
            <p className="text-white text-[14px] xl:text-[18px] mt-[3px] leading-[22px]">
              {travelData?.date?.dayShort}, {travelData?.date?.date}{" "}
              {travelData?.date?.month} {travelData?.date?.year}
            </p>
          </div>
          <div className="px-[18px] xl:px-[28px] border-r border-r-[#FFFFFF40]">
            <p className="text-[#B9B9B9] text-[12px] xl:text-[13px] leading-[15px]">
              Budget Per Person
            </p>
            <p className="text-white text-[14px] xl:text-[18px] mt-[3px] leading-[22px]">
              ₹{travelData?.budget?.min} - ₹{travelData?.budget?.max}
            </p>
          </div>
          <div className="px-[18px] xl:px-[28px] border-r border-r-[#FFFFFF40]">
            <p className="text-[#B9B9B9] text-[12px] xl:text-[13px] leading-[15px]">
              Budgets & Guests
            </p>
            <p className="text-white text-[14px] xl:text-[18px] mt-[3px] leading-[22px]">
              {travelData?.person} Adult
            </p>
          </div>
          <div className="pl-[18px] xl:pl-[28px]">
            <button className="bg-[#AB0101] text-white rounded-full text-[18px] xl:text-[20px] leading-[25px] py-[5px] px-[30px] xl:px-[40px] xl:py-[7px]">
              Search
            </button>
          </div>
        </div>
      </div>
      <img
        src={searchTripBanner}
        alt="banner"
        className="h-full w-full"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default SelectionBox;
