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
    <div className="w-full py-10 px-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 pb-10">
          <div className="flex items-end">
            <div className="h-full w-20 rounded-full">
              <img
                src={seller_Image}
                alt="travel"
                className=" w-full h-[90%] rounded-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[60%] w-20 rounded-full translate-y-16 -translate-x-10">
              <img
                src={seller_Image_two}
                alt="travel"
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-10 w-[40vw]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <h1 className="text-4xl uppercase font-semibold">
                  ADVENTURE TRAVELS
                </h1>
                <div className="w-[40%] flex justify-between text-[#B9B9B9] text-lg">
                  <p>06 Listed Tour Packages</p>
                  <p>|</p>
                  <p>Since 2024</p>
                </div>
              </div>
              <div className="w-[70%]">
                <p className="font-medium">
                  We believe that travel is an opportunity to experience new
                  cultures and learn about the world around us. We are
                  passionate about helping our clients create memories that will
                  last a lifetime.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="text-gray-500 text-lg">Year of experience</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">9</h2>
                <p className="text-gray-500 text-lg">Team Members</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">14</h2>
                <p className="text-gray-500 text-lg">Country Covered</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">2K +</h2>
                <p className="text-gray-500 text-lg">Trip Planned</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[40vw]">
          <div className="flex flex-col items-center justify-center ml-16">
            <p className="font-semibold">Most Popular Tour</p>
            <div className="h-1 w-full bg-red-700 rounded-full" />
          </div>
          <div
            className="flex justify-between items-center"
            style={{
              backgroundImage: `url(${flower_background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "600px",
              height: "500px",
            }}
          >
            <div className="translate-x-36 -translate-y-6">
              <HolidayPackageCard />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={explore_arrow} alt="explore" />
        <img src={explore_text} alt="explore" />
      </div>
    </div>
  );
};

export default SellerHero;
