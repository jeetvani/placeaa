import { useState } from "react";
import { homelogo, hamburger, testusermob } from "../../../assets";

const SelectionBoxMobile = () => {
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
  const [userData, setUserData] = useState<{
    firstName: string;
    lastName: string;
    id: string;
    email: string;
    profile: string;
  }>({
    firstName: "Shubh",
    lastName: "Mangukiya",
    id: "asdfasfa",
    email: "shubh_placeaa@gmail.com",
    profile: testusermob,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-[110vh] bg-home-page-image bg-cover bg-center px-5">
      <nav className="flex items-center justify-between pt-4 ">
        <div className="flex items-center gap-4 lg:gap-0">
          <img
            src={hamburger}
            alt="menu"
            className="w-6 h-6 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <img
            src={homelogo}
            alt="logo"
            className="h-8 lg:h-[35px] xl:h-[38px] 2xl:h-[45px]"
          />
        </div>
        <div className="lg:hidden">
          <img
            src={userData.profile}
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>
      <div className="bg-[rgba(0,0,0,0.12)] rounded-lg p-4 backdrop-filter backdrop-blur-sm border-[0.3px] border-gray-600 mt-20">
        <div className="flex flex-col gap-5 py-3 px-5 w-full">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
              <input
                type="text"
                className="text-white text-center w-[50%] flex overflow-hidden bg-transparent outline-none border-none text-2xl mt-[3px] leading-[22px]"
                value={travelData?.from?.name}
                onChange={(e) =>
                  setTravelData((prev) => ({
                    ...prev,
                    from: { ...prev?.from, name: e.target.value },
                  }))
                }
              />
              <p className="text-[#B9B9B9] text-sm leading-[15px]">
                {travelData?.from?.location}
              </p>
            </div>
            <div className="bg-white flex justify-center items-center text-black rounded-full font-[500] text-sm h-8 w-8">
              To
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <input
                type="text"
                className="text-white text-center w-[50%] flex overflow-hidden bg-transparent outline-none border-none text-2xl mt-[3px] leading-[22px]"
                value={travelData?.to?.name}
                onChange={(e) =>
                  setTravelData((prev) => ({
                    ...prev,
                    to: { ...prev?.to, name: e.target.value },
                  }))
                }
              />
              <p className="text-[#B9B9B9] text-sm leading-[15px]">
                {travelData?.to?.location}
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#BFBFBF] opacity-30"></div>

          <div className=" flex flex-col w-full justify-center items-center gap-1">
            <p className="text-[#B9B9B9] text-md leading-[15px]">
              Starting Date
            </p>
            <p className="text-white text-xl mt-[3px] leading-[22px]">
              {travelData?.date?.dayShort}, {travelData?.date?.date}{" "}
              {travelData?.date?.month} {travelData?.date?.year}
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#BFBFBF] opacity-30"></div>

          <div className="flex flex-col w-full justify-center items-center gap-1">
            <p className="text-[#B9B9B9] text-md leading-[15px]">
              Budget Per Person
            </p>
            <p className="text-white text-xl mt-[3px] leading-[22px]">
              ₹{travelData?.budget?.min} - ₹{travelData?.budget?.max}
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#BFBFBF] opacity-30"></div>

          <div className="flex flex-col w-full justify-center items-center gap-1">
            <p className="text-[#B9B9B9] text-md leading-[15px]">
              Budgets & Guests
            </p>
            <p className="text-white text-xl mt-[3px] leading-[22px]">
              {travelData?.person} Adult
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button className="bg-[#AB0101] text-white rounded-xl text-[18px] xl:text-[20px] leading-[25px] py-3 w-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default SelectionBoxMobile;
