import { Dispatch, useEffect, useState } from "react";

import AIPlanner from "./Booking/AIPlanner";
import AIPlannerMobile from "./Booking/mobile/AIPlanner";
import Holiday from "./Booking/Holiday";
import HolidayMobile from "./Booking/mobile/Holiday";

import {
  homelogo,
  bizconnect,
  bizbooking,
  login,
  hash,
  yjsh,
  explore,
  spiral,
  aiplanner,
  aiplannerred,
  holidaypackage,
  holidaypackagered,
  help_white,
  testusermob,
  hamburger,
  ai,
  down,
  travelGuideRed,
  travelGuide,
  offersRed,
  offers,
} from "../../../assets";
import { useNavigate } from "react-router-dom";

interface NavItem {
  activeIcon: string;
  passiveIcon: string;
  title: string;
  link: string;
}

interface NavContent {
  logo: string;
  title: string;
  desc?: string;
  route: string;
}

interface MoreOption {
  title: string;
  desc: string;
  image: string;
  route: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navs: NavItem[];
  navContents: NavContent[];
  moreOptionsContents: MoreOption[];
  handleNavbarClick: (title: string, route: string) => void;
  activeTab: string | null;
  setActiveTab: (tab: string) => void;
}

const Hero = ({
  isLoggedIn,
  setLoginPopup,
}: {
  isLoggedIn: boolean;
  setLoginPopup: Dispatch<boolean>;
}) => {
  const navigate = useNavigate();

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

  const [activeBooking, setActiveBooking] = useState("HOLIDAY PACKAGE");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const navContents = [
    {
      logo: bizconnect,
      title: "BizConnect",
      desc: "Connect Your Business",
      route: "/biz-connect",
    },
    {
      logo: bizbooking,
      title: "BizBooking",
      desc: "Booking For Business",
      route: "/biz-booking",
    },
    {
      logo: login,
      route: "",
      title: isLoggedIn
        ? `Hi, ${userData?.firstName}`
        : "Login or Create Account",
    },
  ];

  const bookingContents = [
    {
      logoOn: aiplannerred,
      logoOff: aiplanner,
      title: "PLAN TRIP USING AI",
      component: <AIPlanner />,
      mobile: <AIPlannerMobile />,
    },
    {
      logoOn: holidaypackagered,
      logoOff: holidaypackage,
      title: "HOLIDAY PACKAGE",
      component: <Holiday />,
      mobile: <HolidayMobile />,
    },
  ];

  const handleNavbarClick = (title: string, route: string) => {
    title === "Login or Create Account"
      ? setLoginPopup(true)
      : title?.startsWith("Hi,")
      ? setShowMore(!showMore)
      : navigate(route);
  };

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

  const moreOptionsContents = [
    {
      title: "My Profile",
      desc: "Manage your profile, traveller details, login details",
      image: login,
      route: "/profile",
    },
    {
      title: "My Booking",
      desc: "View booking details, Modify Bookings, Check booking status",
      image: bizconnect,
      route: "/bookings",
    },
    {
      title: "Help & Support",
      desc: "Get help, Submit your question, See frequently asked questions",
      image: help_white,
      route: "/help",
    },
  ];

  const navs = [
    {
      activeIcon: aiplannerred,
      passiveIcon: aiplanner,
      title: "AI Trip Planner",
      link: "aiplanner",
    },
    {
      activeIcon: holidaypackagered,
      passiveIcon: holidaypackage,
      title: "Holidays",
      link: "holidays",
    },
    {
      activeIcon: travelGuideRed,
      passiveIcon: travelGuide,
      title: "Travel Guide",
      link: "travel-guide",
    },
    {
      activeIcon: offersRed,
      passiveIcon: offers,
      title: "Offers",
      link: "offers",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowMore(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MoreOptions = () => (
    <div
      className="rounded-[15px] absolute lg:top-[60px] xl:top-[70px] 2xl:top-[80px] z-[5000] right-5 lg:p-[12px] xl:p-[14px] 2xl:p-[18px] flex flex-col lg:gap-[12px] xl:gap-[14px] bg-white text-black"
      style={{
        width: "max-content",
        boxShadow:
          "0px -1px 5px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {moreOptionsContents?.map((moc) => (
        <div
          className="flex lg:px-[9px] cursor-pointer lg:gap-[12px] xl:gap-[16px] 2xl:gap-[22px] items-center"
          key={moc?.title}
          onClick={() => {
            setShowMore(false);
            navigate(moc?.route);
          }}
        >
          <div className="bg-black rounded-full lg:h-[30px] lg:w-[30px] xl:h-[35px] 2xl:h-[45px] 2xl:w-[45px] flex items-center justify-center xl:w-[35px]">
            <img
              className="xl:h-[18px] xl:w-[18px] lg:h-[14px] lg:w-[14px] 2xl:h-[23px] 2xl:w-[23px]"
              src={moc?.image}
              alt="more i"
            />
          </div>
          <div>
            <p className="whitespace-nowrap font-[600] lg:text-[16px] 2xl:text-[20px]">
              {moc?.title}
            </p>
            <p className="lg:w-[190px] xl:w-[200px] 2xl:w-[220px] lg:text-[10px] 2xl:text-[15px] font-[400] leading-[12px] 2xl:leading-[17px]">
              {moc?.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    onClose,
    navs,
    navContents,
    moreOptionsContents,
    handleNavbarClick,
    activeTab,
    setActiveTab,
  }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
      <div className="fixed top-0 left-0 w-[90%] h-full bg-black bg-opacity-90 z-50 transition-transform duration-300 ease-in-out transform translate-x-0 overflow-y-auto">
        <div className="flex flex-col p-6">
          <button onClick={onClose} className="self-end text-white mb-6">
            Close
          </button>

          <div className="mb-6">
            <h3 className="text-white font-semibold mb-2">Main Menu</h3>
            {navs.map((nav) => (
              <div
                key={nav.title}
                className={`flex items-center text-white py-4 border-b border-gray-700 ${
                  activeTab === nav.title ? "text-red-500" : ""
                }`}
                onClick={() => {
                  setActiveTab(nav.title);
                  navigate(nav.link);
                  onClose();
                }}
              >
                <img
                  src={
                    activeTab === nav.title ? nav.activeIcon : nav.passiveIcon
                  }
                  alt={nav.title}
                  className="w-6 h-6 mr-3"
                />
                {nav.title}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-white font-semibold mb-2">
              Additional Options
            </h3>
            {navContents.map((nc) => (
              <div
                key={nc.title}
                className="text-white py-4 border-b border-gray-700"
                onClick={() => {
                  handleNavbarClick(nc.title, nc.route);
                  onClose();
                }}
              >
                {nc.title}
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">More Options</h3>
            {moreOptionsContents.map((moc) => (
              <div
                key={moc.title}
                className="text-white py-2"
                onClick={() => {
                  navigate(moc.route);
                  onClose();
                }}
              >
                {moc.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:h-screen h-fit bg-home-page-image bg-cover bg-center px-4 sm:px-6 lg:px-[30px] xl:px-[40px] 2xl:px-[50px]">
      {/* Navbar */}
      <nav className="flex items-center justify-between pt-4 lg:pt-[20px] xl:pt-[25px] 2xl:pt-[30px]">
        <div className="flex items-center gap-4 lg:gap-0">
          <img
            src={hamburger}
            alt="menu"
            className="w-6 h-6 lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
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

        <div className="hidden lg:flex text-[#fff] font-[600] items-center lg:gap-[15px] xl:gap-[22px]">
          {navContents?.map((nc: any) => (
            <div
              key={nc?.title}
              className="flex cursor-pointer items-center lg:gap-[8px] xl:gap-[10px]"
              onClick={() => handleNavbarClick(nc?.title, nc?.route)}
            >
              <div className="xl:h-[32px] xl:w-[32px] lg:h-[28px] lg:w-[28px] 2xl:h-[38px] 2xl:w-[38px] flex items-center justify-center rounded-full bg-black">
                {nc?.title?.startsWith("Hi,") ? (
                  <div className="text-white font-[600] lg:text-[12px] 2xl:text-[15px] lg:translate-y-[1px] xl:text-[13px]">
                    {getInitials(
                      `${userData?.firstName} ${userData?.lastName}`
                    )}
                  </div>
                ) : (
                  <img
                    className="xl:h-[14px] xl:w-[14px] lg:w-[13px] lg:h-[13px] 2xl:h-[18px] 2xl:w-[18px]"
                    src={nc?.logo}
                    alt={nc?.title}
                  />
                )}
              </div>
              <div className="flex flex-col">
                <span className="lg:text-[14px] xl:text-[15px] 2xl:text-[18px]">
                  {nc?.title}
                </span>
                <span className="text-[#B9B9B9] lg:-mt-1 lg:text-[11px] xl:text-[12px] 2xl:text-[15px]">
                  {nc?.desc}
                </span>
              </div>
              {showMore && nc?.title?.startsWith("Hi,") && <MoreOptions />}
            </div>
          ))}
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navs={navs}
        navContents={navContents}
        moreOptionsContents={moreOptionsContents}
        handleNavbarClick={handleNavbarClick}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* {isMobileMenuOpen && <MobileMenu />} */}

      {/* Main Content */}
      <div className="mt-20 lg:mt-[120px] 2xl:mt-[200px] px-3">
        {/* Tag */}
        <div className="flex flex-col items-center gap-3 text-center lg:mt-[120px] 2xl:mt-[200px]">
          <p className="text-white text-2xl font-medium lg:text-[22px] xl:text-[24px] 2xl:text-[28px] font-inter md:font-[600]">
            LET US PLAN YOUR PERFECT GATEWAY
          </p>
          <p className="text-[rgba(255,255,255,0.62)] font-lato lg:text-[18px] lg:-mt-1 2xl:text-[20px] font-[400] 2xl:font-[500] text-sm">
            Discover new destinations and plan your dream vacation with our
            user-friendly travel website.
          </p>
        </div>

        {/* Booking Toggle and Component */}
        <div className="lg:hidden">
          {/* Mobile Booking Toggle */}
          <div className="bg-white flex justify-around  rounded-full my-6">
            {bookingContents.map((bc) => (
              <div
                key={bc.title}
                onClick={() => setActiveBooking(bc.title)}
                className={`flex cursor-pointer items-center gap-1 px-2 py-5 rounded-full ${
                  activeBooking === bc.title ? "bg-red-100" : ""
                }`}
              >
                <img
                  className="w-5 h-5"
                  src={activeBooking === bc.title ? bc.logoOn : bc.logoOff}
                  alt={bc.title}
                />
                <p
                  className={`font-[500] text-sm ${
                    activeBooking === bc.title ? "text-[#AB0101]" : "text-black"
                  }`}
                >
                  {bc.title}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Booking Component */}
          <div className="bg-[rgba(0,0,0,0.12)] rounded-lg p-4 backdrop-filter backdrop-blur-sm border-[0.3px] border-gray-600">
            {bookingContents.map(
              (bc, index) =>
                bc.title === activeBooking && <div key={index}>{bc.mobile}</div>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[50%] h-[5px] mt-5 bg-[#F5F5F5] rounded-xl"></div>
          </div>
        </div>

        {/* Desktop Booking Toggle and Component */}
        <div className="hidden lg:block">
          {/* Desktop Booking Toggle */}
          <div className="bg-white flex justify-around lg:py-2 rounded-full lg:mt-[28px] lg:mx-[22px] 2xl:mt-[40px] 2xl:mx-[28px]">
            {bookingContents?.map((bc) => (
              <div
                key={bc?.title}
                onClick={() => setActiveBooking(bc?.title)}
                className="flex cursor-pointer items-center lg:gap-[7px] xl:gap-[12px]"
              >
                <img
                  className="lg:w-[18px] lg:h-[18px] 2xl:h-[20px] 2xl:w-[20px]"
                  src={activeBooking === bc?.title ? bc?.logoOn : bc?.logoOff}
                  alt={bc?.title}
                />
                <p
                  className={`font-[600] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] ${
                    activeBooking === bc?.title
                      ? "text-[#AB0101]"
                      : "text-black"
                  }`}
                >
                  {bc?.title}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Booking Component */}
          <div className="lg:mt-[15px]">
            {bookingContents?.map(
              (bc, index: number) =>
                bc?.title === activeBooking && (
                  <div key={index}>{bc?.component}</div>
                )
            )}
          </div>
        </div>
      </div>

      {/* Hashtag */}
      <div className="md:absolute my-5 py-10 bottom-8 left-4 right-4 lg:static lg:ml-[18px] lg:mt-[15px] 2xl:mt-[25px] flex items-center justify-center md:justify-between">
        <div className="flex gap-2 lg:gap-[9px] items-center">
          <img
            className="w-6 h-12 lg:w-[25px] lg:h-[50px] 2xl:w-[35px] 2xl:h-[60px]"
            src={hash}
            alt="hash"
          />
          <div className="text-white font-[600] text-sm lg:text-base 2xl:text-lg">
            <p>ExploreWithPLACEAA</p>
            <p className="lg:-mt-1">DiscoverWithPLACEAA</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <img src={yjsh} className="lg:w-1/2" alt="yjsh" />
          <img
            className="lg:-translate-x-4 lg:translate-y-4 lg:scale-90"
            src={spiral}
            alt="spiral"
          />
        </div>
      </div>

      {/* Explore - Hidden on mobile */}
      <div className="hidden lg:flex absolute bottom-[15px] left-0 right-0 justify-center items-center lg:gap-[9px]">
        <img
          className="lg:h-[12px] lg:w-[12px] 2xl:h-[15px] 2xl:w-[15px]"
          src={explore}
          alt="explore"
        />
        <p className="lg:text-[15px] 2xl:text-[20px] font-[600] text-white">
          EXPLORE
        </p>
        <img
          className="lg:h-[12px] lg:w-[12px] 2xl:h-[15px] 2xl:w-[15px]"
          src={explore}
          alt="explore"
        />
      </div>
    </div>
  );
};

export default Hero;
