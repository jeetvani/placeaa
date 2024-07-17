import { MdOutlineAddCircleOutline } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";

const HolidayMobile = () => {
  const [departureDate, setDepartureDate] = useState<Date | null>(
    new Date("2024-03-01")
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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

  const getDayName = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  return (
    <div className="flex flex-col gap-5 py-3 px-5 w-full">
      <div className="flex flex-col gap-5  w-full">
        <div className="flex w-full justify-between items-center">
          <p className="text-[#BFBFBF]">From</p>
          <div className="flex flex-col items-start w-[60%]">
            <select
              id="countries"
              className="bg-transparent text-white justify-between outline-none text-xl"
            >
              <option value="ahmedabad" selected>
                Ahmedabad
              </option>
              <option value="US" className="bg-transparent">
                United States
              </option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <p className="text-[#BFBFBF] ml-1 text-sm">Gujarat, India</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="text-[#BFBFBF]">To</p>
          <div className="flex flex-col items-start w-[60%]">
            <select
              id="countries"
              className="bg-transparent text-white justify-between outline-none text-xl"
            >
              <option value="ahmedabad" selected>
                Manali
              </option>
              <option value="US" className="bg-transparent">
                United States
              </option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <p className="text-[#BFBFBF] ml-1 text-sm">
              Himachal Pradesh, India
            </p>
          </div>
        </div>
        <div className="w-full flex text-[#BFBFBF] cursor-pointer gap-1 items-center justify-center text-sm">
          <MdOutlineAddCircleOutline />
          Add More Destinations
          <p></p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#BFBFBF] opacity-30"></div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 relative w-[55%]" ref={calendarRef}>
          <h1 className="text-[#BFBFBF] ">Departure Dates</h1>
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="flex flex-col items-start">
                <span className="font-semibold text-white text-xl">
                  {formatDate(departureDate).split(",")[0]}
                </span>
                <span className="text-white text-sm">
                  {getDayName(departureDate)}
                </span>
              </div>
            </div>
            <SlCalender
              fill="#BFBFBF"
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
        <div className="w-[1px] h-24 bg-[#BFBFBF] opacity-30 mx-5"></div>

        <div className="flex flex-col gap-1 w-[45%]">
          <h1 className="text-[#BFBFBF]">Rooms & Guests</h1>
          <div className="w-full">
            <select
              id="rooms"
              className="bg-transparent text-white justify-between outline-none"
            >
              <option value="ahmedabad" selected>
                1 Room, 2 Adults
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#BFBFBF] opacity-30"></div>

      <div className="flex flex-col gap-3">
        <h1 className="text-[#BFBFBF]">Budget Per Person</h1>
        <div className="w-full">
          <select
            id="countries"
            className="bg-transparent text-white justify-between outline-none text-xl"
          >
            <option value="ahmedabad" selected>
              ₹10000 - ₹20000
            </option>
            <option value="US" className="bg-transparent">
              United States
            </option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>

      <button className="w-full px-5 py-3 bg-[#AB0101] text-white font-medium rounded-xl">
        CREATE TRIP
      </button>
    </div>
  );
};

export default HolidayMobile;
