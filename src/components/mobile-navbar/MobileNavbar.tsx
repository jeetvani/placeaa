import { useState } from "react";
import { homelogo, hamburger, testusermob } from "../../assets";

const MobileNavbar = ({ transparentBg = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  return (
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
  );
};

export default MobileNavbar;
