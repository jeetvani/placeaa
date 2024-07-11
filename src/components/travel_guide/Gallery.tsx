import React from "react";
import { useNavigate } from "react-router-dom";

const Gallery = ({
  data,
}: {
  data: {
    top: Array<{
      type: string;
      title: string;
      desc: string;
      img: string;
      id: number | string;
    }>;
    banner: { type: string; img: string };
  };
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex overflow-x-auto md:overflow-hidden items-center gap-[15px] xl:gap-[25px] px-5 md:px-0">
        {data?.top?.map((dt, index) => (
          <div
            className="cursor-pointer"
            onClick={() => navigate(`/blog/${dt?.id}`, { state: { data: dt } })}
            key={dt?.id}
          >
            <div className="relative">
              <img
                className="w-[300px] xl:w-[360px] rounded-[15px]"
                style={{ objectFit: "cover" }}
                src={dt?.img}
                alt=""
              />
              <p className="absolute top-2 left-2 bg-black text-white py-[3px] px-[17px] text-[12px] xl:text-[14px] font-[600] rounded-[8px] uppercase">
                {dt?.type}
              </p>
            </div>
            <div className="mt-[4px] xl:mt-[5px]">
              <p className="text-[18px] xl:text-[20px] font-[600] tracking-[1px]">
                {dt?.title}
              </p>
              <p className="text-[12px] xl:text-[14px] leading-tight mt-[1px] w-[300px] xl:w-[360px] font-[400] text-[rgba(0,0,0,0.54)]">
                {dt?.desc}
              </p>
              <p className="mt-[5px] text-[#ab0101] text-[12px] xl:text-[13px] font-[700] tracking-[1.2px]">
                READ MORE
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-[8px] xl:mt-[14px] px-5 md:px-0 md:h-36 h-28 rounded-xl">
        <img
          style={{ objectFit: "cover" }}
          className="w-full h-full rounded-xl"
          src={data?.banner?.img}
          alt=""
        />
        <p className="absolute top-2 left-7 md:left-2 bg-black text-white py-[3px] px-[17px] text-[12px] xl:text-[15px] font-[600] rounded-[8px] uppercase">
          {data?.banner?.type}
        </p>
      </div>
    </div>
  );
};

export default Gallery;
