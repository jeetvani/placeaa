import React from "react";
import { useNavigate } from "react-router-dom";

const Recommended = ({
  data,
}: {
  data: Array<{
    type: string;
    id: number | string;
    title: string;
    image: string;
    desc: string;
  }>;
}) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-[20px] xl:p-[30px] items-center gap-x-[60px] xl:gap-x-[80px] gap-y-[20px] my-10 md:my-0">
      {data?.map((d, index) => (
        <div
          onClick={() => navigate(`/blog/${d?.id}`, { state: { data: d } })}
          className="flex cursor-pointer gap-[8px] xl:gap-[15px]"
          key={index}
        >
          <img
            style={{ objectFit: "cover" }}
            className="w-[150px] xl:w-[180px] rounded-[15px]"
            src={d?.image}
            alt=""
          />
          <div>
            <p className="leading-none uppercase text-[#ab0101] text-[12px] xl:text-[13px] font-[600] tracking-[1.4px] mt-[3px] xl:mt-[10px]">
              {d?.type}
            </p>
            <p className="leading-none text-[rgba(0,0,0,0.75)] text-[18px] xl:text-[20px] font-[600] mt-1">
              {d?.title}
            </p>
            <p className="leading-tight text-[rgba(0,0,0,0.75)] md:text-[14px] text-[12px] xl:text-[15px] font-[400] mt-[5px] xl:mt-[8px]">
              {d?.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
