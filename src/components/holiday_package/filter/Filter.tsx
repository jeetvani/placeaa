import { useMediaQuery } from "react-responsive";
import { dropdown, filter } from "../../../assets";
import { useState } from "react";

const Filter = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const FilterOptions = () => (
    <>
      <div className="flex items-center gap-[4px] xl:gap-[8px]">
        <p className="xl:text-[20px] font-[600]">Duration</p>
        <div className="h-[15px] w-[8px]">
          <img src={dropdown} alt="dropdown" className="h-full w-full" />
        </div>
      </div>
      <div className="flex items-center gap-[4px] xl:gap-[8px]">
        <p className="xl:text-[20px] font-[600]">Hotel Rating</p>
        <div className="h-[15px] w-[8px]">
          <img src={dropdown} alt="dropdown" className="h-full w-full" />
        </div>
      </div>
      <div className="flex items-center gap-[4px] xl:gap-[8px]">
        <p className="xl:text-[20px] font-[600]">Transportation</p>
        <div className="h-[15px] w-[8px]">
          <img src={dropdown} alt="dropdown" className="h-full w-full" />
        </div>
      </div>
      <div className="flex items-center gap-[4px] xl:gap-[8px]">
        <p className="xl:text-[20px] font-[600]">Theme</p>
        <div className="h-[15px] w-[8px]">
          <img src={dropdown} alt="dropdown" className="h-full w-full" />
        </div>
      </div>
    </>
  );

  return (
    <div className="mx-[20px] xl:mx-[40px] md:rounded-full rounded-xl mt-[30px] xl:mt-[40px] mb-[43px] pr-[11px] pl-[20px] xl:pl-[30px] xl:pr-[18px] py-[11px] xl:py-[18px] border border-[#D9D9D9] md:sticky top-[100px] xl:top-[115px] bg-white z-[1000]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-[18px] xl:gap-[30px]">
          {isMobile ? (
            <div
              className="h-[18px] xl:h-[22px] cursor-pointer"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <img src={filter} alt="filter" className="h-full w-full" />
            </div>
          ) : (
            <>
              <div className="h-[18px] xl:h-[22px]">
                <img src={filter} alt="filter" className="h-full w-full" />
              </div>
              <div className="flex items-center gap-[15px] xl:gap-[35px]">
                <FilterOptions />
              </div>
            </>
          )}
        </div>
        <div className="flex gap-[9px] xl:gap-[11px]">
          <button
            className="rounded-[15px] text-[14px] xl:text-[16px] font-[600] px-[20px] xl:px-[24px] py-[5px] xl:py-[6px] leading-none"
            style={{ border: "1px solid rgba(185, 185, 185, 0.60)" }}
          >
            Compare Packages
          </button>
          <button
            className="rounded-[15px] text-[14px] xl:text-[16px] font-[600] flex items-center gap-3 px-[13px] xl:px-[18px] py-[5px] xl:py-[7px] leading-none"
            style={{ border: "1px solid rgba(185, 185, 185, 0.60)" }}
          >
            Sorted By:
            <span className="flex text-[#5E5E5E] items-center gap-[12px] xl:gap-[14px]">
              <span>Popularity</span>{" "}
              <img src={dropdown} alt="dropdown" className="h-[16px] w-[9px]" />
            </span>
          </button>
        </div>
      </div>
      {isMobile && isFilterOpen && (
        <div className="mt-4 flex flex-col gap-4">
          <FilterOptions />
        </div>
      )}
    </div>
  );
};

export default Filter;
