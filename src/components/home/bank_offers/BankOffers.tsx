import { icici } from "../../../assets";
import Slider from "react-slick";

const BankOffers = () => {
  const offers = [
    {
      image: icici,
      offer: "ICICI Bank offer ₹150 off",
      on: "on domestic flights",
    },
    {
      image: icici,
      offer: "ICICI Bank offer ₹250 off",
      on: "on domestic flights",
    },
    {
      image: icici,
      offer: "ICICI Bank offer ₹350 off",
      on: "on domestic flights",
    },
    {
      image: icici,
      offer: "ICICI Bank offer ₹450 off",
      on: "on domestic flights",
    },
    {
      image: icici,
      offer: "ICICI Bank offer ₹550 off",
      on: "on domestic flights",
    },
    {
      image: icici,
      offer: "ICICI Bank offer ₹650 off",
      on: "on domestic flights",
    },
    {
      image: icici,
      offer: "ICICI Bank offer ₹750 off",
      on: "on domestic flights",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    cssEase: "linear",
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <div
      id="bank_offers"
      className="slider-container mt-[40px] xl:mt-[40px] lg:mx-[39px] overflow-x-auto md:overflow-x-visible"
    >
      <Slider {...settings}>
        {offers?.map((o: any, index: number) => (
          <div
            key={index}
            className="flex border justify-center items-center rounded-full border-[#B9B9B9] py-2 md:py-0"
          >
            <img
              className="h-[45px] w-[45px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px] rounded-full"
              src={o?.image}
              alt="logo"
            />
            <div className="max-w-fit flex flex-col">
              <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[20px] text-black tracking-[0.6px] font-[600] text-sm">
                {o?.offer}
              </p>
              <p className="lg:text-[12px] xl:text-[13px] 2xl:text-[17px] text-[#5E5E5E] lg:-mt-1 tracking-[0.4px] font-[500] text-sm">
                {o?.on}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BankOffers;
