import Slider from "react-slick";
import {
  adventurepackages,
  domesticairpackages,
  internationalpackages,
  maharajaexpress,
} from "../../../assets";

const NextHoliday = () => {
  const places = [
    {
      image: maharajaexpress,
      title: "Maharajas' Express",
      desc: "Redefining Royalty, Luxury and Comfort, Maharajas' express takes",
    },
    {
      image: internationalpackages,
      title: "International Packages",
      desc: "Best deals in International Holiday packages, handpicked by IRCTC",
    },
    {
      image: domesticairpackages,
      title: "Domestic Air Packages",
      desc: "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata",
    },
    {
      image: adventurepackages,
      title: "Adventure Packages",
      desc: "Redefining Royalty, Luxury and Comfort, Maharajas' express takes",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <div className="lg:mt-[30px] xl:mt-[40px] mt-5">
      <p className="text-center lg:text-[25px] xl:text-[26px] 2xl:text-[28px] tracking-[1px] font-inter text-black">
        <span className="font-[600] leading-none">Plan Your Next </span>
        <span className="text-[#AB0101] font-[700] leading-none">Holiday</span>
      </p>
      <div
        id="next_holiday"
        className="slider-container lg:mt-[21px] mt-5 pb-2 overflow-hidden"
      >
        <Slider {...settings}>
          {places?.map((p: any, index: number) => (
            <div
              className="bg-[#181A1C] p-3 flex flex-col gap-5 lg:gap-[20px] xl:gap-[28px] 2xl:gap-[32px] rounded-[30px] lg:px-[8px] 2xl:px-[10px] lg:py-[10px] xl:py-[14px] "
              key={index}
            >
              <div className="relative">
                <div
                  className="absolute rounded-[10px] top-0 left-0 right-0 bottom-0 z-10"
                  style={{ backgroundColor: "rgba(12, 12, 12, 0.10)" }}
                />
                <img
                  src={p?.image}
                  alt={p?.image}
                  className="rounded-[20px] 2xl:w-full lg:scale-90 2xl:scale-95"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="text-center font-inter lg:text-[15px] xl:text-[17px] 2xl:text-[20px] font-[600] tracking-[-0.8px] xl:tracking-normal xl:-mt-3 text-white">
                  {p?.title}
                </p>
                <p className="text-center mt-1 text-sm leading-tight lg:mb-[16px] lg:mt-[10px] 2xl:mt-[12px] 2xl:mb-[20px] 2xl:px-[5px] font-lato lg:text-[12px] xl:text-[13px] 2xl:text-[17px] font-[400] text-[#ADADAD]">
                  {p?.desc}
                </p>
                <div className="flex justify-center">
                  <button className="lg:px-[33px] my-3 md:my-0 text-[12px] px-5 py-2 lg:mb-1 lg:py-[10px] bg-[#2475EE] font-lato text-white rounded-[10px] lg:text-[12px] 2xl:text-[15px] font-[700] leading-[18.483px]">
                    View Packages
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NextHoliday;
