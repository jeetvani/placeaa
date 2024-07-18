import Footer from "../components/home/footer/Footer";
import SellerNavbar from "../components/seller/seller-navbar/SellerNavbar";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SellerHero from "../components/seller/seller-hero/SellerHero";
import SellerPackages from "../components/seller/seller-packages/SellerPackages";
import SellerMobileNavbar from "../components/seller/seller-navbar/SellerMobileNavbar";
import About from "../components/home/about/About";

const Seller = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });
  return (
    <>
      {isAboveMediumScreen ? (
        <SellerNavbar setLoginPopup={setLoginPopup} isLoggedIn={isLoggedIn} />
      ) : (
        <SellerMobileNavbar />
      )}
      <SellerHero />
      <SellerPackages />
      {!isAboveMediumScreen && <About />}
      <Footer />
    </>
  );
};

export default Seller;
