import { helpcontact } from "../../../assets";

const HelpCenter = () => {
  return (
    <div className="lg:h-[250px] h-[150px] xl:h-[300px] 2xl:h-[350px] relative mt-[50px]">
      <div className="absolute w-[80vw] px-5 py-10 md:px-0 md:py-0 text-sm md:top-[50px] xl:top-[77px] md:left-[103px] text-white md:max-w-[30vw] leading-[1.10]">
        <p className="lg:text-[24px] xl:text-[28px] font-[600] xl:tracking-[-1px] font-inter">
          Have a question or need assistance? We're here to help.
        </p>
        <button className="lg:px-[28px] px-3 mt-3 text-xs xl:px-[30px] lg:mt-[20px] xl:mt-[41px] lg:py-[10px] lg:text-[16px] xl:text-[18px] font-lato font-[700] leading-[30px] rounded-[10px] bg-[#AB0101]">
          Contact Us
        </button>
      </div>
      <img
        src={helpcontact}
        alt="help"
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default HelpCenter;
