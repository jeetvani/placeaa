import { useNavigate } from "react-router-dom";

const Heritage = ({
  data,
}: {
  data: Array<{
    type: string;
    image: string;
    title: string;
    desc: string;
    id: number | string;
  }>;
}) => {
  const navigate = useNavigate();

  return (
    <div className="my-10 md:my-0">
      <div className="flex md:flex-wrap overflow-x-auto px-5 md:px-0 xl:gap-[40px] gap-[30px] items-center md:justify-center py-[20px] xl:py-[30px]">
        {data?.map((d, index) => (
          <div
            className="cursor-pointer"
            onClick={() => navigate(`/blog/${d?.id}`, { state: { data: d } })}
            key={index}
          >
            <div className="relative">
              <img
                className="xl:w-[360px] w-[300px] rounded-[10px]"
                src={d?.image}
                alt=""
                style={{
                  objectFit: "cover",
                  background: "lightgray 50%",
                }}
              />
              <p className="uppercase absolute top-[7px] xl:top-[10px] text-sm left-[8px] xl:left-[10px] bg-black text-white px-[10px] xl:px-[16px] py-[1px] pb-[4px] rounded-[10px]">
                {d?.type}
              </p>
            </div>
            <div className="w-[300px] xl:w-[360px] mt-[8px] xl:mt-[15px]">
              <p className="text-black leading-none text-[18px] font-[600] tracking-[1px]">
                {d?.title}
              </p>
              <p className="text-[rgba(0,0,0,0.54)] leading-[17px] mt-1.5 text-[14px] font-[400]">
                {d?.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-[30px]">
        <button className="text-white text-[18px] xl:text-[20px] rounded-[15px] bg-[#AB0101] py-[7px] xl:py-[10px] px-[35px] xl:px-[45px] font-[600]">
          Click For More
        </button>
      </div>
    </div>
  );
};

export default Heritage;
