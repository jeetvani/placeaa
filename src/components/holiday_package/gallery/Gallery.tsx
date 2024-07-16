import React from "react";

const Gallery = ({ images }: { images: Array<any> }) => {
  return (
    <div className="flex md:flex-row flex-col lg:gap-[10px] 2xl:gap-[12px] px-5 md:px-0 gap-3">
      <img
        className="lg:w-[355px] md:h-auto h-28 object-cover xl:w-[460px] rounded-[5px] 2xl:w-[600px]"
        src={images?.length > 0 ? images[0] : ""}
        alt=""
      />
      <img
        className="rounded-[5px] md:h-auto h-28 w-full object-cover lg:w-[150px] xl:w-[195px] 2xl:w-[255px]"
        src={images?.length > 0 ? images[1] : ""}
        alt=""
      />
      <div className="flex flex-row md:flex-col md:gap-0 gap-3 justify-between">
        <img
          className="rounded-[5px] w-[50%] lg:w-[150px] xl:w-[195px] 2xl:w-[255px]"
          src={images?.length > 0 ? images[2] : ""}
          alt=""
        />
        <div className="relative w-full lg:w-[150px] xl:w-[195px] 2xl:w-[255px]">
          <div className="absolute text-[#D9D9D9] flex items-center justify-center font-inter font-[600] text-[22px] xl:text-[25px] top-0 left-0 right-0 bottom-0 z-20 bg-black/70 rounded-[5px]">
            MORE +
          </div>
          <img
            className="rounded-[5px] h-full w-full 2xl:w-[255px]"
            src={images?.length > 0 ? images[3] : ""}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
