import { MdOutlineAddCircleOutline } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const AIPlanner = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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

      <div className="flex flex-col gap-3">
        <h1 className="text-[#BFBFBF] ">Travel Dates</h1>
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-white">{formatDate(startDate)}</p>
              <p className="text-[#BFBFBF] text-sm">{getDayName(startDate)}</p>
            </div>
            <p className="text-white">-</p>
            <div className="flex flex-col">
              <p className="text-white">{formatDate(endDate)}</p>
              <p className="text-[#BFBFBF] text-sm">{getDayName(endDate)}</p>
            </div>
            <div></div>
          </div>
          <SlCalender
            fill="#BFBFBF"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          />
        </div>
        {isCalendarOpen && (
          <DatePicker
            selectsRange={true}
            startDate={startDate || undefined}
            endDate={endDate || undefined}
            onChange={(update: [Date | null, Date | null]) => {
              setDateRange(update);
              if (update[1]) setIsCalendarOpen(false);
            }}
            inline
          />
        )}
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

export default AIPlanner;
