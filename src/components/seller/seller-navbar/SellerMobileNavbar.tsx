import { useState } from "react";
import { hamburger, p_white_logo, seller_logo } from "../../../assets";

const SellerMobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center bg-home-page-image bg-cover bg-center justify-between py-8 px-5">
      <div className="flex items-center gap-4 lg:gap-0">
        <div className="flex gap-1 lg:h-[25px] xl:h-[30px] 2xl:h-[40px] items-center">
          <img src={p_white_logo} className="h-full" alt="navlogo" />
          <h1 className="text-4xl font-bold text-white">/</h1>
          <div className="flex h-10 w-10 rounded-full">
            <img src={seller_logo} className="h-full w-full" alt="navlogo" />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <img
          src={hamburger}
          alt="menu"
          className="w-6 h-6 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
    </nav>
  );
};

export default SellerMobileNavbar;
