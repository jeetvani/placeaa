import { useState } from "react";
import {
  homelogo,
  hamburger,
  testusermob,
  bizconnect,
  bizbooking,
  help_white,
  ai_white,
  holiday_white,
  travel_guide_white,
  offer_white,
} from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  title: string;
  desc: string;
  icon?: string;
  route?: string;
  logo?: any;
}

const MobileNavbar = ({ transparentBg = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navs = [
    {
      activeIcon: ai_white,
      passiveIcon: ai_white,
      title: "AI Trip Planner",
      link: "aiplanner",
    },
    {
      activeIcon: holiday_white,
      passiveIcon: holiday_white,
      title: "Holidays",
      link: "holidays",
    },
    {
      activeIcon: travel_guide_white,
      passiveIcon: travel_guide_white,
      title: "Travel Guide",
      link: "travel-guide",
    },
    {
      activeIcon: offer_white,
      passiveIcon: offer_white,
      title: "Offers",
      link: "offers",
    },
  ];

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

  const navbarBackground = transparentBg
    ? "bg-transparent px-1"
    : "bg-home-page-image bg-cover bg-center px-3";

  const MobileMenu = () => {
    if (!isMobileMenuOpen) return null;

    const allMenuItems: MenuItem[] = [
      {
        title: "My Booking",
        desc: "View booking details, Modify Bookings, Check booking status",
        icon: bizconnect,
        route: "/bookings",
      },
      {
        title: "BizConnect",
        desc: "View booking details, Modify Bookings, Check booking status",
        icon: bizbooking,
        route: "/bookings",
      },
      {
        title: "BizBooking",
        desc: "View booking details, Modify Bookings, Check booking status",
        icon: bizbooking,
        route: "/bookings",
      },
      {
        title: "Help & Support",
        desc: "View booking details, Modify Bookings, Check booking status",
        icon: help_white,
        route: "/bookings",
      },
    ];

    return (
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-screen h-full bg-white z-[999999] overflow-y-auto p-6"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-1 right-2 text-black text-2xl"
            >
              &times;
            </button>

            <div className="flex flex-col space-y-4">
              <div
                className="flex items-center bg-[#AB0101] bg-opacity-5 rounded-lg p-3"
                onClick={() => {
                  navigate("/login");
                  setIsMobileMenuOpen(false);
                }}
              >
                <div className="bg-black rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Login or Create Account</h3>
                  <p className="text-sm text-gray-600">
                    Manage your profile, traveller details, login details
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {navs.map((nav) => (
                  <div
                    key={nav.title}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                      location.pathname === `/${nav.link}`
                        ? "bg-[#AB0101] text-white"
                        : "bg-black text-white"
                    }`}
                    onClick={() => {
                      navigate(`/${nav.link}`);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <img
                      src={
                        location.pathname === `/${nav.link}`
                          ? nav.activeIcon
                          : nav.passiveIcon
                      }
                      alt={nav.title}
                      className="w-6 h-6 mb-2"
                    />
                    <span className="text-sm">{nav.title}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {allMenuItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center rounded-lg p-3 gap-3 border-[1px] border-[#B9B9B9]"
                    onClick={() => {
                      if (item.route) {
                        navigate(item.route);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="bg-black rounded-full flex items-center justify-center w-14 h-10">
                      <img src={item.icon} alt="hash" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center text-sm text-red-600 mt-4">
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                ,{" "}
                <a href="#" className="underline">
                  T&Cs
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  User Agreement
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between py-5 ${navbarBackground}`}
      >
        {isSearchOpen ? (
          <div className="flex items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => setIsSearchOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/20 backdrop-blur-sm text-white placeholder-white/70 rounded-full px-4 py-1 outline-none flex-grow"
              autoFocus
            />
          </div>
        ) : (
          <>
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
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <img
                src={userData.profile}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </>
        )}
      </nav>
      <MobileMenu />
    </>
  );
};

export default MobileNavbar;
