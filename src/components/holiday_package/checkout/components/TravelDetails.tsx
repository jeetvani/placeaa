import React, { Dispatch, useState } from "react";
import { downClose, selected, upOpen } from "../../../../assets";

const TravelDetails = ({
  data,
  setCheckoutData,
}: {
  data: {
    travellers: Array<{
      name: string;
      profileComplete: boolean;
      profilePic?: string;
    }>;
    number: number;
    email: string;
    pincode: number;
    countryCode: string;
    specialRequests: string;
    address: string;
  };
  setCheckoutData: Dispatch<any>;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const getInitials = (name: string) => {
    const nameArray = name?.split(" ");
    if (nameArray?.length > 1) {
      return (
        nameArray[0]?.slice(0, 1) +
        nameArray[nameArray?.length - 1]?.slice(0, 1)
      );
    } else {
      return nameArray[0]?.slice(0, 1);
    }
  };

  const returnCityState = (pincode: number) => {
    return "vadodara, gujarat";
  };

  return (
    <div
      className={`rounded-[15px] pt-[8px] xl:pt-[12px] ${
        isOpen ? "pb-[16px] xl:pb-[28px]" : "pb-[8px] xl:pb-[12px]"
      } pr-[20px] xl:pr-[25px] pl-[19px] xl:pl-[22px] border border-[#d9d9d9] shadow-[0px_0px_0px_0px_rgba(217,217,217,0.25)]`}
      style={{ boxShadow: "0px 0px 2px 0px rgba(217, 217, 217, 0.25)" }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between cursor-pointer items-center"
      >
        <p className="text-[18px] xl:text-[20px] font-[600]">
          1. Traveller Details
        </p>
        {isOpen ? (
          <img className="w-[11px] h-[18px]" src={upOpen} alt="" />
        ) : (
          <img className="w-[11px] h-[18px]" src={downClose} alt="" />
        )}
      </div>
      <div className={`${isOpen ? "h-full" : "h-0"} overflow-hidden`}>
        <div className="mt-[10px] xl:mt-[12px] flex flex-col">
          {data?.travellers?.map((dt, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col py-[18px] xl:py-[22px] md:items-center items-start gap-3 justify-between border-b border-b-[#AB0101] last:border-none border-dashed"
            >
              <div className="flex items-center gap-[10px] xl:gap-[15px]">
                {dt?.profilePic ? (
                  <img
                    className="rounded-full h-[35px] w-[35px]"
                    src={dt?.profilePic}
                    alt={getInitials(dt?.name)}
                  />
                ) : (
                  <p className="h-[35px] flex items-center justify-center bg-[#AB0101] text-white rounded-full w-[35px] text-[14px] xl:text-[16px] font-[600]">
                    {getInitials(dt?.name)}
                  </p>
                )}
                <div>
                  <p className="text-[#5e5e5e] font-[600] text-[14px] xl:text-[15px]">
                    Traveller {index + 1}
                  </p>
                  <p className="text-[16px] xl:text-[18px] leading-none font-[600] text-black ">
                    {dt?.name}
                  </p>
                </div>
              </div>
              <div className="flex text-[14px] xl:text-[15px] font-[600] text-[#0034ea] uppercase items-center gap-[7px] xl:gap-[12px]">
                {dt?.profileComplete && (
                  <div className="mr-[7px] flex items-center gap-[5px] xl:gap-[10px]">
                    <img className="h-[20px] w-[20px]" src={selected} alt="" />
                    <p className="text-[#26b5a9]">Profile Completed</p>
                  </div>
                )}
                <p>Update</p>
                <p>Remove</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex md:justify-end justify-center">
          <button className="uppercase bg-[#AB0101] text-white text-[14px] xl:text-[15px] font-[600] px-[25px] xl:px-[30px] xl:pt-[11px] py-[8px] xl:pb-[10px] rounded-full">
            Add traveller
          </button>
        </div>
        <div>
          <div className="flex items-center gap-1.5 md:mt-0 mt-4">
            <p className="text-[18px] xl:text-[20px] font-[600]">
              Please Enter Details :
            </p>
          </div>
          <div className="mt-[16px] xl:mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-x-[6px] xl:gap-x-[8px] gap-y-[10px] xl:gap-y-[12px]">
            <div className="rounded-[10px] flex border items-center border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
              <div className="flex items-center gap-[11px] pr-[16px]">
                <p className="text-[16px] xl:text-[18px] leading-none font-[400]">
                  {data?.countryCode}
                </p>
                <img
                  className="xl:w-[11px] xl:h-[18px] w-[9px] h-[13px]"
                  src={downClose}
                  alt=""
                />
              </div>
              <div className="border-l pl-[10px] xl:pl-[15px] border-l-[#5E5E5E]">
                <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                  Mobile Number
                </p>
                <input
                  className="text-[16px] xl:text-[18px] font-[400] tracking-[1px] w-full outline-none border-none"
                  type="number"
                  onChange={(e) =>
                    setCheckoutData((prev: any) => ({
                      ...prev,
                      travelDetails: {
                        ...prev.travelDetails,
                        number: e.target.value,
                      },
                    }))
                  }
                  value={data?.number}
                  name="number"
                />
              </div>
            </div>
            <div className="rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
              <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                Email Address
              </p>
              <input
                className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                type="email"
                onChange={(e) =>
                  setCheckoutData((prev: any) => ({
                    ...prev,
                    travelDetails: {
                      ...prev.travelDetails,
                      email: e.target.value,
                    },
                  }))
                }
                value={data?.email}
                name="email"
              />
            </div>
            <div className="rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
              <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                Address
              </p>
              <input
                className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                type="text"
                onChange={(e) =>
                  setCheckoutData((prev: any) => ({
                    ...prev,
                    travelDetails: {
                      ...prev.travelDetails,
                      address: e.target.value,
                    },
                  }))
                }
                value={data?.address}
                name="address"
              />
            </div>
            <div className="rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
              <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                Pincode
              </p>
              <div className="flex items-center">
                <input
                  className="text-[16px] xl:text-[18px] font-[400] flex-1 outline-none border-none"
                  type="number"
                  onChange={(e) =>
                    setCheckoutData((prev: any) => ({
                      ...prev,
                      travelDetails: {
                        ...prev.travelDetails,
                        pincode: e.target.value,
                      },
                    }))
                  }
                  value={data?.pincode}
                  name="pincode"
                />
                <p className="text-[12px] xl:text-[14px] text-[#5e5e5e] font-[400] lowercase">
                  {returnCityState(data?.pincode)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
