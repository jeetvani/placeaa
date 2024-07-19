import { plus } from "../../../../assets";
import MobileNavbar from "../../../mobile-navbar/MobileNavbar";

const CheckoutHeroSection = ({
  data,
}: {
  data: {
    name: string;
    time: {
      from: string;
      to: string;
    };
    bill: {
      people: number;
      discountPercentage: number;
      cost: number;
      originalCost: number;
      discount: number;
      tax: number;
    };
  };
}) => {
  const tabs = [
    { title: "Traveller Details" },
    { title: "Package Details" },
    { title: "Cancellation & Date Change" },
  ];

  return (
    <div className="h-[120vh] bg-home-page-image bg-cover bg-center px-5">
      <MobileNavbar transparentBg={true} />
      <div className="flex flex-col gap-3 mt-10 px-5 items-center justify-center">
        <h1 className="text-lg text-white font-semibold">
          {data?.name}
          <p>
            ( {data?.time?.from} - {data?.time?.to} )
          </p>
        </h1>
        <div className="flex flex-col items-center text-white  gap-2 xl:gap-[30px] mt-[5px] leading-none">
          {tabs?.map((t, index) => (
            <p className="text-md" key={index}>
              {index + 1}. <span className="ml-1">{t?.title}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="font-inter mt-10">
        <div className="bg-[#ECECEC] xl:p-[15px] p-[10px] rounded-tr-2xl rounded-tl-2xl bg-opacity-40">
          <div className="flex items-start gap-[10px] justify-between">
            <div className="flex text-white gap-1 text-[12px] xl:text-[13px] font-[500] tracking-[0.5px] items-center">
              <p>Grand Total</p>
              <p>-</p>
              <p>{data?.bill?.people} Adults</p>
            </div>
            <p className="bg-[#AB0101] text-white p-[4px_9px_3px_9px] rounded-full text-[13px] xl:text-[14px] font-[500]">
              {data?.bill?.discountPercentage}% off
            </p>
          </div>
          <div className="flex items-end gap-[5px] xl:gap-[6px] xl:mt-1 ">
            <p className="text-[#ab0101] leading-none text-[22px] xl:text-[28px] font-[600] xl:tracking-[1px]">
              ₹{data?.bill?.cost}
            </p>
            <p className="text-white text-[10px] xl:text-[11.5px] font-[500] tracking-[0.65px]">
              (Inclusive of taxes)
            </p>
          </div>
        </div>
        <div className="px-[10px] xl:px-[16px] backdrop-filter backdrop-blur-sm text-white border-[0.3px] border-gray-600 pt-[5px] xl:pt-[7px] bg-[rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between">
            <p className="text-[16px] xl:text-[18px] font-[600]">
              Fare Breakup
            </p>
            <img className="h-[20px] w-[20px]" src={plus} alt="" />
          </div>
          <div className="flex border-b border-b-[#B9B9B9] pb-[7px] mt-[4px] pt-[18px] text-[14px] xl:text-[16px] font-[600] items-center justify-between">
            <p className="text-[16px] xl:text-[18px] font-[600]">
              Total Basic Cost
            </p>
            <p>₹{data?.bill?.originalCost}</p>
          </div>
          <div className="flex border-b border-b-[#B9B9B9] text-[14px] xl:text-[16px] pb-[7px] xl:pb-[10px] pt-[12px] font-[600] items-center justify-between">
            <p className="text-[16px] xl:text-[18px] font-[600]">
              Discount or Coupon
            </p>
            <p>-₹{data?.bill?.discount}</p>
          </div>
          <div className="flex border-b border-b-[#B9B9B9] text-[14px] xl:text-[16px] pb-[7px] pt-[12px] font-[600] items-center justify-between">
            <p className="text-[16px] xl:text-[18px] font-[600]">
              Fare Breakup
            </p>
            <p>+₹{data?.bill?.tax}</p>
          </div>
        </div>
        <div className="pl-[10px] xl:pl-[18px] border-[0.3px] border-gray-600 backdrop-filter backdrop-blur-sm text-white bg-[rgba(0,0,0,0.12)] rounded-br-2xl rounded-bl-2xl pb-5">
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
            <span className="text-[#0034EA] cursor-pointer">
              User Agreement
            </span>
            ,{" "}
            <span className="text-[#0034EA] cursor-pointer">
              Terms of Service
            </span>
            , and{" "}
            <span className="text-[#0034EA] cursor-pointer">
              Privacy Policy
            </span>{" "}
            of PLACEAA.
          </p>
        </div>
        <div className="flex justify-center my-[12px] xl:my-[16px]">
          <button className="rounded-full bg-[#AB0101] text-white text-[14px] xl:text-[16px] font-[600] px-[45px] xl:px-[65px] py-[8px]">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeroSection;
