import Slider from "react-slick";
import { barcelona, bali, dubai, greece, rome } from "../../../assets";

const PopularPlaces = () => {
  const places = [
    { image: barcelona, title: "Barcelona" },
    { image: bali, title: "Bali" },
    { image: dubai, title: "Dubai" },
    { image: greece, title: "Greece" },
    { image: rome, title: "Rome" },
    { image: barcelona, title: "Barcelona" },
    { image: bali, title: "Bali" },
    { image: dubai, title: "Dubai" },
    { image: greece, title: "Greece" },
    { image: rome, title: "Rome" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <div className="lg:mt-[30px] xl:mt-[50px] lg:mx-[62px]">
      <p className="text-center font-inter lg:text-[25px] xl:text-[28px] 2xl:text-[32px] tracking-[1.4px] text-black">
        <span className="text-[#AB0101] font-[600]">Most popular </span>
        <span className="font-[500]">places for </span>
        <span className="font-[700]">Travel</span>
      </p>
      <div
        id="popular_places"
        className="slider-container lg:mt-[20px] xl:mt-[29px] mt-[20px] overflow-x-auto"
      >
        <Slider {...settings}>
          {places?.map((p: any, index: number) => (
            <div
              className="flex rounded-[25px] h-[270px] flex-col lg:h-[250px] xl:h-[275px] 2xl:h-[325px] relative"
              key={index}
            >
              <div
                className="absolute rounded-[25px] h-full w-full z-10"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
              />
              <img
                src={p?.image}
                alt={p?.title}
                className="h-full w-full rounded-[25px]"
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute z-20 bottom-[20px] right-[12.05px] left-[14.5px] text-white flex items-end justify-between"
                style={{ width: "-webkit-fill-available" }}
              >
                <span className="font-[600] text-4xl tracking-[3.2px] lg:text-[40px] xl:text-[64px] 2xl:text-[70px] lg:max-h-[40px] xl:max-h-[64px] 2xl:max-h-[70px]">
                  {index + 1}
                </span>
                <span className="lg:text-[22px] text-3xl xl:text-[28px] 2xl:text-[32px] lg:max-h-[22px] xl:max-h-[28px] 2xl:max-h-[32px] uppercase font-[700] tracking-[1.4px]">
                  {p?.title}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularPlaces;
