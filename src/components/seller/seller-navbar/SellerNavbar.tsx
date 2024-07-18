import { Dispatch, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  bizbooking,
  bizconnect,
  login,
  downClose,
  help_white,
  p_logo,
  seller_logo,
} from "../../../assets";
import { throttle } from "lodash";

const SellerNavbar = ({
  setLoginPopup,
  isLoggedIn,
}: {
  isLoggedIn: boolean;
  setLoginPopup: Dispatch<boolean>;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navbarRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<null | string>(null);

  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const [showMore, setShowMore] = useState<boolean>(false);

  const [userData, setUserData] = useState<{
    firstName: string;
    lastName: string;
    id: string;
    email: string;
  }>({
    firstName: "Shubh",
    lastName: "Mangukiya",
    id: "asdfasfa",
    email: "shubh_placeaa@gmail.com",
  });

  const navs = [
    {
      title: "Home",
      link: "/",
    },

    {
      title: "Travel Guide",
      link: "/travel-guide",
    },

    {
      title: "Offers",
      link: "/offers",
    },
    {
      title: "Book On Call",
      link: "/book-on-call",
    },
  ];

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

  const navContents = [
    {
      logo: bizbooking,
      title: "BizBooking",
      desc: "Booking For Business",
      route: "/biz-booking",
    },
    {
      logo: login,
      title: isLoggedIn ? `Hi, ${userData?.firstName}` : "Login or",
      desc: !isLoggedIn && "Create Account",
      route: "",
    },
  ];

  const handleClick = (title: string, link: string) => {
    setActiveTab(title);
    navigate(link);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    location.pathname === "/" && setActiveTab(null);
  }, [location]);

  // useEffect(() => {
  //   if (navbarRef.current) {
  //     const navbarHeight = navbarRef.current.clientHeight;

  //     navbarRef.current.style.marginTop =
  //       !showNavbar && location.pathname === "/" ? `-${navbarHeight}px` : "0px";
  //     navbarRef.current.style.display =
  //       !showNavbar && location.pathname === "/" ? `none` : "flex";
  //   }
  // }, [showNavbar, location]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setShowMore(false);
    }, 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarClick = (title: string, route: string) => {
    title === "Login or"
      ? setLoginPopup(true)
      : title?.startsWith("Hi,")
      ? setShowMore(!showMore)
      : navigate(route);
  };

  const MoreOptions = () => (
    <div
      className="rounded-[15px] absolute lg:top-[2.3rem] z-[5000] right-0 xl:-right-2 lg:p-[12px] xl:p-[14px] 2xl:p-[18px] flex flex-col lg:gap-[12px] xl:gap-[14px] bg-white text-black"
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
          <div className="bg-black rounded-full lg:h-[30px] flex items-center justify-center lg:w-[30px] xl:h-[35px] xl:w-[35px] 2xl:h-[45px] 2xl:w-[45px]">
            <img
              className="xl:h-[16px] xl:w-[16px] lg:h-[14px] lg:w-[14px] 2xl:h-[23px] 2xl:w-[23px]"
              src={moc?.image}
              alt="more i"
            />
          </div>
          <div>
            <p className="whitespace-nowrap font-[600] lg:text-[16px] 2xl:text-[20px]">
              {moc?.title}
            </p>
            <p className="lg:w-[190px] xl:w-[200px] 2xl:w-[220px] lg:text-[10px] 2xl:text-[15px] font-[400] leading-[12px] 2xl:leading-[18px]">
              {moc?.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="navbar"
      ref={navbarRef}
      className={` ${showNavbar ? "visible" : ""} ${
        (location.pathname === "/" ||
          location.pathname === "/travel-guide" ||
          location.pathname === "/offers" ||
          location.pathname === "/biz-connect" ||
          location.pathname === "/help" ||
          location.pathname.startsWith("/blog") ||
          location.pathname.startsWith("/faq") ||
          location.pathname === "/biz-booking") &&
        "fixed top-0 navbar"
      } border-b-[2px] border-[#B9B9B9] flex items-center lg:p-[20px] 2xl:p-[23px] justify-between w-screen z-[1000] bg-white`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex lg:h-[25px] xl:h-[30px] 2xl:h-[40px] items-center">
          <img src={p_logo} className="h-full" alt="navlogo" />
          <h1 className="text-4xl font-bold">/</h1>
          <div className="flex h-10 w-10 rounded-full ml-2">
            <img src={seller_logo} className="h-full w-full" alt="navlogo" />
          </div>
        </div>

        <div className="flex items-center gap-10">
          {navs?.map((nc) => (
            <div
              key={nc?.title}
              onClick={() => handleClick(nc?.title, nc?.link)}
              className="flex flex-col items-center gap-[5px] cursor-pointer"
            >
              <span
                className={`text-[13px] xl:text-[14px] 2xl:text-[16px] font-inter font-[500] ${
                  activeTab === nc?.title && "text-[#AB0101]"
                }`}
              >
                {nc?.title}
              </span>
            </div>
          ))}
        </div>
        <nav className="flex items-center justify-between">
          <div className="flex font-inter font-[500] items-center lg:gap-[10px] xl:gap-[15px]">
            {navContents?.map((nc) => (
              <div
                key={nc?.title}
                className="flex relative items-center lg:gap-[5px] xl:gap-[8px] cursor-pointer"
                onClick={() => handleNavbarClick(nc?.title, nc?.route)}
              >
                <div className="lg:h-[25px] lg:w-[25px] 2xl:h-[40px] 2xl:w-[40px] flex items-center justify-center rounded-full bg-black">
                  {nc?.title?.startsWith("Hi,") ? (
                    <div className="text-white font-[600] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] leading-[20.11px]">
                      {getInitials(
                        `${userData?.firstName} ${userData?.lastName}`
                      )}
                    </div>
                  ) : (
                    <img
                      className="lg:h-[10px] lg:w-[10px] 2xl:h-[18px] 2xl:w-[18px]"
                      src={nc?.logo}
                      alt={nc?.title}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${
                      nc?.title === "Login or"
                        ? "lg:text-[12px] xl:text-[13px] 2xl:text-[16px]"
                        : "lg:text-[13px] xl:text-[14px] 2xl:text-[17px]"
                    }`}
                  >
                    {nc?.title}
                  </span>
                  <span
                    className={`text-[#5e5e5e] -mt-0.5 ${
                      nc?.title === "Login or"
                        ? "text-[12px] xl:text-[13px] 2xl:text-[15px] text-black"
                        : "text-[10px] xl:text-[11px] 2xl:text-[13px]"
                    }`}
                  >
                    {nc?.desc}
                  </span>
                </div>
                {nc?.title?.startsWith("Hi,") && (
                  <img
                    className="h-[6px] translate-y-[2px]"
                    src={downClose}
                    alt="down close"
                  />
                )}
                {showMore && nc?.title?.startsWith("Hi,") && <MoreOptions />}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SellerNavbar;
