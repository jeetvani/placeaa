import React from "react"
import { plus } from "../../../../assets"

const Bill = ({
  data,
}: {
  data: {
    people: number
    discountPercentage: number
    cost: number
    originalCost: number
    discount: number
    tax: number
  }
}) => {
  return (
    <div
      className="font-inter sticky top-5 h-full -mt-12 xl:-mt-16"
      style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-[#ECECEC] xl:p-[15px] p-[10px]">
        <div className="flex items-start gap-[10px] justify-between">
          <div className="flex text-[#5e5e5e] gap-1 text-[12px] xl:text-[13px] font-[500] tracking-[0.5px] items-center">
            <p>Grand Total</p>
            <p>-</p>
            <p>{data?.people} Adults</p>
          </div>
          <p className="bg-[#AB0101] text-white p-[4px_9px_3px_9px] rounded-full text-[13px] xl:text-[14px] font-[500]">
            {data?.discountPercentage}% off
          </p>
        </div>
        <div className="flex items-end gap-[5px] xl:gap-[6px] xl:mt-1">
          <p className="text-[#ab0101] leading-none text-[22px] xl:text-[28px] font-[600] xl:tracking-[1px]">
            ₹{data?.cost}
          </p>
          <p className="text-[#5e5e5e] text-[10px] xl:text-[11.5px] font-[500] tracking-[0.65px]">
            (Inclusive of taxes)
          </p>
        </div>
      </div>
      <div className="px-[10px] xl:px-[16px] bg-[#ffffff] pt-[5px] xl:pt-[7px]">
        <div className="flex items-center justify-between">
          <p className="text-[16px] xl:text-[18px] font-[600]">Fare Breakup</p>
          <img
            className="h-[20px] w-[20px]"
            src={plus}
            alt=""
          />
        </div>
        <div className="flex border-b border-b-[#B9B9B9] pb-[7px] mt-[4px] pt-[18px] text-[14px] xl:text-[16px] font-[600] items-center justify-between">
          <p className="text-[16px] xl:text-[18px] font-[600]">
            Total Basic Cost
          </p>
          <p>₹{data?.originalCost}</p>
        </div>
        <div className="flex border-b border-b-[#B9B9B9] text-[14px] xl:text-[16px] pb-[7px] xl:pb-[10px] pt-[12px] font-[600] items-center justify-between">
          <p className="text-[16px] xl:text-[18px] font-[600]">
            Discount or Coupon
          </p>
          <p>-₹{data?.discount}</p>
        </div>
        <div className="flex border-b border-b-[#B9B9B9] text-[14px] xl:text-[16px] pb-[7px] pt-[12px] font-[600] items-center justify-between">
          <p className="text-[16px] xl:text-[18px] font-[600]">Fare Breakup</p>
          <p>+₹{data?.tax}</p>
        </div>
      </div>
      <div className="pl-[10px] xl:pl-[18px]">
        <p className="text-[14px] font-[600] mt-[14px] xl:mt-[16px]">
          Important Information
        </p>
        <p className="mt-[6px] xl:mt-[8px] text-[10px] font-[400] w-[310px] xl:w-[345px]">
          By clicking the Continue button below to proceed with the booking, I
          acknowledge that I have reviewed and agree to the{" "}
          <span className="text-[#0034EA] cursor-pointer">
            Cancellation Policy
          </span>
          ,{" "}
          <span className="text-[#0034EA] cursor-pointer">User Agreement</span>,{" "}
          <span className="text-[#0034EA] cursor-pointer">
            Terms of Service
          </span>
          , and{" "}
          <span className="text-[#0034EA] cursor-pointer">Privacy Policy</span>{" "}
          of PLACEAA.
        </p>
      </div>
      <div className="flex justify-center my-[12px] xl:my-[16px]">
        <button className="rounded-full bg-[#AB0101] text-white text-[14px] xl:text-[16px] font-[600] px-[45px] xl:px-[65px] py-[8px] xl:py-[10px]">
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default Bill
