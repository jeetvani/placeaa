import { infolight } from "../../../assets";

const AssistanceBanner = () => {
  return (
    <div
      className="flex md:flex-row flex-col mb-[20px] xl:mb-[25px] mt-[25px] xl:mt-[30px] md:items-center justify-evenly py-[20px] xl:py-[24px] px-5 md:px-0 gap-3 md:gap-0"
      style={{
        background: "linear-gradient(90deg, #E9B500 4.08%, #FDB344 43.53%)",
      }}
    >
      <div className="flex items-center gap-[9px] xl:gap-[14px]">
        <div className="xl:h-[35px] h-[25px] w-[25px] xl:w-[35px]">
          <img src={infolight} alt="info" className="h-full w-full" />
        </div>
        <p className="md:text-[20px] xl:text-[28px] font-[600] tracking-[1.4px] font-inter text-white">
          Need Assistance
        </p>
      </div>
      <div className="text-white font-inter md:text-[14px] xl:text-[18px] md:font-[600] tracking-[1px] text-[12px]">
        <li className="leading-none text-center">
          Please speak with our expert to secure the greatest discounts on
          holiday packages.
        </li>
        <li className="leading-none md:mt-2 mt-3 ml-4 md:ml-0">
          Please reach out to us at{" "}
          <span className="text-[#082485] ml-4 md:ml-0">
            support@placeaa.com
          </span>
        </li>
      </div>
    </div>
  );
};

export default AssistanceBanner;
