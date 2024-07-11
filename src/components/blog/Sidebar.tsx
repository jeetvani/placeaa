import React from "react";
import { calender_blog, generateTrip } from "../../assets";

const Sidebar = ({
  data,
}: {
  data: Array<{
    image: string;
    title: string;
    date: string;
    id: string | number;
    by: { name: string; image?: string };
  }>;
}) => {
  const links = [
    { name: "follow us on instagram", link: "", code: "insta" },
    { name: "like us on facebook", link: "", code: "facebook" },
    { name: "subscribe us on youtube", link: "", code: "youtube" },
  ];

  const getInitials = (name: string) => {
    return name?.slice(0, 1);
  };

  return (
    <div>
      <div className="flex items-end gap-[3px]">
        <p className="uppercase text-[20px] xl:text-[22px] font-[600]">
          Follow Us
        </p>
        <div className="h-[2px] -translate-y-2 flex-1 bg-black" />
      </div>
      <div className="flex flex-col gap-[7px] mt-[12px]">
        {links?.map((l, index) => (
          <button
            className="bg-black flex items-center justify-between rounded-[5px] px-[12px] py-[8px] xl:pt-[10px] xl:pl-[16px] xl:pb-[10px] xl:pr-[14px] text-white "
            key={index}
          >
            <span className="uppercase text-[14px] xl:text-[16px] font-[400]">
              {l?.name}
            </span>
            <div className="scale-75 xl:scale-90">
              {l?.code === "insta" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.7542 2.4716C15.8976 2.4716 16.27 2.48409 17.5114 2.54296C18.6592 2.59737 19.2825 2.79674 19.6974 2.96433C20.2469 3.18633 20.6391 3.45152 21.051 3.87973C21.463 4.308 21.7181 4.71566 21.9317 5.28689C22.0929 5.71812 22.2847 6.3661 22.337 7.55927C22.3937 8.84969 22.4057 9.23676 22.4057 12.5044C22.4057 15.772 22.3937 16.1591 22.337 17.4495C22.2847 18.6427 22.0929 19.2907 21.9317 19.7219C21.7181 20.2931 21.463 20.7008 21.0511 21.129C20.6391 21.5572 20.2469 21.8224 19.6974 22.0444C19.2825 22.212 18.6592 22.4114 17.5114 22.4658C16.2702 22.5247 15.8979 22.5372 12.7542 22.5372C9.61049 22.5372 9.23823 22.5247 7.99698 22.4658C6.84915 22.4114 6.22579 22.212 5.81095 22.0444C5.26143 21.8224 4.86926 21.5572 4.45732 21.129C4.04538 20.7008 3.79022 20.2931 3.57666 19.7219C3.41543 19.2907 3.22364 18.6427 3.1713 17.4495C3.11466 16.1591 3.10265 15.772 3.10265 12.5044C3.10265 9.23676 3.11466 8.84969 3.1713 7.55927C3.22364 6.3661 3.41543 5.71812 3.57666 5.28689C3.79022 4.71566 4.04533 4.308 4.45732 3.87978C4.86926 3.45152 5.26143 3.18633 5.81095 2.96433C6.22579 2.79674 6.84915 2.59737 7.99698 2.54296C9.23837 2.48409 9.61073 2.4716 12.7542 2.4716ZM12.7542 0.266602C9.55689 0.266602 9.15598 0.280689 7.90029 0.340246C6.64722 0.399657 5.79142 0.60655 5.04259 0.909045C4.26843 1.22179 3.61189 1.64024 2.95736 2.32057C2.30288 3.00096 1.90033 3.68343 1.59952 4.48817C1.30848 5.26658 1.10944 6.15619 1.05229 7.45876C0.994998 8.76405 0.981445 9.1808 0.981445 12.5044C0.981445 15.828 0.994998 16.2447 1.05229 17.55C1.10944 18.8526 1.30848 19.7422 1.59952 20.5206C1.90033 21.3253 2.30288 22.0078 2.95736 22.6882C3.61189 23.3685 4.26843 23.787 5.04259 24.0997C5.79142 24.4022 6.64722 24.6091 7.90029 24.6685C9.15598 24.7281 9.55689 24.7422 12.7542 24.7422C15.9515 24.7422 16.3524 24.7281 17.608 24.6685C18.8611 24.6091 19.7169 24.4022 20.4658 24.0997C21.2399 23.787 21.8965 23.3685 22.551 22.6882C23.2055 22.0078 23.608 21.3253 23.9089 20.5206C24.1999 19.7422 24.3989 18.8526 24.4561 17.55C24.5133 16.2447 24.5269 15.828 24.5269 12.5044C24.5269 9.1808 24.5133 8.76405 24.4561 7.45876C24.3989 6.15619 24.1999 5.26658 23.9089 4.48817C23.608 3.68343 23.2055 3.00096 22.551 2.32057C21.8965 1.64024 21.2399 1.22179 20.4658 0.909045C19.7169 0.60655 18.8611 0.399657 17.608 0.340246C16.3524 0.280689 15.9515 0.266602 12.7542 0.266602Z"
                    fill="white"
                  />
                  <path
                    d="M12.7593 6.22583C9.42049 6.22583 6.71387 9.03937 6.71387 12.5101C6.71387 15.9808 9.42049 18.7944 12.7593 18.7944C16.0981 18.7944 18.8048 15.9808 18.8048 12.5101C18.8048 9.03937 16.0981 6.22583 12.7593 6.22583ZM12.7593 16.5894C10.592 16.5894 8.83508 14.763 8.83508 12.5101C8.83508 10.2572 10.592 8.43083 12.7593 8.43083C14.9266 8.43083 16.6836 10.2572 16.6836 12.5101C16.6836 14.763 14.9266 16.5894 12.7593 16.5894Z"
                    fill="white"
                  />
                  <path
                    d="M20.4573 5.97369C20.4573 6.7847 19.8248 7.44221 19.0445 7.44221C18.2644 7.44221 17.6318 6.7847 17.6318 5.97369C17.6318 5.16263 18.2644 4.50513 19.0445 4.50513C19.8248 4.50513 20.4573 5.16263 20.4573 5.97369Z"
                    fill="white"
                  />
                </svg>
              ) : l?.code === "facebook" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="26"
                  viewBox="0 0 15 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4533 4.59386C12.6821 4.45215 11.6406 4.34628 10.9856 4.34628C9.21189 4.34628 9.09667 5.05486 9.09667 6.18861V8.20684H13.5304L13.1439 12.3875H9.09667V25.1038H3.5452V12.3875H0.691895V8.20684H3.5452V5.6209C3.5452 2.07878 5.35699 0.0947266 9.90595 0.0947266C11.4864 0.0947266 12.6431 0.307305 14.1464 0.590741L13.4533 4.59386Z"
                    fill="white"
                  />
                </svg>
              ) : l?.code === "youtube" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="20"
                  viewBox="0 0 31 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.0822 2.33861C29.5586 2.75527 29.9018 3.27381 30.0778 3.8426C31.091 7.40999 30.8569 13.0441 30.0975 16.7492C29.9215 17.318 29.5783 17.8365 29.1019 18.2532C28.6255 18.6699 28.0327 18.9701 27.3824 19.124C25.0018 19.6919 15.4204 19.6919 15.4204 19.6919C15.4204 19.6919 5.83894 19.6919 3.45834 19.124C2.80805 18.9701 2.21521 18.6699 1.73885 18.2532C1.26249 17.8365 0.919238 17.318 0.743272 16.7492C-0.275862 13.1973 0.00351549 7.55971 0.723599 3.85982C0.899563 3.29102 1.24282 2.77247 1.71918 2.35581C2.19553 1.93915 2.78838 1.63891 3.43866 1.48501C5.81927 0.917107 15.4007 0.899902 15.4007 0.899902C15.4007 0.899902 24.9821 0.899902 27.3627 1.46779C28.013 1.62171 28.6059 1.92195 29.0822 2.33861ZM20.2996 10.2959L12.3512 14.3227V6.26904L20.2996 10.2959Z"
                    fill="white"
                  />
                </svg>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-[25px] xl:mt-[30px] relative flex items-center justify-center">
        <img
          src={generateTrip}
          className="w-full md:scale-90 xl:scale-100"
          alt=""
        />
        <div className="absolute text-center text-white">
          <p className="text-[20px] xl:text-[24px] font-[600] leading-none">
            Plan Trip Using AI
          </p>
          <p className="text-[12px] xl:text-[14px] mt-[14px] xl:mt-[18px] font-[600] leading-none">
            Click Here
          </p>
          <button
            style={{
              background:
                "linear-gradient(88deg, #FF6F4B 4.58%, #9614D0 61.43%, #660094 89.51%)",
            }}
            className="rounded-full leading-none font-inter text-[14px] xl:text-[16px] uppercase font-[600] mt-[5px] py-[9px] xl:py-[11px] px-[60px] xl:px-[70px]"
          >
            Generate Trip
          </button>
        </div>
      </div>

      <div className="flex items-end gap-[3px] mt-[22px] xl:mt-[30px]">
        <p className="uppercase text-[20px] xl:text-[22px] font-[600]">
          Recent Updates
        </p>
        <div className="h-[2px] -translate-y-2 flex-1 bg-black" />
      </div>

      <div className="mt-[17px] flex items-center flex-col gap-[7px] xl:gap-[10px]">
        {data?.map((pdr) => (
          <div
            className="rounded-[10px] flex items-center gap-4 md:gap-[5px] xl:gap-[8px] w-full border border-[#d9d9d9] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
            key={pdr?.id}
          >
            <img
              className="py-[8.67px] w-[128px] h-[108.667px] pl-[9.42px]"
              src={pdr?.image}
              style={{ objectFit: "cover" }}
              alt=""
            />
            <div className="pt-[12px] pr-[15px] xl:pr-[25px] pb-[17px]">
              <p className="font-[600] font-inter w-full text-[10px] md:text-[14px] md:w-[215px] mb-[16px]">
                {pdr?.title}
              </p>
              <div className="text-[#5e5e5e] uppercase text-[10px] md:text-[14px] font-[400] flex items-center gap-[30px]">
                <div className="flex items-center gap-[6px] xl:gap-[10px]">
                  {pdr?.by?.image ? (
                    <img
                      className="xl:h-[22px] xl:w-[22px] w-[20px] h-[20px] rounded-full"
                      src={pdr?.by?.image}
                      alt=""
                    />
                  ) : (
                    <div className="xl:h-[22px] text-[14px] xl:text-[16px] font-[400] h-[20px] w-[20px] xl:w-[22px] rounded-full text-center bg-black text-white">
                      {getInitials(pdr?.by?.name)}
                    </div>
                  )}
                  <p>{pdr?.by?.name}</p>
                </div>
                <div className="flex items-center gap-[6px] xl:gap-[10px]">
                  <img
                    className="xl:w-[22px] -mt-0.5 xl:h-[18px] h-[15px] w-[20px]"
                    src={calender_blog}
                    alt=""
                  />
                  <p>{pdr?.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
