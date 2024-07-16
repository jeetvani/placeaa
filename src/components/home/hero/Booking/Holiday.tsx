import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";

const Holiday: React.FC = () => {
  const [departureDate, setDepartureDate] = useState<Date | null>(
    new Date("2024-03-01")
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const getDayName = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between py-3 px-5 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center justify-between border-[1px] border-[#CACACA] px-3 py-2 rounded-xl w-[90%]">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col items-start">
            <p className="text-gray-500 text-sm">From</p>
            <select className="bg-transparent text-black font-semibold outline-none text-xl">
              <option value="ahmedabad">Ahmedabad</option>
            </select>
            <p className="text-gray-500 text-sm">Gujarat, India</p>
          </div>
          <div className="w-[1px] h-14 bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">To</p>
            <select className="bg-transparent text-black font-semibold outline-none text-xl">
              <option value="manali">Manali</option>
            </select>
            <p className="text-gray-500 text-sm">Himachal Pradesh, India</p>
          </div>
        </div>
        <div className="w-[1px] mx-10 h-14 bg-gray-300"></div>
        <div
          className="flex w-[50%] justify-between relative"
          ref={calendarRef}
        >
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">Departure Date</p>
            <div className="flex items-start w-full justify-between">
              <div className="flex flex-col items-start">
                <span className="font-semibold text-xl">
                  {formatDate(departureDate).split(",")[0]}
                </span>
                <span className="text-gray-500 text-sm">
                  {getDayName(departureDate)}
                </span>
              </div>
              <SlCalender
                className="ml-2 mt-1 text-gray-500 cursor-pointer"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              />
            </div>
            {isCalendarOpen && (
              <div className="absolute top-full left-0 mt-2 z-10">
                <DatePicker
                  selected={departureDate}
                  onChange={(date: Date | null) => {
                    setDepartureDate(date);
                    setIsCalendarOpen(false);
                  }}
                  inline
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-[1px] mx-10 h-14 bg-gray-300"></div>
        <div className="flex w-[50%] justify-between">
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">Rooms & Guests</p>
            <div className="flex items-center">
              <select className="bg-transparent text-black font-semibold outline-none text-xl">
                <option value="10000-20000">1 Room, 2 Adults</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[1px] mx-10 h-14 bg-gray-300"></div>
        <div className="flex w-[50%] justify-between">
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">Budget Per Person</p>
            <div className="flex items-center">
              <select className="bg-transparent text-black font-semibold outline-none text-xl">
                <option value="10000-20000">₹10000 - ₹20000</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-red-700  text-white px-10 py-2 rounded-full font-semibold">
        SEARCH
      </button>
    </div>
  );
};

export default Holiday;
