import React from "react";
import { useNavigate } from "react-router-dom";

const LatestNews = ({
  data,
}: {
  data: Array<{
    type: string;
    image: string;
    desc: string;
    id: number | string;
  }>;
}) => {
  const navigate = useNavigate();
  return (
    <div className="px-5 md:px-0 my-[20px] md:my-0">
      <p className="text-[22px] xl:text-[28px] border-b border-b-black font-[400] tracking-[3px]">
        Latest News
      </p>
      <div className="flex mt-[18px] xl:mt-[24px] flex-col gap-[8px] xl:gap-[16px]">
        {data?.map((d, index) => (
          <div
            className="flex cursor-pointer gap-[14px]"
            onClick={() => navigate(`/blog/${d?.id}`, { state: { data: d } })}
            key={d?.id}
          >
            <img
              className="xl:w-[130px] xl:h-[85px] w-[100px] h-[65px] rounded-[15px]"
              style={{ objectFit: "cover" }}
              src={d?.image}
              alt=""
            />
            <div>
              <p className="text-[#ab0101] uppercase text-[10px] xl:text-[11px] font-[600] xl:tracking-[1px]">
                {d?.type}
              </p>
              <p className="text-[rgba(0,0,0,0.75)] text-[13px] xl:text-[15px] font-[400]">
                {d?.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
