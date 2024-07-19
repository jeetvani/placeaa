import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import HolidayPackage from "./pages/HolidayPackage";
import Navbar from "./components/navbar/Navbar";
import SinglePackage from "./pages/SinglePackage";
import TravelGuide from "./pages/TravelGuide";
import Checkout from "./components/holiday_package/checkout/Checkout";
import Blog from "./pages/Blog";
import Offers from "./pages/Offers";
import AI from "./pages/AI";
import Help from "./pages/Help";
import BizConnect from "./pages/BizConnect";
import BizBooking from "./pages/BizBooking";
import Profile from "./pages/Profile";
import { useState } from "react";
import LoginSignup from "./components/login_signup/LoginSignup";
import YourBookings from "./pages/YourBookings";
import SingleBookingTicket from "./pages/SingleBookingTicket";
import SingleFAQ from "./pages/SingleFAQ";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "./components/common/ScrollToTop";
import Seller from "./pages/Seller";
import Login from "./pages/Login";

interface NavbarWrapperProps {
  isLoggedIn: boolean;
  setLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
  isAboveMediumScreen: boolean;
}

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({
  isLoggedIn,
  setLoginPopup,
  isAboveMediumScreen,
}) => {
  const location = useLocation();
  const isSellerPage = location.pathname.startsWith("/seller/");
  const isLoginPage = location.pathname === "/login";

  if ((isAboveMediumScreen && !isSellerPage) || !isLoginPage) {
    return <Navbar isLoggedIn={isLoggedIn} setLoginPopup={setLoginPopup} />;
  }
  return null;
};

const App = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      <Router>
        <ScrollToTop />
        {loginPopup && (
          <LoginSignup
            setLoginPopup={setLoginPopup}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        <NavbarWrapper
          isLoggedIn={isLoggedIn}
          setLoginPopup={setLoginPopup}
          isAboveMediumScreen={isAboveMediumScreen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home isLoggedIn={isLoggedIn} setLoginPopup={setLoginPopup} />
            }
          />
          <Route path="/holidays" element={<HolidayPackage />} />
          <Route path="/holidays/:packageId" element={<SinglePackage />} />
          <Route path="/checkout/:packageId" element={<Checkout />} />
          <Route path="/bookings" element={<YourBookings />} />
          <Route path="/bookings/:ticketId" element={<SingleBookingTicket />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq/:faqid" element={<SingleFAQ />} />
          <Route path="/aiplanner" element={<AI />} />
          <Route path="/biz-connect" element={<BizConnect />} />
          <Route path="/biz-booking" element={<BizBooking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/seller/:sellerId" element={<Seller />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
