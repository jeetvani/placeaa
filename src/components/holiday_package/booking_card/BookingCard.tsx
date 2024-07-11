import React, { useState } from "react";
import { calender, selected } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const BookingCard = ({
  prices,
  dates,
  itemId,
}: {
  prices: {
    original: number;
    discounted: number;
    discountedPercentage: number;
    checkpoints?: Array<string>;
  };
  dates: {
    from: string;
    to: string;
  };
  itemId: string;
}) => {
  const navigate = useNavigate();
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  const [selectedCoupon, setSelectedCoupon] = useState<number | null>(1);

  const coupons = [
    {
      id: 1,
      title: "First Time",
      desc: "This offer is valid for first time booking only",
      discount: "1600",
    },
    {
      id: 2,
      title: "First Time",
      desc: "This offer is valid for first time booking only",
      discount: "1600",
    },
  ];

  return (
    <div className="md:border min-w-[270px] 2xl:min-w-[320px] h-fit md:border-[#D9D9D9] pb-[15px] px-5 md:px-[15px] md:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
      <div>
        <div className="flex md:sticky top-0 justify-between items-center">
          <p className="font-inter mt-5 text-[15px] font-[500] tracking-[0.75px] text-[#B9B9B9] line-through">
            ₹{prices?.original}
          </p>
          <p className="bg-[#AB0101] rounded-[15px] pt-[4px] pb-[3px] px-[7px] font-inter text-[9.5px] font-[500] text-white">
            {prices?.discountedPercentage}% off
          </p>
        </div>
        <div className="flex border-b border-[#d9d9d9] pb-[12px] mt-2 items-center justify-between font-inter pr-[0px]">
          <div>
            <p className="text-[17px] font-[600] tracking-[1px] text-[#AB0101]">
              ₹{prices?.discounted}
            </p>
            <p className="text-[11px] -mt-1 font-[500] text-[#5e5e5e]">
              Per Person + taxes
            </p>
          </div>
          <div>
            {prices?.checkpoints?.map((pc: string, index: number) => (
              <li className="text-[9px] font-[500] text-[#5e5e5e]" key={index}>
                {pc}
              </li>
            ))}
          </div>
        </div>
        <div className="pt-[12px] pr-[9px] flex items-center justify-between">
          <div className="text-[#AB0101] flex items-center gap-[7px] text-[16px] font-[600]">
            <img
              src={calender}
              alt="calender"
              className="h-[17px] w-[18px] -mt-0.5 text-black"
            />
            <p>{dates?.from}</p>
            <p>-</p>
            <p>{dates?.to}</p>
          </div>
          <p className="text-[#3974CD] text-[16px] font-[600] tracking-[0.8px]">
            Change
          </p>
        </div>
        <button className="bg-[#AB0101E5] mt-[18px] w-full rounded-full py-[10px] text-white text-[15px] font-[600]">
          Request Callback
        </button>
        <button
          onClick={() => navigate(`/checkout/${itemId}`)}
          className="bg-[#AB0101E5] mt-[10px] w-full rounded-full py-[10px] text-white text-[15px] font-[600]"
        >
          Book Online
        </button>
      </div>

      {isAboveMediumScreen && (
        <div className="mt-[40px]">
          <p className="text-[16px] xl:text-[17px] font-[600]">
            Coupons & Offers
          </p>
          <div className="flex items-center p-[14px] xl:p-[16px] justify-between font-inter mt-[12px] xl:mt-[14px] border border-[#d9d9d9] rounded-[10px]">
            <p className="text-[12px] xl:text-[14px] font-[400]">
              Have a coupon code ?
            </p>
            <button className="text-[14px] xl:text-[15px] font-[600] text-[#3974CD]">
              Apply
            </button>
          </div>
          <div className="mt-[12px] xl:mt-[15px] flex flex-col gap-[12px] xl:gap-[14px]">
            {coupons?.map((c) => (
              <div
                key={c?.id}
                className="border py-[8px] xl:py-[11px] font-inter px-[12px] xl:px-[18px] border-[#26B5A9] gap-[8px] xl:gap-[11px] rounded-[10px] flex items-start"
                style={{
                  background:
                    selectedCoupon === c?.id
                      ? "linear-gradient(0deg, #D1F8E6 0%, #D1F8E6 100%), #FFF"
                      : "",
                }}
              >
                {selectedCoupon === c?.id ? (
                  <img
                    src={selected}
                    className="h-[30px] w-[30px] mt-3"
                    alt="selected"
                  />
                ) : (
                  <div className="h-[30px] w-[30px] bg-transparent" />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] xl:text-[13px] font-[600]">
                      {c?.title}
                    </p>
                    <button
                      onClick={() =>
                        setSelectedCoupon(
                          selectedCoupon === c?.id ? null : c?.id
                        )
                      }
                      className="text-[13px] xl:text-[15px] font-[600] text-[#26b5a9]"
                    >
                      {selectedCoupon === c?.id ? "Remove" : "Add"}
                    </button>
                  </div>
                  <p className="text-[10px] leading-snug font-[500] mb-[5px] text-[#5e5e5e]">
                    {c?.desc}
                  </p>
                  <p className="text-[14px] xl:text-[15px] font-[600]">
                    -₹{c?.discount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
