import {
  explore_arrow,
  explore_text,
  flower_background,
  seller_Image,
  seller_Image_two,
} from "../../../assets";
import HolidayPackageCard from "../components/HolidayPackageCard";

const SellerHero = () => {
  return (
    <div className="w-full py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex gap-5 pb-10">
          <div className="flex items-end w-[30%] md:w-auto">
            <div className="h-full md:w-20 w-24 rounded-full">
              <img
                src={seller_Image}
                alt="travel"
                className="w-full md:h-[90%] h-[80%] rounded-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="md:h-[60%] h-[50%] w-24 md:w-20 rounded-full -translate-x-5 md:translate-y-16 md:-translate-x-10">
              <img
                src={seller_Image_two}
                alt="travel"
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-10 w-full md:w-[40vw]">
            <div className="flex flex-col gap-2 md:gap-5">
              <div className="flex flex-col">
                <h1 className="md:text-4xl text-xl uppercase font-semibold">
                  ADVENTURE TRAVELS
                </h1>
                <div className="md:w-[45%] flex gap-3 md:justify-between text-[#B9B9B9] md:text-lg text-[10px]">
                  <p>06 Listed Tour Packages</p>
                  <p>|</p>
                  <p>Since 2024</p>
                </div>
              </div>
              <div className="md:w-[70%]">
                <p className="font-medium md:text-lg text-xs">
                  We believe that travel is an opportunity to experience new
                  cultures and learn about the world around us. We are
                  passionate about helping our clients create memories that will
                  last a lifetime.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-8 mt-4">
              <div>
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="text-gray-500 md:text-lg text-xs">
                  Year of experience
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">9</h2>
                <p className="text-gray-500 md:text-lg text-xs">Team Members</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">14</h2>
                <p className="text-gray-500 md:text-lg text-xs">
                  Country Covered
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">2K +</h2>
                <p className="text-gray-500 md:text-lg text-xs">Trip Planned</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:gap-0 md:w-[40vw]">
          <div className="flex flex-col items-center justify-center gap-1 md:gap-0 md:ml-16">
            <p className="font-semibold">Most Popular Tour</p>
            <div className="h-1 w-full bg-red-700 rounded-full" />
          </div>
          <div
            className="flex justify-between items-center md:w-[600px] md:h-[500px] md:bg-[image:var(--bg-image)] bg-none bg-cover bg-center"
            style={{
              ["--bg-image" as string]: `url(${flower_background})`,
            }}
          >
            <div className="md:translate-x-36 md:-translate-y-6">
              <HolidayPackageCard />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full md:flex justify-center items-center">
        <img src={explore_arrow} alt="explore" />
        <img src={explore_text} alt="explore" />
      </div>
    </div>
  );
};

export default SellerHero;
