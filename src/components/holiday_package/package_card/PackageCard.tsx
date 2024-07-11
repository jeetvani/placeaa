import { useNavigate } from "react-router-dom";
import { customize } from "../../../assets";

const PackageCard = ({ p }: { p: any }) => {
  const navigate = useNavigate();

  const handleCardData = () => {
    navigate(`/holidays/${p.id}`, { state: { p } });
  };

  return (
    <div
      className="border bg-[#FEFEFE] rounded-[17px] lg:max-w-[300px] xl:max-w-[360px] 2xl:max-w-[420px] px-3 py-3 md:px-0 md:py-0"
      style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}
      onClick={handleCardData}
    >
      <div className="relative border rounded-[15px] lg:mx-[5px] xl:mx-[8px] lg:mb-[6px] xl:mb-[10px] lg:mt-[5.5px] xl:mt-[9px]">
        <img
          src={p?.image}
          className="h-full w-full rounded-[15px]"
          alt="location"
          style={{ objectFit: "cover" }}
        />
        <div
          className="absolute flex lg:gap-[5px] xl:gap-[7px] lg:px-[9px] lg:py-1 top-[9px] left-[5px] rounded-[10px] items-center py-1 px-2 gap-1"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.60)",
            background: "rgba(0, 0, 0, 0.60)",
          }}
        >
          <img
            src={customize}
            className="w-[15px] h-[10px] 2xl:scale-110"
            alt="customize"
          />
          <p className="uppercase text-white md:text-md xl:text-[14px] 2xl:text-[16px] md:font-[600] text-[12px]">
            Customizable
          </p>
        </div>
        <div
          className="absolute lg:px-[13px] lg:py-1 top-[9px] right-[5px] rounded-[10px] py-1 px-2"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.60)",
            background: "rgba(0, 0, 0, 0.60)",
          }}
        >
          <p className="uppercase text-white lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-[600] text-[12px]">
            Compare
          </p>
        </div>
      </div>
      <div className="lg:mt-[8px] xl:mt-[12px] lg:mx-[10px] 2xl:mx-[12px] 2xl:mt-[15px] mt-3">
        <div className="flex items-center justify-between">
          <p className="font-[600] leading-tight lg:text-[16px] xl:text-[18px] 2xl:text-[21px]">
            {p?.place}
          </p>
          <div
            className="flex font-inter items-center rounded-[5px] font-[600] lg:text-[10px] xl:text-[11px] 2xl:text-[12.5px] tracking-[0.65px] text-white xl:py-[4px] xl:px-[6px] lg:px-[5px] lg:py-[3px] text-xs px-2 py-1"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.85)",
              background: "rgba(0, 0, 0, 0.85)",
            }}
          >
            <p>{p?.nights}N</p>
            <p>/</p>
            <p>{p?.days}D</p>
          </div>
        </div>
        <div className="flex flex-wrap lg:mt-[8px] xl:mt-[12px] items-center mt-2">
          {p?.distribution?.map((pd: any, index: number) => (
            <div
              className="flex items-center gap-0.5 lg:text-[12px] xl:text-[14px] 2xl:text-[15.5px] font-[600] tracking-[0.6px] text-[#5E5E5E] text-sm"
              key={index}
            >
              <p className="text-[#AB0101]">{pd?.for}N</p>
              <p className="uppercase">{pd?.place}</p>
              {index + 1 < p?.distribution?.length && (
                <p className="mx-[2px]">|</p>
              )}
            </div>
          ))}
        </div>
        <div className="lg:mt-[10px] xl:mt-[12px] text-[#5E5E5E] font-inter grid grid-cols-2 items-start justify-between lg:text-[11.3px] xl:text-[13px] 2xl:text-[15px] font-[500] tracking-[0.7px] text-[12px] mt-2">
          {p?.services?.map((ps: any, index: number) => (
            <div key={index} className="items-center gap-1 flex">
              <div className="lg:h-1 lg:w-1 2xl:h-1.5 2xl:w-1.5 -translate-y-[1.2px] rounded-full bg-[#5E5E5E] w-1 h-1" />
              <p key={index}>{ps}</p>
            </div>
          ))}
        </div>
        <div
          className="lg:mt-[10px] xl:mt-[15px] flex items-center justify-between lg:p-[6px] xl:px-[8px] xl:py-[10px] rounded-[10px] px-2 py-2 mt-2"
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
                ₹{p?.prices?.original}
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
                ₹{p?.prices?.discounted}
              </p>
              <p className="lg:text-[10px] xl:text-[11px] 2xl:text-[12px] font-[600] text-[#5E5E5E] lg:-mt-1 text-[12px]">
                Per Person + taxes
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-[10px] xl:mt-[13px] font-inter lg:mb-[9px] xl:mb-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-[500] tracking-[0.75px] text-[#ab0101] text-[12px] mt-2">
          <p className="text-[#5e5e5e]">
            Offered By: <span className="text-[#ab0101]">{p?.offeredBy}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
