import Hero from "../components/home/hero/Hero";
import BankOffers from "../components/home/bank_offers/BankOffers";
import PopularPlaces from "../components/home/popular_places/PopularPlaces";
import HolidayPackage from "../components/home/holiday_package/HolidayPackage";
import BookHotel from "../components/home/book_hotel/BookHotel";
import HelpCenter from "../components/home/help_center/HelpCenter";
import About from "../components/home/about/About";
import Footer from "../components/home/footer/Footer";
import SponsoredAd from "../components/home/ads/SponsoredAd";
import NextHoliday from "../components/home/next_holiday/NextHoliday";
import { popularadds } from "../assets";
import "../css/home.css";
import { Dispatch } from "react";

const Home = ({
  isLoggedIn,
  setLoginPopup,
}: {
  isLoggedIn: boolean;
  setLoginPopup: Dispatch<boolean>;
}) => {
  return (
    <div>
      <Hero isLoggedIn={isLoggedIn} setLoginPopup={setLoginPopup} />
      <BankOffers />
      <NextHoliday />
      <div className="mt-[70px] md:mx-0 mx-3">
        <SponsoredAd ad={popularadds} />
      </div>
      {/* <BookHotel /> */}
      <div className="md:mt-[60px] mt-[40px]" />
      <PopularPlaces />
      <HelpCenter />
      <HolidayPackage />
      <div className="mt-[70px] md:mx-0 mx-3">
        <SponsoredAd ad={popularadds} />
      </div>
      <div className="mb-[60px]" />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
