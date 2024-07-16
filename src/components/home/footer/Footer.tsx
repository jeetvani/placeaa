import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerlogo } from "../../../assets";
import { useNavigate } from "react-router-dom";

interface ContentItem {
  title: string;
  route: string;
}

interface ServiceSet {
  title: string;
  content: ContentItem[];
}

const Footer = () => {
  const navigate = useNavigate();

  const servicesSet: ServiceSet[] = [
    {
      title: "Services",
      content: [
        { title: "AI Travel Planning", route: "/aiplanner" },
        { title: "Travel Guide", route: "/travel-guide" },
        { title: "BizConnect", route: "/biz-connect" },
        { title: "BizBooking", route: "/biz-booking" },
      ],
    },
    {
      title: "Booking",
      content: [
        { title: "Flight Booking", route: "/" },
        { title: "Bus Booking", route: "/" },
        { title: "Hotel Booking", route: "/" },
        { title: "Holiday Package", route: "/holidays" },
      ],
    },
    {
      title: "Support",
      content: [
        { title: "Help Center", route: "/help" },
        { title: "Contact Us", route: "/contact" },
        { title: "FAQs", route: "/help" },
      ],
    },
  ];

  const handleNavigation = (route: string): void => {
    navigate(route);
  };

  return (
    <div className="lg:mt-[22px] mt-[40px]">
      <div className="lg:py-[25px] xl:py-[35px] bg-[#B9B9B9] flex md:flex-row flex-col items-center justify-around py-10 gap-10">
        <div className="lg:h-[40px] xl:h-[50px] 2xl:h-[70px] h-[60px]">
          <img src={footerlogo} className="h-full w-full" alt="footerlogo" />
        </div>
        <div className="flex justify-between lg:gap-[20px] xl:gap-[26px] gap-8">
          {servicesSet?.map((ss) => (
            <div key={ss?.title}>
              <p className="lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-[600] text-black">
                {ss?.title}
              </p>
              <div className="lg:mt-[15px] flex flex-col lg:gap-[6px] xl:gap-[9px] text-[#5e5e5e] text-sm">
                {ss?.content?.map((ssc, index) => (
                  <p
                    className="font-[400] lg:text-[13px] xl:text-[15px] 2xl:text-[19px] cursor-pointer hover:text-black transition-colors"
                    key={index}
                    onClick={() => handleNavigation(ssc.route)}
                  >
                    {ssc?.title}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[#000] font-[600] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] leading-none text-xl">
            Sign to our Newsletter
          </p>
          <p className="text-[#5E5E5E] font-[400] lg:text-[14px] 2xl:text-[17px] leading-none text-sm">
            Get the latest news and offers first
          </p>
          <input
            className="w-[90vw] mt-2 px-3 py-3 rounded-[10px] md:w-[400px] border border-[#b9b9b9] lg:py-[7px] xl:py-[10px] lg:px-[8px] xl:px-[12px] bg-white lg:text-[12px] xl:text-[14px] 2xl:text-[18px] font-[600] placeholder:text-[#b1b1b1] text-black placeholder:text-sm"
            placeholder="Enter your email address...."
          />
          <button className="px-3 py-2 rounded-[10px] lg:py-[6px] xl:py-[9.5px] border border-[#AB0101] bg-[#AB0101] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] text-white font-[600]">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="bg-[#050505] font-karla text-white lg:px-[28px] xl:px-[32px]">
        <div
          style={{ borderBottom: "1px solid #535353" }}
          className="flex items-center justify-between lg:py-[16px] xl:py-[20px] py-5 px-5"
        >
          <div className="lg:gap-[20px] gap-3 flex md:flex-row flex-col md:items-center xl:gap-[25px] text-[#d9d9d9] font-[400] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
            <li
              className="cursor-pointer hover:text-white transition-colors"
              onClick={() => handleNavigation("/about")}
            >
              About Us
            </li>
            <li
              className="cursor-pointer hover:text-white transition-colors"
              onClick={() => handleNavigation("/contact")}
            >
              Contact Us
            </li>
            <li
              className="cursor-pointer hover:text-white transition-colors"
              onClick={() => handleNavigation("/privacy-policy")}
            >
              Privacy Policy
            </li>
            <li
              className="cursor-pointer hover:text-white transition-colors"
              onClick={() => handleNavigation("/terms-conditions")}
            >
              Terms & Conditions
            </li>
          </div>

          <div className="flex md:flex-row flex-col gap-5 items-center lg:gap-[20px] xl:gap-[23px]">
            <div>
              <FaInstagram size={23} />
            </div>
            <div>
              <FaFacebookF size={16} />
            </div>
            <div>
              <FaTwitter size={20} />
            </div>
            <div>
              <FaYoutube size={22} />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center py-3">
          <p className="lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-[400]">
            &copy; 2024 PLACEAA PVT. LTD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
