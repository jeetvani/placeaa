import { package_image } from "../../../assets";

const HolidayPackageCard = () => {
  return (
    <div
      className="relative flex flex-col items-end justify-end rounded-3xl w-full"
      style={{
        backgroundImage: `url(${package_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "370px",
        height: "400px",
      }}
    >
      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black rounded-b-3xl" />
      <div className="z-10 flex justify-between w-full text-white font-medium px-3">
        <h1 className="text-lg">Goa Incredibal Destination</h1>
        <p className="text-lg">6N/7D</p>
      </div>
      <div className="z-10 w-full flex justify-center items-center pb-3 px-3">
        <div
          className=" bg-white w-full flex items-center justify-between rounded-2xl px-2 py-2 mt-2"
          style={{
            border: "1px solid rgba(217, 217, 217, 0.60)",
          }}
        >
          <button className="rounded-[10px] font-inter lg:px-[15px] xl:px-[28px] lg:py-[7px] bg-[#ab0101] text-white lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:pt-[6px] 2xl:pb-[8px] font-[600] text-[12px] px-6 py-2">
            Book Now
          </button>
          <div className="flex font-inter gap-[10px]">
            <div className="relative mt-2">
              <p className="lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-[600] tracking-[0.7px] text-[12px]">
                ₹12180
              </p>
              <div className="absolute top-[1px] rotate-[2deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                  viewBox="0 0 69 22"
                  fill="none"
                >
                  <path
                    d="M67.4004 2.44562L2.40039 20.4456"
                    stroke="#AB0101"
                    stroke-opacity="0.7"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="lg:text-[14px] xl:text-[18px] 2xl:text-[19px] font-[600] tracking-[1px] text-[#ab0101] text-[15px]">
                ₹10580
              </p>
              <p className="lg:text-[10px] xl:text-[11px] 2xl:text-[12px] font-[600] text-[#5E5E5E] lg:-mt-1 text-[12px]">
                Per Person + taxes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackageCard;
