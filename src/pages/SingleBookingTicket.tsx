import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { singleTicketInterface } from "../utility/interfaces";
import { backBtn, emailpng, phone } from "../assets";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import About from "../components/home/about/About";
import Footer from "../components/home/footer/Footer";

const SingleBookingTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  const [data, setData] = useState<singleTicketInterface | null>(null);

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
    setData(location?.state?.ticket_data);
  }, [location]);

  return (
    <>
      {!isAboveMediumScreen && <MobileNavbar />}

      <div className="px-[25px] xl:px-[40px] md:mt-[18px] my-[20px] xl:mt-[24px]">
        <img
          onClick={() => navigate(-1)}
          className="xl:h-[30px] xl:w-[30px] h-[25px] w-[25px] cursor-pointer"
          src={backBtn}
          alt=""
        />

        <div className="flex md:flex-row flex-col gap-[20px] xl:gap-[25px]">
          <div className="flex-1 mt-[17px]">
            <div className="flex md:flex-row flex-col md:items-center justify-between">
              <div className="flex items-center gap-[10px] xl:gap-[14px]">
                <p className="font-[400] text-[18px] xl:text-[20px] leading-[30.17px]">
                  Ticket Id : <span className="font-[600]">{data?.id}</span>
                </p>
                <p className="font-[600] text-[14px] xl:text-[16px] leading-[20px] rounded-[7px] px-[10px] xl:px-[16.43px] py-[2px] xl:py-[4px] capitalize text-white bg-[#ab0101]">
                  {data?.type}
                </p>
              </div>
              <p className="font-[400] text-[13px] xl:text-[14px] leading-[20px]">
                Booked on {data?.bookedOn?.day}, {data?.bookedOn?.date}{" "}
                {data?.bookedOn?.monthShort} {data?.bookedOn?.year} at{" "}
                {data?.bookedOn?.hour12}:{data?.bookedOn?.minute}{" "}
                {data?.bookedOn?.am_pm}
              </p>
            </div>
            <div className="bg-black xl:px-[35px] px-[25px] py-[18px] xl:py-[22px] text-white mt-[18px] xl:mt-[22px] rounded-[20px]">
              <div className="flex md:flex-row flex-col  md:items-center justify-between pb-[15px] xl:pb-[20px] border-b-2 border-b-white font-[400]">
                <p className="text-[18px] xl:text-[22px] leading-[30px]">
                  {data?.packageDetail?.title}
                </p>
                <p className="text-[14px] xl:text-[18px] leading-[25px]">
                  {data?.packageDetail?.for?.nights} Night /{" "}
                  {data?.packageDetail?.for?.days} Days
                </p>
              </div>
              <div className="mt-[18px] xl:mt-[22px] flex md:flex-row flex-col md:items-center gap-3 justify-between">
                <div className="flex flex-col">
                  <p className="font-[600] rounded-[10px] max-w-fit text-[12px] xl:text-[14px] leading-[20px] bg-[#AB0101] px-[10px] xl:px-[12px] py-[2px] xl:py-[3px]">
                    Departure Time & Place
                  </p>
                  <p className="font-[400] text-[16px] xl:text-[18px] leading-[25px] mt-[6px] xl:mt-[10px] mb-0 xl:mb-[6px]">
                    {data?.departure?.date_time}
                  </p>
                  <p className="font-[600] text-[20px] xl:text-[24px] leading-[35px]">
                    {data?.departure?.location}
                  </p>
                </div>
                <div className="flex flex-col md:items-end">
                  <p className="font-[600] rounded-[10px] max-w-fit text-[12px] xl:text-[14px] leading-[20px] bg-[#AB0101] px-[10px] xl:px-[12px] py-[2px] xl:py-[3px]">
                    Return Time & Place
                  </p>
                  <p className="font-[400] text-[16px] xl:text-[18px] leading-[25px] mt-[6px] xl:mt-[10px] mb-0 xl:mb-[6px]">
                    {data?.departure?.date_time}
                  </p>
                  <p className="font-[600] text-[20px] xl:text-[24px] leading-[35px]">
                    {data?.departure?.location}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-[18px] xl:mt-[30px] font-[600] text-[20px] xl:text-[24px] leading-[35px]">
              Ticket details will be sent to
            </p>
            <div className="flex items-center gap-[8px] xl:gap-[14px] mt-[5px] xl:mt-[18px]">
              <img src={emailpng} alt="" className="scale-90" />
              <p className="text-[15px] xl:text-[18px] font-[400] leading-[25px]">
                {data?.email}
              </p>
            </div>
            <div className="flex items-center gap-[8px] xl:gap-[12px] mt-[5px] xl:mt-[18px]">
              <img src={phone} alt="" className="scale-90" />
              <p className="text-[15px] xl:text-[18px] font-[400] leading-[25px] tracking-[5%]">
                {data?.mobile}
              </p>
            </div>
            <div className="xl:pt-[30px] py-[20px] xl:pb-[35px] border-t border-b border-t-[#D9D9D9] border-b-[#D9D9D9] mt-[20px] xl:mt-[30px]">
              <p className="font-[600] mb-[18px] xl:mb-[21px] text-[20px] xl:text-[24px] leading-[35px]">
                Travellers
              </p>
              <div className="space-y-[8px] xl:space-y-[12px]">
                {data?.travellers?.map((dt) => (
                  <div
                    className="flex md:flex-row flex-col font-[400] text-[12px] xl:text-[16px] leading-[22px] md:items-center justify-between"
                    key={dt?.email}
                  >
                    <div className="flex items-center gap-1">
                      <p className="font-[600] border border-black rounded-full xl:px-[6px] xl:py-[5px] text-[12px] px-[5px] py-[2px] xl:text-[15px] xl:leading-[22px]">
                        {getInitials(`${dt?.firstName} ${dt?.lastName}`)}
                      </p>
                      <p>
                        {dt?.firstName} {dt?.lastName}
                      </p>
                      <p>
                        ( {dt?.gender}, {dt?.age} Years )
                      </p>
                    </div>
                    <p>
                      {dt?.contact?.countryCode} {dt?.contact?.number}
                    </p>
                    <p>{dt?.email}</p>
                    <p className="text-[14px] xl:text-[16px] leading-[25px] font-[700] text-[#082485]">
                      View Passport Details
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex md:flex-row flex-col my-[20px] xl:my-[32px] md:items-center justify-between font-[600] text-[16px] xl:text-[18px] leading-[25px]">
              <p>
                Sellers Details :{" "}
                <span className="text-[#AB0101]">{data?.sellerDetails}</span>
              </p>
              <p className="text-[#082485] cursor-pointer">
                View cancellation policy & Terms
              </p>
            </div>
          </div>
          <div className="h-fit sticky top-5">
            <div
              className="rounded-[20px] h-fit xl:p-[25px] p-[15px] border border-[#d9d9d9]"
              style={{ boxShadow: "0px 0px 10px 0px #D9D9D940" }}
            >
              <div className="flex items-center gap-1 xl:gap-2">
                <p className="font-[600] text-[18px] xl:text-[22px] leading-[25px]">
                  Fare Breakup
                </p>
                <p className="font-[600] text-[12px] xl:text-[14px] leading-[18px]">
                  ( {data?.travellers?.length}{" "}
                  {data && data?.travellers?.length > 1
                    ? "Travellers"
                    : "Traveller"}{" "}
                  )
                </p>
              </div>
              <div className="flex items-center text-[15px] xl:text-[18px] leading-[22px] justify-between mt-[10px] xl:mt-[15px]">
                <p className="font-[400]">Total Basic Cost</p>
                <p className="font-[600]">₹{data?.costing?.basic}</p>
              </div>
              <div className="flex items-center text-[15px] xl:text-[18px] leading-[22px] justify-between mt-[4px] xl:mt-[8px]">
                <p className="font-[400]">Discount or coupons</p>
                <p className="font-[600]">-₹{data?.costing?.discount}</p>
              </div>
              <div className="flex items-center text-[15px] xl:text-[18px] leading-[22px] justify-between mt-[4px] xl:mt-[8px]">
                <p className="font-[400]">Taxes & Fees</p>
                <p className="font-[600]">+₹{data?.costing?.tax}</p>
              </div>
              <div className="flex font-[600] items-center text-[15px] xl:text-[18px] leading-[22px] justify-between pt-[11px] xl:pt-[14px] xl:mt-[30px] mt-[22px] border-t border-t-[#B9B9B9]">
                <p>Total Amount Paid</p>
                <p className="text-[#AB0101]">+₹{data?.costing?.final}</p>
              </div>
            </div>
            <button className="text-[16px] xl:text-[18px] leading-[22px] mb-[6px] xl:mb-[8px] font-[700] rounded-full mt-[15px] xl:mt-[19px] bg-[#ab0101] py-3 xl:py-[8px] text-white w-full">
              Download Receipt
            </button>
            <button className="text-[16px] xl:text-[18px] leading-[22px] font-[700] rounded-full bg-[#ab0101] py-3 xl:py-[8px] text-white w-full">
              Get Full Detailed Brochure of Trip
            </button>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default SingleBookingTicket;
