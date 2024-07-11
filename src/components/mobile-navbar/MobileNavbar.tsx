import { useState } from "react";
import { homelogo, hamburger, testusermob } from "../../assets";

const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  return (
    <nav className="flex items-center bg-home-page-image bg-cover bg-center justify-between py-5 px-3">
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
  );
};

export default MobileNavbar;
