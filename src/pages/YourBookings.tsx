import React, { useState } from "react";
import { ticketArrow } from "../assets";
import { useNavigate } from "react-router-dom";
import { singleTicketInterface } from "../utility/interfaces";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import About from "../components/home/about/About";
import Footer from "../components/home/footer/Footer";

const YourBookings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  const [tickets, setTickets] = useState<Array<singleTicketInterface> | null>([
    {
      type: "cancelled",
      id: "012345",
      bookedOn: {
        day: "Sunday",
        dayShort: "Sun",
        date: 18,
        month: "February",
        monthShort: "Feb",
        year: 2024,
        minute: 25,
        second: 43,
        am_pm: "PM",
        hour12: 5,
        hour24: 17,
      },
      departure: {
        date_time: "Saturday, 24 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      return: {
        date_time: "Saturday, 31 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      packageDetail: {
        title: "Delightful Shimla and Manali Vacay",
        for: { days: 7, nights: 6 },
      },
      email: "shubh@placeaa.com",
      mobile: "+917600081901",
      sellerDetails: "Adventure Travels",
      costing: { basic: 24360, discount: 3200, tax: 1156, final: 22316 },
      travellers: [
        {
          firstName: "Shubh",
          lastName: "Mangukiya",
          gender: "Male",
          age: 20,
          email: "shubh.placeaa@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
        {
          firstName: "Justin",
          lastName: "Bieber",
          gender: "Male",
          age: 25,
          email: "justin.bieber@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
      ],
    },
    {
      type: "upcoming",
      id: "678901",
      bookedOn: {
        day: "Sunday",
        dayShort: "Sun",
        date: 18,
        month: "February",
        monthShort: "Feb",
        year: 2024,
        minute: 25,
        second: 43,
        am_pm: "PM",
        hour12: 5,
        hour24: 17,
      },
      departure: {
        date_time: "Saturday, 24 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      return: {
        date_time: "Saturday, 31 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      packageDetail: {
        title: "Delightful Shimla and Manali Vacay",
        for: { days: 7, nights: 6 },
      },
      email: "shubh@placeaa.com",
      mobile: "+917600081901",
      sellerDetails: "Adventure Travels",
      costing: { basic: 24360, discount: 3200, tax: 1156, final: 22316 },
      travellers: [
        {
          firstName: "Shubh",
          lastName: "Mangukiya",
          gender: "Male",
          age: 20,
          email: "shubh.placeaa@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
        {
          firstName: "Justin",
          lastName: "Bieber",
          gender: "Male",
          age: 25,
          email: "justin.bieber@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
      ],
    },
    {
      type: "completed",
      id: "234567",
      bookedOn: {
        day: "Sunday",
        dayShort: "Sun",
        date: 18,
        month: "February",
        monthShort: "Feb",
        year: 2024,
        minute: 25,
        second: 43,
        am_pm: "PM",
        hour12: 5,
        hour24: 17,
      },
      departure: {
        date_time: "Saturday, 24 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      return: {
        date_time: "Saturday, 31 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      packageDetail: {
        title: "Delightful Shimla and Manali Vacay",
        for: { days: 7, nights: 6 },
      },
      email: "shubh@placeaa.com",
      mobile: "+917600081901",
      sellerDetails: "Adventure Travels",
      costing: { basic: 24360, discount: 3200, tax: 1156, final: 22316 },
      travellers: [
        {
          firstName: "Shubh",
          lastName: "Mangukiya",
          gender: "Male",
          age: 20,
          email: "shubh.placeaa@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
        {
          firstName: "Justin",
          lastName: "Bieber",
          gender: "Male",
          age: 25,
          email: "justin.bieber@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
      ],
    },
    {
      type: "under_process",
      id: "890123",
      bookedOn: {
        day: "Sunday",
        dayShort: "Sun",
        date: 18,
        month: "February",
        monthShort: "Feb",
        year: 2024,
        minute: 25,
        second: 43,
        am_pm: "PM",
        hour12: 5,
        hour24: 17,
      },
      departure: {
        date_time: "Saturday, 24 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      return: {
        date_time: "Saturday, 31 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      packageDetail: {
        title: "Delightful Shimla and Manali Vacay",
        for: { days: 7, nights: 6 },
      },
      email: "shubh@placeaa.com",
      mobile: "+917600081901",
      sellerDetails: "Adventure Travels",
      costing: { basic: 24360, discount: 3200, tax: 1156, final: 22316 },
      travellers: [
        {
          firstName: "Shubh",
          lastName: "Mangukiya",
          gender: "Male",
          age: 20,
          email: "shubh.placeaa@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
        {
          firstName: "Justin",
          lastName: "Bieber",
          gender: "Male",
          age: 25,
          email: "justin.bieber@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
      ],
    },
    {
      type: "cancelled",
      id: "456789",
      bookedOn: {
        day: "Sunday",
        dayShort: "Sun",
        date: 18,
        month: "February",
        monthShort: "Feb",
        year: 2024,
        minute: 25,
        second: 43,
        am_pm: "PM",
        hour12: 5,
        hour24: 17,
      },
      departure: {
        date_time: "Saturday, 24 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      return: {
        date_time: "Saturday, 31 Aug 2024 at 05:25 PM",
        location: "Ahmedabad Airport",
      },
      packageDetail: {
        title: "Delightful Shimla and Manali Vacay",
        for: { days: 7, nights: 6 },
      },
      email: "shubh@placeaa.com",
      mobile: "+917600081901",
      sellerDetails: "Adventure Travels",
      costing: { basic: 24360, discount: 3200, tax: 1156, final: 22316 },
      travellers: [
        {
          firstName: "Shubh",
          lastName: "Mangukiya",
          gender: "Male",
          age: 20,
          email: "shubh.placeaa@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
        {
          firstName: "Justin",
          lastName: "Bieber",
          gender: "Male",
          age: 25,
          email: "justin.bieber@gmail.com",
          contact: {
            countryCode: "+91",
            number: "7600081901",
          },
        },
      ],
    },
  ]);

  const btns = [
    { title: "Upcoming", tag: "upcoming" },
    { title: "Cancelled", tag: "cancelled" },
    { title: "Completed", tag: "completed" },
    { title: "Under Process", tag: "under_process" },
  ];

  return (
    <>
      {!isAboveMediumScreen && <MobileNavbar />}
      <div className="px-[25px] xl:px-[40px] xl:pb-[40px] py-[20px] xl:pt-[25px] flex md:flex-row flex-col gap-[20px] xl:gap-[33px]">
        <div
          className="rounded-[20px] h-fit p-[15px] xl:p-[30px] border border-[#d9d9d9]"
          style={{ boxShadow: "0px 0px 10px 0px #D9D9D940" }}
        >
          <p className="font-[500] text-center mb-[20px] xl:mb-[35px] font-inter text-[22px] xl:text-[26px] leading-[30px]">
            Your Bookings
          </p>
          <div className="flex font-[600] text-[15px] xl:text-[18px] space-y-[6px] xl:space-y-[14px] leading-[22px] flex-col">
            {btns?.map((b) => (
              <button
                key={b?.tag}
                onClick={() => setActiveTab(b?.tag)}
                className={`rounded-[10px] border px-[50px] xl:px-[65px] ${
                  activeTab === b?.tag
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-black py-[5px] xl:py-[8px]`}
              >
                {b?.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-[20px] xl:space-y-[25px] my-10 md:my-0">
          {tickets?.map((t) => {
            return (
              t?.type === activeTab && (
                <div
                  key={t?.id}
                  className="rounded-[20px] relative xl:pl-[25px] px-[15px] xl:pr-[18px] py-[10px] xl:pt-[6px] xl:pb-[22px] border border-[#d9d9d9]"
                  style={{ boxShadow: "0px 0px 10px 0px #D9D9D940" }}
                >
                  <p className="absolute top-0 left-0 bg-[#AB0101] text-white rounded-tl-[10px] font-[600] text-[13px] xl:text-[15px] leading-[22.63px] px-[22px] xl:px-[26px] py-[3px] xl:py-[4px]">
                    Ticket Id : {t?.id}
                  </p>
                  <div className="flex md:flex-row flex-col md:items-center items-end md:gap-2 xl:gap-3 font-[400] text-[13px] xl:text-[15px] leading-[20px] justify-end">
                    <p>
                      Booking Timestamp :
                      {isAboveMediumScreen && (
                        <>
                          {t?.bookedOn?.date}/{t?.bookedOn?.monthShort}/
                          {t?.bookedOn?.year}
                        </>
                      )}
                    </p>
                    <p>
                      {!isAboveMediumScreen && (
                        <>
                          {t?.bookedOn?.date}/{t?.bookedOn?.monthShort}/
                          {t?.bookedOn?.year}
                        </>
                      )}
                      {"  "}
                      {t?.bookedOn?.hour12}:{t?.bookedOn?.minute}:
                      {t?.bookedOn?.second} {t?.bookedOn?.am_pm}
                    </p>
                  </div>
                  <div className="mt-[15px] xl:mt-[22px] gap-3 flex md:flex-row flex-col md:items-center justify-between">
                    <div className="flex md:flex-row flex-col md:items-center md:gap-[10px] xl:gap-[18px]">
                      <p className="font-[600] text-[18px] xl:text-[22px] leading-[28px]">
                        {t?.packageDetail?.title}
                      </p>
                      <p className="w-fit border border-black rounded-[5px] bg-black text-white font-inter font-[600] text-[12px] xl:text-[14px] tracking-[5%] leading-[18px] xl:px-[7px] px-[5px] py-[1px] xl:py-[2px]">
                        {t?.packageDetail?.for?.nights}N/
                        {t?.packageDetail?.for?.days}D
                      </p>
                    </div>
                    <p className="border w-fit border-black font-[600] text-[15px] xl:text-[18px] leading-[22px] px-[20px] xl:px-[35px] py-[3px] xl:py-[4px] rounded-full">
                      Holiday Package
                    </p>
                  </div>
                  <div className="flex md:flex-row flex-col mt-[20px] xl:mt-[23px] md:items-end gap-3 justify-between">
                    <div className="flex bg-[#D9D9D9] rounded-[10px] items-center">
                      <div className="bg-[#AB0101] text-white px-[10px] xl:px-[11px] py-[2px] xl:py-[4px] flex flex-col rounded-l-[10px]">
                        <p className="font-[600] text-[18px] xl:text-[22px] leading-[25px]">
                          {t?.bookedOn?.date}
                        </p>
                        <p className="font-[400] text-[14px] xl:text-[15px] leading-[15px] xl:leading-[20px]">
                          {t?.bookedOn?.dayShort}
                        </p>
                      </div>
                      <p className="font-[600] text-[16px] xl:text-[18px] leading-[22px] px-[10px] xl:px-[16px]">
                        {t?.bookedOn?.month}
                      </p>
                    </div>
                    <div
                      onClick={() =>
                        navigate(`/bookings/${t?.id}`, {
                          state: { ticket_data: t },
                        })
                      }
                      className="flex cursor-pointer items-center gap-[1px] xl:gap-[8px]"
                    >
                      <p className="text-[#0034EA] font-[600] text-[15px] xl:text-[18px] leading-[22px]">
                        View Booking Details
                      </p>
                      <img
                        src={ticketArrow}
                        alt="ticket arrow"
                        className="scale-90"
                      />
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default YourBookings;
