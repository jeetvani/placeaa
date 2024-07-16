import React, { useEffect, useRef, useState } from "react";
import {
  bus,
  car,
  connector_line,
  connector_line_hori,
  train,
} from "../../../assets";
import { useMediaQuery } from "react-responsive";

const Schedule = ({ data }: { data: Array<any> }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });
  const dayRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const day = Number(entry.target.getAttribute("data-day"));
            setSelectedDay(day);
          }
        });
      },
      { threshold: 0.5 }
    );

    dayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const Title = ({ day, title }: { day: string; title: string }) => (
    <div className="bg-[#191919] text-white pl-[20px] xl:pl-[30px] py-[9px] rounded-r-[15px] sticky z-10 top-0 md:top-[130px]">
      <p className="text-[16px] xl:text-[18px] font-[600] tracking-[1px]">
        Day-{day} {title}
      </p>
    </div>
  );

  const Train = ({ content }: any) => (
    <div>
      <Title day={content?.day} title={content?.title} />
      <div className="pl-[20px] xl:pl-[30px] mt-[15px] xl:mt-[18px] flex gap-[10px] xl:gap-[15px]">
        <img
          src={train}
          alt="train"
          className="xl:h-[40px] w-[23px] h-[35px] xl:w-[29px]"
        />
        <div>
          <p className="text-[18px] xl:text-[20px] font-[400] tracking-[1px]">
            {content?.des?.title}{" "}
            <span className="font-[600]">{content?.des?.time_diff}</span>
          </p>
          <div className="mt-[8px] flex items-center">
            <div className="min-w-fit">
              <p className="text-[18px] xl:text-[22px] font-[600] tracking-[1px]">
                {content?.des?.from?.time}
              </p>
              <p className="text-[16px] xl:text-[20px] font-[600] text-[#5e5e5e] tracking-[1px]">
                {content?.des?.from?.date}
              </p>
              <p className="text-[#5e5e5e] tracking-[0.8px] text-[14px] xl:text-[16px]">
                {content?.des?.from?.location}
              </p>
            </div>
            <div className="relative flex items-center justify-center mx-[15px] xl:mx-[20px]">
              <img
                src={train}
                alt="train"
                className="absolute xl:h-[24px] h-[20px] w-[15px] xl:w-[18px]"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div className="flex items-center">
                <p className="h-1.5 w-1.5 bg-black rounded-full" />
                <img src={connector_line_hori} alt="horizontal connector" />
                <p className="h-1.5 w-1.5 bg-black rounded-full" />
              </div>
            </div>
            <div className="min-w-fit">
              <p className="text-[18px] xl:text-[22px] font-[600] tracking-[1px]">
                {content?.des?.to?.time}
              </p>
              <p className="text-[16px] xl:text-[20px] font-[600] text-[#5e5e5e] tracking-[1px]">
                {content?.des?.to?.date}
              </p>
              <p className="text-[#5e5e5e] tracking-[0.8px] text-[14px] xl:text-[16px]">
                {content?.des?.to?.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BusToCar = ({ content }: any) => (
    <div>
      <Title day={content?.day} title={content?.title} />
      <div>
        <div className="pl-[20px] xl:pl-[30px] pb-[10px] pt-[15px] xl:pt-[18px]">
          <div className="flex items-start gap-[15px] xl:gap-[28px]">
            <img
              className="xl:h-[40px] h-[30px] w-[30px] xl:w-[40px]"
              src={bus}
              alt=""
            />
            <p className="text-[18px] xl:text-[20px] font-[400] tracking-[1px]">
              {content?.des?.title_bus}
            </p>
          </div>
          <img
            className="h-[50px] xl:h-[60px] ml-3.5 xl:ml-4 w-[4px]"
            src={connector_line}
            alt=""
          />
          <div className="flex items-start gap-[15px] xl:gap-[28px]">
            <img
              className="h-[25px] xl:h-[30px] w-[35px] xl:w-[40px]"
              src={car}
              alt=""
            />
            <div className="text-[18px] xl:text-[20px] font-[400] tracking-[1px]">
              <p>{content?.des?.title_car}</p>
              <ul>
                {content?.des?.car_checkpoints?.map(
                  (cdcc: string, index: number) => (
                    <li
                      className="list-disc md:ml-7 ml-5 text-sm md:text-lg"
                      key={index}
                    >
                      {cdcc}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Explore = ({ content }: any) => (
    <div>
      <Title day={content?.day} title={content?.title} />
      <div className="py-[15px] xl:py-[20px] pl-[20px] xl:pl-[30px] flex gap-[10px]">
        <img
          src={content?.des?.img}
          alt=""
          className="rounded-[10px] h-[92px] xl:h-[100px]"
        />
        <div className="flex flex-col justify-between gap-3 xl:py-[1px] text-[15px] md:text-[18px] xl:text-[20px] leading-tight font-[400] tracking-[0.6px]">
          <p>{content?.des?.title}</p>
          <div>
            <p className="text-[#5E5E5E] leading-none">Facility</p>
            <div className="flex items-center gap-2 mt-1 md:mt-0">
              <div className="h-1.5 rounded w-1.5 bg-black" />
              <li className="flex list-disc items-center gap-1 text-xs md:text-lg">
                {content?.des?.facilites?.map((f: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <span>{f}</span>
                    <span
                      className={`${
                        index === content?.des?.facilites?.length - 1
                          ? "hidden"
                          : ""
                      } ml-1`}
                    >
                      |
                    </span>
                  </div>
                ))}
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MultipleExplore = ({ content }: any) => (
    <div>
      <Title day={content?.day} title={content?.title} />
      <div className="pl-[20px] xl:pl-[30px] pt-[15px] xl:pt-[18px]">
        <p className="text-[18px] xl:text-[20px] font-[400] tracking-[1px]">
          {content?.des?.title}
        </p>
        <ul className="grid grid-cols-2 mt-[5px] xl:mt-[12px] md:ml-[40px] ml-4">
          {content?.des?.locations?.map((cdl: string, index: number) => (
            <li
              className="md:text-[18px] text-[15px] xl:text-[20px] list-disc font-[400] tracking-[1px]"
              key={index}
            >
              {cdl}
            </li>
          ))}
        </ul>
        <div className="mt-[10px] xl:mt-[20px] font-[400] text-[18px] xl:text-[20px] tracking-[1px]">
          <p className="text-[#5E5E5E]">Facility</p>
          <div className="flex md:ml-[20px] items-center gap-2">
            <div className="rounded w-1.5 h-1.5 bg-black" />
            <li className="flex md:mt-1 items-center gap-1">
              {content?.des?.facilites?.map((f: string, index: number) => (
                <div
                  className="flex items-center text-sm md:text-lg"
                  key={index}
                >
                  <span>{f}</span>
                  <span
                    className={`${
                      index === content?.des?.facilites?.length - 1
                        ? "hidden"
                        : ""
                    } ml-1`}
                  >
                    |
                  </span>
                </div>
              ))}
            </li>
          </div>
        </div>
        <div className="flex items-center mt-[10px] xl:mt-[15px] gap-[8px] xl:gap-[12px] mb-[10px]">
          {content?.des?.imgs?.map((cdi: string, index: number) => {
            return (
              index < 4 && (
                <div className="relative" key={index}>
                  {index === 3 && (
                    <div className="absolute flex items-center justify-center cursor-pointer text-white text-[19px] xl:text-[23px] font-[600] tracking-[1px] top-0 left-0 right-0 bottom-0 z-10 rounded-[10px] bg-[rgba(0,0,0,0.54)]">
                      More
                    </div>
                  )}
                  <img
                    className="xl:w-[165px] w-[150px] h-[100px] xl:h-[115px] rounded-[10px]"
                    src={cdi}
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );

  const CarToBus = ({ content }: any) => (
    <div>
      <Title day={content?.day} title={content?.title} />
      <div>
        <div className="pl-[20px] xl:pl-[30px] pb-[10px] pt-[15px] xl:pt-[18px]">
          <div className="flex items-start gap-[15px] xl:gap-[28px]">
            <img
              className="h-[25px] xl:h-[30px] w-[35px] xl:w-[40px]"
              src={car}
              alt=""
            />
            <div className="text-[18px] xl:text-[20px] font-[400] tracking-[1.1px] relative">
              <p>{content?.des?.title_car}</p>
              <ul className="absolute">
                {content?.des?.car_checkpoints?.map(
                  (cdcc: string, index: number) => (
                    <li
                      className="list-disc md:ml-7 ml-5 text-sm md:text-lg"
                      key={index}
                    >
                      {cdcc}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <img
            className="h-[50px] xl:h-[60px] ml-3.5 xl:ml-4 -mt-[0.40rem] w-[4px]"
            src={connector_line}
            alt=""
          />
          <div className="flex items-start gap-[15px] xl:gap-[28px]">
            <img
              className="xl:h-[40px] h-[30px] w-[30px] xl:w-[40px]"
              src={bus}
              alt=""
            />
            <p className="text-[18px] xl:text-[20px] font-[400] tracking-[1.1px]">
              {content?.des?.title_bus}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );

  return (
    <div className="flex border-t border-l border-[#d9d9d9]">
      {isAboveMediumScreen && (
        <div className="lg:py-[20px] md:h-fit md:sticky lg:top-[115px] xl:top-[128px] 2xl:top-[133px] xl:py-[25px] md:border-l lg:pr-[30px] xl:pr-[40px]">
          {data?.map((d, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  setSelectedDay(index);
                  dayRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`${
                  selectedDay === index
                    ? "bg-black text-white py-[8px]"
                    : "text-[#5E5E5E] bg-white"
                } cursor-pointer flex items-center leading-[0] gap-[12px] xl:gap-[16px] lg:pl-[16px] xl:pl-[20px] pr-[12px] rounded-r-full`}
              >
                <div className="flex flex-col items-center">
                  <p
                    className={`xl:h-3 h-2 w-2 xl:w-3 ${
                      selectedDay === index ? "bg-white" : "bg-[#5E5E5E]"
                    } rounded-full`}
                  />
                </div>
                <p className="lg:text-[17px] min-w-12 xl:min-w-[75px] xl:text-[20px] font-[600] tracking-[1px]">
                  Day {index + 1}
                </p>
              </div>
              {index < data?.length - 1 && (
                <p
                  className={`${
                    selectedDay === index ? "h-3 xl:h-4" : "h-[1.125rem] xl:h-5"
                  } lg:ml-[19px] xl:ml-[25px] w-[1.5px] bg-[#5e5e5e]`}
                />
              )}
            </div>
          ))}
        </div>
      )}
      <div className="space-y-1 border-l border-[#d9d9d9] flex-1 pb-6 pr-5 md:mr-0">
        {data?.map((d, index: number) => (
          <div
            key={index}
            ref={(el) => (dayRefs.current[index] = el)}
            data-day={index}
          >
            {d?.type === "train" ? (
              <Train content={d} />
            ) : d?.type === "bus_car" ? (
              <BusToCar content={d} />
            ) : d?.type === "explore" ? (
              <Explore content={d} />
            ) : d?.type === "multiple_explore" ? (
              <MultipleExplore content={d} />
            ) : d?.type === "car_bus" ? (
              <CarToBus content={d} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
