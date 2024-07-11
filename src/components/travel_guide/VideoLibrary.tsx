import Slider from "react-slick";
import "../../css/videoLibrary.css";
import YouTube from "react-youtube";

const VideoLibrary = ({
  data,
}: {
  data: Array<{ title: string; timeInMinutes: string; video: string }>;
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const opts = {
    height: "150",
    width: "100%",
  };

  return (
    <div className="bg-[#D9D9D9] pt-[20px] xl:pt-[30px] pb-[70px] xl:pb-[92px] mt-[20px] xl:mt-[30px]">
      <p className="text-[26px] xl:text-[30px] font-[400] text-center">
        From <span className="text-[#AB0101]">PLACEAA's</span> Video Library
      </p>
      <div
        id="video_library"
        className="slider-container overflow-x-auto mt-[30px] xl:mt-[40px] md:px-[40px] xl:px-[60px] px-3"
      >
        <Slider {...settings}>
          {data?.map((d, index) => (
            <div key={index} className="px-2 md:px-0">
              <div className="flex flex-col gap-[4px] xl:gap-[6px] bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex rounded-t-lg flex-col h-[150px] w-full relative">
                  <YouTube videoId={d?.video} opts={opts} />
                </div>
                <div className="p-4">
                  <p className="text-[15px] xl:text-[16px] font-[600] tracking-[0.85px] xl:leading-snug">
                    {d?.title}
                  </p>
                  <p className="mt-[6px] xl:mt-[10px] text-[13px] xl:text-[14px] font-[600] text-gray-600">
                    {d?.timeInMinutes} min watch
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoLibrary;
