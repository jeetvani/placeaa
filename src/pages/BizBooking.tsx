import React, { useState } from "react";
import {
  connMan,
  connMar,
  connRev,
  connSup,
  connVis,
  connectBanner,
  hamburger,
  helper,
  homelogo,
  testusermob,
} from "../assets";
import Footer from "../components/home/footer/Footer";
import About from "../components/home/about/About";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";

const BizBooking = () => {
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  const connectFeatures = [
    {
      title: "Increase Visibility",
      desc: "Reach millions of travelers and businesses actively searching for services like yours.",
      logo: connVis,
    },
    {
      title: "Streamlined Management",
      desc: "Easily manage your listings and bookings through our intuitive platform.",
      logo: connMan,
    },
    {
      title: "Boost Revenue",
      desc: "Expand your customer base and increase bookings, leading to improved profitability.",
      logo: connRev,
    },
    {
      title: "Targeted marketing",
      desc: "Access targeted marketing tools to attract your ideal audience and drive conversions.",
      logo: connMar,
    },
    {
      title: "Dedicated Support",
      desc: "Receive personalized assistance from our team to optimize your listings and maximize your success.",
      logo: connSup,
    },
  ];

  const [data, setData] = useState<{
    name: string;
    email: string;
    contact: number;
    business: string;
  } | null>(null);
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
    <div>
      {isAboveMediumScreen ? (
        <div className="relative text-[#ffffff]">
          <img
            src={connectBanner}
            alt="connectbanner"
            className="object-contain w-full"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center pr-[80px]">
            <div className="flex flex-col items-center">
              <p className="font-[700] text-[25px] xl:text-[28px] leading-[40.22px] text-center">
                BizBooking
              </p>
              <p className="w-[60%] mt-[10px] xl:mt-[12px] text-center font-[400] text-[14px] xl:text-[16px] xl:leading-[20px]">
                Expand Your Reach and Grow Your Business By selling your Travel
                Service on PLACEAA
              </p>
            </div>
            <div className="flex items-center gap-[28px] xl:gap-[40px] leading-[20px] text-[15px] xl:text-[16px]">
              <div>
                <p className="font-[700]">Not Registered?</p>
                <button className="font-[400] rounded-[10px] mt-[10px] xl:mt-[14px] py-[10px] xl:py-[12px] px-[30px] xl:px-[40px] bg-[#AB0101] cursor-pointer">
                  Join as a Partner
                </button>
              </div>
              <div>
                <p className="font-[700]">Already Registered?</p>
                <button className="font-[400] rounded-[10px] mt-[10px] xl:mt-[14px] py-[10px] xl:py-[12px] px-[30px] xl:px-[40px] bg-[#AB0101] cursor-pointer">
                  Login to your account
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[65vh] bg-home-page-image bg-cover bg-center px-5">
          <MobileNavbar transparentBg={true} />

          <div className="flex flex-col gap-5 md:flex-row justify-between items-center mt-10">
            <div className="flex flex-col items-center">
              <p className="font-[700] text-[25px] xl:text-[28px] leading-[40.22px] text-center text-white">
                BizBooking
              </p>
              <p className="w-[80%] mt-[10px] xl:mt-[12px] text-center font-[400] text-[14px] xl:text-[16px] xl:leading-[20px] text-white">
                Expand Your Reach and Grow Your Business By selling your Travel
                Service on PLACEAA
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-[28px] xl:gap-[40px] leading-[20px] text-[15px] xl:text-[16px]">
              <div>
                <p className="font-[700] text-white text-center">
                  Not Registered?
                </p>
                <button className="font-[400] text-white rounded-[10px] mt-[10px] xl:mt-[14px] py-[10px] xl:py-[12px] px-[30px] xl:px-[40px] bg-[#AB0101] cursor-pointer">
                  Join as a Partner
                </button>
              </div>
              <div>
                <p className="font-[700] text-white text-center">
                  Already Registered?
                </p>
                <button className="font-[400] text-white rounded-[10px] mt-[10px] xl:mt-[14px] py-[10px] xl:py-[12px] px-[30px] xl:px-[40px] bg-[#AB0101] cursor-pointer">
                  Login to your account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="mt-[30px] xl:mt-[40px] text-center font-[600] text-[25px] xl:text-[30px] leading-[40px] text-black">
        Why Join <span className="text-[#AB0101]">BizBooking</span> ?
      </p>

      <div className="2xl:mx-[100px] my-[50px] xl:my-[60px] text-black flex gap-y-[50px] xl:gap-y-[60px] 2xl:gap-x-[100px] flex-wrap justify-evenly items-center">
        {connectFeatures?.map((cf) => (
          <div
            className="max-w-[300px] xl:max-w-[360px] flex flex-col items-center text-center"
            key={cf?.title}
          >
            <img
              className="xl:w-[35px] xl:h-[35px] w-[30px] h-[30px] mb-[18px] xl:mb-[20px]"
              src={cf?.logo}
              alt="cflogo"
            />
            <p className="text-[22px] xl:text-[24px] font-[600] leading-[32px]">
              {cf?.title}
            </p>
            <p className="text-[16px] xl:text-[17px] font-[400] xl:leading-[25px] mt-[4px] xl:mt-[7px]">
              {cf?.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="md:mx-[120px] xl:mx-[150px] my-[30px] px-5 md:px-0 xl:my-[50px] 2xl:my-[70px]">
        <div className="flex justify-center">
          <div
            className="w-fit rounded-t-[30px] py-5 md:py-[8px] xl:py-[10px] px-3 text-center md:px-[70px] xl:px-[80px]"
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <p className="md:text-[14px] text-[12px] xl:text-[17px] font-[600] leading-none">
              Join BizBooking today and take your business to new heights with
              PLACEA. Let's grow together!
            </p>
          </div>
        </div>

        <div
          className="bg-[#F5F5F5] flex flex-col-reverse px-5 md:flex-row items-center gap-[70px] p-[25px_35px_22px_50px] 2xl:mx-[150px]"
          style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex-1">
            <div className="grid grid-cols-[auto,1fr] items-center gap-x-[22px] xl:gap-x-[26px] gap-y-[20px]">
              <label
                className="w-fit text-[14px] xl:text-[18px] font-[400]"
                htmlFor="name"
              >
                Your Name <span>*</span>
              </label>
              <input
                className="rounded-[8px] border border-black px-1 xl:px-2 py-0.5 xl:py-1 outline-none"
                type="text"
                name="name"
                value={data?.name}
                onChange={(e) =>
                  setData((prev: any) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                id="name"
              />

              <label
                className="w-fit text-[14px] xl:text-[18px] font-[400]"
                htmlFor="email"
              >
                Email ID <span>*</span>
              </label>
              <input
                className="rounded-[8px] border border-black px-1 xl:px-2 py-0.5 xl:py-1 outline-none"
                type="email"
                name="email"
                value={data?.email}
                onChange={(e) =>
                  setData((prev: any) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                id="email"
              />

              <label
                className="w-fit text-[14px] xl:text-[18px] font-[400]"
                htmlFor="contact"
              >
                Contact Number <span>*</span>
              </label>
              <input
                className="rounded-[8px] border border-black px-1 xl:px-2 py-0.5 xl:py-1 outline-none"
                type="number"
                name="contact"
                id="contact"
                value={data?.contact}
                onChange={(e) =>
                  setData((prev: any) => ({
                    ...prev,
                    contact: e.target.value,
                  }))
                }
              />

              <label
                className="w-fit text-[14px] xl:text-[18px] font-[400]"
                htmlFor="business"
              >
                Business Name <span>*</span>
              </label>
              <input
                className="rounded-[8px] border border-black px-1 xl:px-2 py-0.5 xl:py-1 outline-none"
                type="text"
                name="business"
                value={data?.business}
                onChange={(e) =>
                  setData((prev: any) => ({
                    ...prev,
                    business: e.target.value,
                  }))
                }
                id="business"
              />
            </div>

            <button className="font-inter mt-[20px] xl:mt-[31px] text-[12px] xl:text-[16px] font-[500] text-white bg-[#AB0101] py-[5px] xl:py-[8px] w-full rounded-[10px]">
              Submit Now
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[18px] xl:text-[22px] font-[600] mb-[20px] xl:mb-[27px] leading-[30.17px]">
              Fill Your Details We Contact You Soon
            </p>
            <img className="h-[240px] xl:h-[280px]" src={helper} alt="" />
          </div>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
};

export default BizBooking;
