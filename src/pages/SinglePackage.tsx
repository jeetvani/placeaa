import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { customize, selected, share, tour_image } from "../assets";
import Gallery from "../components/holiday_package/gallery/Gallery";
import BookingCard from "../components/holiday_package/booking_card/BookingCard";
import StickyTripCustomization from "../components/holiday_package/sticky_trip_customization/StickyTripCustomization";
import Overview from "../components/holiday_package/package_components/Overview";
import Schedule from "../components/holiday_package/package_components/Schedule";
import Policies from "../components/holiday_package/package_components/Policies";
import SelectionBox from "../components/holiday_package/selection_box/SelectionBox";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import Footer from "../components/home/footer/Footer";
import AboutTrip from "../components/holiday_package/package_components/AboutTrip";
import About from "../components/home/about/About";

const PLACEAA_SINGLE_HOLIDAY_PACKAGE_DATA: any =
  "PLACEAA_SINGLE_HOLIDAY_PACKAGE_DATA";

const SinglePackage = () => {
  const location = useLocation();
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  const packageData = {
    schedule: [
      {
        day: 1,
        title: "Arrival in Delhi",
        type: "train",
        des: {
          title: "Train from Ahemadabad to Delhi",
          from: {
            time: "11:00 AM",
            date: "Fri, 01 Mar",
            location: "Ahemdabad",
          },
          to: { time: "05:30 AM", date: "Sat, 02 Mar", location: "Delhi" },
          time_diff: "18h 10m",
        },
      },
      {
        day: 2,
        title: "Delhi to Manali",
        type: "bus_car",
        des: {
          title_bus: "Volvo bus from Delhi to Manali",
          title_car: "Car transfer from Manali Volvo Stand to Manali at hotel",
          car_checkpoints: [
            "Check in at hotel",
            "Take rest or explore local market",
          ],
        },
      },
      {
        day: 3,
        title: "Rohtang Pass",
        type: "explore",
        des: {
          img: tour_image,
          title: "Full Day Rohtang pass tour by shift, Etios or similar car",
          facilites: ["3 Seater", "AC", "First Aid"],
        },
      },
      {
        day: 4,
        title: "Rohtang Pass",
        type: "explore",
        des: {
          img: tour_image,
          title: "Full Day Kullu Manikaran tour by shift, Etios or similer car",
          facilites: ["3 Seater", "AC", "First Aid"],
        },
      },
      {
        day: 5,
        title: "Sightseeing in Manali",
        type: "multiple_explore",
        des: {
          imgs: [tour_image, tour_image, tour_image, tour_image, tour_image],
          title: "Full tour by shift, Etios or similar car",
          facilites: ["3 Seater", "AC", "First Aid"],
          locations: [
            "Hadimba Temple",
            "Vashist Kund",
            "Jagatsukh",
            "Tibetian Monastery",
          ],
        },
      },
      {
        day: 6,
        title: "Checkout hotel",
        type: "car_bus",
        des: {
          title_bus: "Volvo bus from Manali to Delhi",
          title_car: "Car transfer from Manali hotel to Volvo Bus Stand",
          car_checkpoints: ["Check out at hotel"],
        },
      },
      {
        day: 7,
        title: "Delhi to Ahemdabad",
        type: "train",
        des: {
          title: "Train from Delhi to Ahemadabad",
          from: {
            time: "09:30 AM",
            date: "Fri, 04 Mar",
            location: "Delhi",
          },
          to: { time: "03:40 AM", date: "Sat, 07 Mar", location: "Ahemadabad" },
          time_diff: "18h 10m",
        },
      },
    ],
  };

  const sections: Array<{ name: string; component: any }> = [
    { name: "Overview of tour", component: <Overview /> },
    { name: "Schedule", component: <Schedule data={packageData?.schedule} /> },
    { name: "About the place", component: <AboutTrip /> },
    { name: "Policies", component: <Policies /> },
  ];

  const [pageData, setPageData] = useState<any>();
  const [selectedSection, setSelectedSection] = useState<string>("Schedule");
  const [selectedCoupon, setSelectedCoupon] = useState<number | null>(1);

  const coupons = [
    {
      id: 1,
      title: "First Time",
      desc: "This offer is valid for first time booking only",
      discount: "1600",
    },
    {
      id: 2,
      title: "First Time",
      desc: "This offer is valid for first time booking only",
      discount: "1600",
    },
  ];

  useEffect(() => {
    if (location?.state?.p) {
      setPageData(location?.state?.p);
      sessionStorage.setItem(
        PLACEAA_SINGLE_HOLIDAY_PACKAGE_DATA,
        JSON.stringify(location?.state?.p)
      );
    } else {
      const sessionData: any = sessionStorage?.getItem(
        PLACEAA_SINGLE_HOLIDAY_PACKAGE_DATA || ""
      );
      setPageData(JSON?.parse(sessionData));
    }
  }, [location?.state]);

  const handleSectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSection(event.target.value);
  };

  return (
    <div>
      {isAboveMediumScreen ? <SelectionBox /> : <MobileNavbar />}
      <StickyTripCustomization />
      <div className="h-auto">
        <div className="hidden md:flex lg:px-[25px] bg-white z-[4841] sticky top-0 lg:py-[23px] justify-between items-center">
          <div>
            <div className="flex items-center lg:gap-[11px] xl:gap-[15px]">
              <p className="lg:text-[22px] xl:text-[26px] 2xl:text-[30px] font-[600]">
                {pageData?.place}
              </p>
              <div className="flex items-center bg-black text-white py-[1.5px] xl:py-[2px] lg:px-[6px] xl:px-[8px] tracking-[0.7px] text-[12px] xl:text-[14px] 2xl:text-[16px] font-[600] rounded-[10px]">
                <p>{pageData?.nights}N</p>
                <p>/</p>
                <p>{pageData?.days}D</p>
              </div>
              <div
                className="flex items-center lg:gap-[2px] xl:gap-[4px] 2xl:gap-[6px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] py-[0.5px] xl:py-[1.6px] rounded-[10px] 2xl:scale-110"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.60)",
                  background: "rgba(0, 0, 0, 0.60)",
                }}
              >
                <img
                  className="h-[7px] w-[10px] 2xl:scale-110"
                  src={customize}
                  alt=""
                />
                <p className="lg:text-[12px] xl:text-[14px] text-white font-[600]">
                  CUSTOMIZABLE
                </p>
              </div>
            </div>
            <p className="text-[13px] xl:text-[14px] font-inter xl:-mt-1 font-[500] tracking-[0.6px]">
              Seller :{" "}
              <span className="text-[#AB0101]">{pageData?.offeredBy}</span>
            </p>
          </div>
          <div className="flex gap-[5px] xl:gap-[9px] items-center">
            <img src={share} alt="" className="h-[15px] xl:h-[18px]" />
            <p className="text-[18px] xl:text-[22px] font-[600] tracking-[1px]">
              Share
            </p>
          </div>
        </div>
        <div className="flex flex-col md:hidden px-5 pt-10 pb-5">
          <p className="text-xl font-semibold">
            Delightful Shimla & Manali Vacay
          </p>
          <div className="flex gap-2 font-medium">
            Seller : <span className="text-[#AB0101]">AdventureTravel</span>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex gap-2 pt-1">
              <div className="flex items-center bg-black text-white py-1 px-3 tracking-[0.7px] text-sm  font-[600] rounded-full">
                <p>{pageData?.nights}N</p>
                <p>/</p>
                <p>{pageData?.days}D</p>
              </div>
              <div
                className="flex items-center gap-1  py-1 rounded-full px-2"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.60)",
                  background: "rgba(0, 0, 0, 0.60)",
                }}
              >
                <img
                  className="h-[7px] w-[10px] 2xl:scale-110"
                  src={customize}
                  alt=""
                />
                <p className="text-sm text-white font-[600]">CUSTOMIZABLE</p>
              </div>
            </div>
            <div className="flex gap-[5px] xl:gap-[9px] items-center">
              <img src={share} alt="" className="h-[15px] xl:h-[18px]" />
              <p className="text-[18px] xl:text-[22px] font-[600] tracking-[1px]">
                Share
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[20px] lg:px-[12px] xl:px-[20px] lg:justify-between 2xl:justify-evenly flex flex-col-reverse md:flex-row-reverse gap-5">
          {isAboveMediumScreen && (
            <div className="bg-white  z-[999999] sticky top-7 h-fit">
              <BookingCard
                prices={pageData?.prices}
                dates={{ from: "1/Mar", to: "7/Mar" }}
                itemId={pageData?.id}
              />
            </div>
          )}
          <div>
            <Gallery images={pageData?.packageImages} />
            {isAboveMediumScreen ? (
              <div
                className={`flex md:sticky px-[25px] z-[4842] top-[90px] xl:top-[100px] bg-white items-center gap-[20px] xl:gap-[40px] mt-[29px] xl:text-[17px] 2xl:text-[20px] font-[600] tracking-[0.8px] border-b border-b-[#D9D9D9] text-[12px]`}
              >
                {sections?.map((s) => (
                  <p
                    onClick={() => setSelectedSection(s?.name)}
                    className={`${
                      s?.name === selectedSection
                        ? "text-[#AB0101] border-b-[3px] border-b-[#ab0101]"
                        : "text-black cursor-pointer"
                    }`}
                    key={s?.name}
                  >
                    {s?.name}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <div>
                  <BookingCard
                    prices={pageData?.prices}
                    dates={{ from: "1/Mar", to: "7/Mar" }}
                    itemId={pageData?.id}
                  />
                </div>
                <div className="w-full flex justify-center items-center px-5 mb-5 mt-10">
                  <select
                    className="w-full px-3 py-3 shadow-lg border-[1px] border-gray-400 rounded-xl outline-none text-[#AB0101] font-medium"
                    value={selectedSection}
                    onChange={handleSectionChange}
                  >
                    {sections?.map((s) => (
                      <option
                        className="text-black"
                        key={s.name}
                        value={s.name}
                      >
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div className="bg-white">
              {sections?.map(
                (s) => s?.name === selectedSection && s?.component
              )}
            </div>
          </div>
        </div>
        {!isAboveMediumScreen && (
          <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center z-50 rounded-tr-2xl rounded-tl-2xl">
            <div className="flex flex-col">
              <p className="text-sm">Grand Total - 2 Adults</p>
              <h2 className="text-2xl font-bold">₹22316</h2>
              <p className="text-xs">(Inclusive of taxes)</p>
            </div>
            <button className="bg-[#AB0101] text-white px-6 py-2 rounded font-bold">
              Book Now
            </button>
          </div>
        )}
        {!isAboveMediumScreen && (
          <div className="mt-[40px] px-5 py-6 mx-5 md:px-0 border-[1px] shadow-lg rounded-xl">
            <p className="text-[16px] xl:text-[17px] font-[600]">
              Coupons & Offers
            </p>
            <div className="flex items-center p-[14px] xl:p-[16px] justify-between font-inter mt-[12px] xl:mt-[14px] border border-[#d9d9d9] rounded-[10px]">
              <p className="text-[12px] xl:text-[14px] font-[400]">
                Have a coupon code ?
              </p>
              <button className="text-[14px] xl:text-[15px] font-[600] text-[#3974CD]">
                Apply
              </button>
            </div>
            <div className="mt-[12px] xl:mt-[15px] flex flex-col gap-[12px] xl:gap-[14px]">
              {coupons?.map((c) => (
                <div
                  key={c?.id}
                  className="border py-[8px] xl:py-[11px] font-inter px-[12px] xl:px-[18px] border-[#26B5A9] gap-[8px] xl:gap-[11px] rounded-[10px] flex items-start"
                  style={{
                    background:
                      selectedCoupon === c?.id
                        ? "linear-gradient(0deg, #D1F8E6 0%, #D1F8E6 100%), #FFF"
                        : "",
                  }}
                >
                  {selectedCoupon === c?.id ? (
                    <img
                      src={selected}
                      className="h-[30px] w-[30px] mt-3"
                      alt="selected"
                    />
                  ) : (
                    <div className="h-[30px] w-[30px] bg-transparent" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] xl:text-[13px] font-[600]">
                        {c?.title}
                      </p>
                      <button
                        onClick={() =>
                          setSelectedCoupon(
                            selectedCoupon === c?.id ? null : c?.id
                          )
                        }
                        className="text-[13px] xl:text-[15px] font-[600] text-[#26b5a9]"
                      >
                        {selectedCoupon === c?.id ? "Remove" : "Add"}
                      </button>
                    </div>
                    <p className="text-[10px] leading-snug font-[500] mb-[5px] text-[#5e5e5e]">
                      {c?.desc}
                    </p>
                    <p className="text-[14px] xl:text-[15px] font-[600]">
                      -₹{c?.discount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mb-[60px]" />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default SinglePackage;
