import { RefObject, useRef, useState } from "react";
import Footer from "../components/home/footer/Footer";
import {
  contactUs,
  faq,
  getintouch,
  hamburger,
  helpBanner,
  helper,
  homelogo,
  testusermob,
  tnc,
} from "../assets";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Help = () => {
  const navigate = useNavigate();
  const faqsRef: RefObject<HTMLDivElement> = useRef(null);
  const getInTouchRef: RefObject<HTMLDivElement> = useRef(null);
  const fileRef = useRef<any>(null);
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });
  const [userData, setUserData] = useState<{
    firstName: string;
    lastName: string;
    id: string;
    email: string;
    profile: string;
  }>({
    firstName: "Shubh",
    lastName: "Mangukiya",
    id: "asdfasfa",
    email: "shubh_placeaa@gmail.com",
    profile: testusermob,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [data, setData] = useState<{
    name: string;
    email: string;
    contact: number;
    query: string;
    file?: File;
  } | null>(null);

  const [faqs, setFaqs] = useState<
    Array<{ title: string; id: number; answer: string }>
  >([
    {
      title: "How to check/claim refund on my booking?",
      id: 1,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
    {
      title: "How to check/claim refund on my booking?",
      id: 2,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
    {
      title: "How to check/claim refund on my booking?",
      id: 3,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
    {
      title: "How to check/claim refund on my booking?",
      id: 4,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
    {
      title: "How to check/claim refund on my booking?",
      id: 5,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
    {
      title: "How to check/claim refund on my booking?",
      id: 6,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
    {
      title: "How to check/claim refund on my booking?",
      id: 7,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
    {
      title: "How to check/claim refund on my booking?",
      id: 8,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis aut in similique accusamus eum explicabo animi, deserunt temporibus tempore earum sed porro eaque aperiam, officiis magnam fuga fugiat pariatur. Enim iure corrupti architecto reprehenderit accusamus nam molestiae quos voluptatibus provident officia doloribus error, vero alias suscipit quod dicta, nisi facilis expedita voluptatem quasi optio quisquam unde libero. Corrupti fugiat, cum tempore doloribus voluptatibus nobis quia. Recusandae nam aperiam eius saepe delectus quam, ea itaque! Nemo, quae aliquid magni placeat a vel, recusandae itaque quidem exercitationem laudantium minus voluptas labore, sapiente molestiae consequuntur aliquam ipsam repellat quibusdam ratione amet optio libero odit! Quam, aspernatur quo. Nisi deleniti eum aliquid nemo autem expedita omnis cupiditate reiciendis facilis quae quam aspernatur alias, voluptatibus, laborum quibusdam quasi saepe illo perferendis nobis corrupti facere mollitia non nam! Maiores amet provident saepe repudiandae odit, impedit voluptas nesciunt, esse, reiciendis ipsam cumque tenetur magnam reprehenderit aliquam!",
    },
  ]);

  const handleFile = (e: File | null) => {
    setData((prev: any) => ({ ...prev, file: e }));
  };

  const scrollToRef = (ref: RefObject<HTMLElement>, offset: number = 0) => {
    if (ref.current) {
      const yCoordinate =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: yCoordinate - offset,
        behavior: "smooth",
      });
    }
  };

  const cardData = [
    {
      img: getintouch,
      title: "Get in touch",
      action: () => scrollToRef(getInTouchRef, 100),
    },
    { img: contactUs, title: "Contact Us", route: "/contact-us" },
    {
      img: faq,
      title: "Frequently asked questions",
      action: () => scrollToRef(faqsRef, 100),
    },
    { img: tnc, title: "Terms & conditions", route: "/terms-and-conditions" },
  ];

  return (
    <div>
      {isAboveMediumScreen ? (
        <div className="relative text-white flex items-center justify-center">
          <img
            src={helpBanner}
            className="w-full"
            style={{ objectFit: "cover" }}
            alt=""
          />
          <div className="absolute -mt-20">
            <p className="text-[25px] xl:text-[30px] text-center font-[600] tracking-[1.6px] leading-none">
              Get Support
            </p>
            <p className="text-[14px] xl:text-[16px] text-center font-[400] tracking-[1px] mt-1 mb-[10px] xl:mb-[13px]">
              Your Satisfaction start here
            </p>
            <div className="bg-white flex items-center gap-10 font-inter rounded-full px-[14px] xl:px-[16px] pr-[5px] xl:pr-[7px] py-[5px] xl:py-[6px]">
              <input
                type="text"
                name="support"
                className="outline-none w-[35vw] xl:w-[40vw] border-none text-black text-[12px] placeholder:text-[#b9b9b9] font-[400]"
                placeholder="Find your solution from here"
              />
              <button className="bg-[#AB0101] px-[20px] xl:px-[30px] py-[5px] xl:py-[7px] rounded-full text-[13px] xl:text-[14px] font-[600]">
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[50vh] bg-home-page-image bg-cover bg-center px-5">
          <nav className="flex items-center justify-between pt-4 ">
            <div className="flex items-center gap-4 lg:gap-0">
              <img
                src={hamburger}
                alt="menu"
                className="w-6 h-6 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
              <img
                src={homelogo}
                alt="logo"
                className="h-8 lg:h-[35px] xl:h-[38px] 2xl:h-[45px]"
              />
            </div>
            <div className="lg:hidden">
              <img
                src={userData.profile}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </nav>
          <div className="flex w-full justify-center items-center flex-col mt-20">
            <p className="text-[20px] text-white xl:text-[30px] text-center font-[600] tracking-[1.6px] leading-none">
              Get Support
            </p>
            <p className="text-[12px] text-white xl:text-[16px] text-center font-[400] tracking-[1px] mt-1 mb-[10px] xl:mb-[13px]">
              Your Satisfaction start here
            </p>
            <div className="bg-white flex items-center gap-10 font-inter rounded-full px-[14px] xl:px-[16px] pr-[5px] xl:pr-[7px] py-[5px] xl:py-[6px]">
              <input
                type="text"
                name="support"
                className="outline-none w-[35vw] xl:w-[40vw] border-none text-black text-[12px] placeholder:text-[#b9b9b9] font-[400]"
                placeholder="Find your solution from here"
              />
              <button className="bg-[#AB0101] px-[20px] xl:px-[30px] py-[5px] xl:py-[7px] rounded-full text-[13px] xl:text-[14px] font-[600]">
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center my-10 md:my-0 px-5 md:px-0 md:-mt-20 xl:-mt-28 z-20 relative">
        <div
          style={{ boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.25)" }}
          className="bg-[#F5F5F5] w-full md:w-fit rounded-[15px]  p-[37px] grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {cardData?.map((cd, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 md:gap-[15px] 
    ${
      index < 2
        ? "md:border-b md:border-[#B9B9B9] md:pb-[26px]"
        : "md:pt-[26px]"
    }
    ${index === 0 ? "md:border-r md:border-[#B9B9B9] md:pr-[26px]" : ""}
    ${index === 2 ? "md:border-r md:border-[#B9B9B9] md:pr-[26px]" : ""}
    ${index === 1 ? "md:pb-[26px]" : ""}
    ${index === 3 ? "md:pb-[26px]" : ""}
    cursor-pointer
  `}
              onClick={() => {
                if (cd.action) {
                  cd.action();
                } else if (cd.route) {
                  navigate(cd.route);
                }
              }}
            >
              <img
                src={cd?.img}
                alt=""
                className="lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px]"
              />
              <p className="font-inter font-[400] lg:text-[20px] xl:text-[24px] text-center leading-[29.05px] text-[#5e5e5e]">
                {cd?.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="faqs"
        className="mt-[50px] xl:mt-[77px] px-5 md:px-0 md:mx-[150px] xl:mx-[200px]"
        ref={faqsRef}
      >
        <p className="text-[22px] xl:text-[25px] font-[600] mb-[25px] xl:mb-[30px]">
          FAQ&apos;s
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[80px] xl:gap-x-[140px] gap-y-[18px] xl:gap-y-[21px]">
          {faqs?.map((f, index) => (
            <div
              className="flex cursor-pointer items-center justify-between border-b border-b-[#b9b9b9] pb-[7px] xl:pb-[11px]"
              key={f?.id}
              onClick={() =>
                navigate(`/faq/${f?.id}`, { state: { faqData: f } })
              }
            >
              <p className="text-[14px] xl:text-[16px] font-[400] text-[#5e5e5e]">
                {f?.title}
              </p>
              <div className="scale-75 xl:scale-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                >
                  <path
                    d="M0.372418 0.420902C0.133886 0.687507 0 1.04815 0 1.42407C0 1.79999 0.133886 2.16063 0.372418 2.42724L4.90609 7.53557L0.372418 12.5728C0.133886 12.8394 0 13.2 0 13.5759C0 13.9518 0.133886 14.3125 0.372418 14.5791C0.491475 14.7125 0.633122 14.8183 0.789187 14.8906C0.945252 14.9628 1.11265 15 1.28171 15C1.45078 15 1.61818 14.9628 1.77424 14.8906C1.93031 14.8183 2.07195 14.7125 2.19101 14.5791L7.62117 8.54586C7.74121 8.41358 7.83649 8.2562 7.90151 8.0828C7.96652 7.9094 8 7.72342 8 7.53557C8 7.34773 7.96652 7.16174 7.90151 6.98835C7.83649 6.81495 7.74121 6.65757 7.62117 6.52529L2.19101 0.420902C2.07195 0.287533 1.93031 0.181675 1.77424 0.109435C1.61818 0.0371943 1.45078 0 1.28171 0C1.11265 0 0.945252 0.0371943 0.789187 0.109435C0.633122 0.181675 0.491475 0.287533 0.372418 0.420902Z"
                    fill="#5E5E5E"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="get-in-touch"
        ref={getInTouchRef}
        className="md:mx-[120px] px-5 xl:mx-[200px] xl:mt-[75px] my-[50px] xl:mb-[78px]"
      >
        <div className="flex justify-center">
          <div
            className={`w-fit md:rounded-t-full py-3 md:py-[7px] xl:py-[12px] md:px-[120px] xl:px-[200px] ${
              isAboveMediumScreen ? "shadow-custom" : ""
            }`}
          >
            <p className="text-2xl md:text-[22px] xl:text-[26px] font-[600] leading-none">
              Get in touch with us
            </p>
          </div>
        </div>

        <div
          className={`md:bg-[#F5F5F5] w-fit md:w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 md:p-[25px_35px_22px_50px] px-5 pb-5 ${
            isAboveMediumScreen ? "shadow-custom" : ""
          }`}
        >
          <div>
            <div className="md:translate-y-[3.25rem] md:translate-x-[-15px] xl:translate-x-0">
              <svg width="260" height="130" className="h-24 md:h-[130px]">
                <path id="curve" d="M 50 120 C 0 125, 120 0, 250 123"></path>
                <text textAnchor="middle">
                  <textPath
                    className="text-[20px] text-center font-[400]"
                    href="#curve"
                    startOffset="50%"
                  >
                    How can we help ?
                  </textPath>
                </text>
              </svg>
            </div>
            <img className="md:h-[240px] xl:h-[280px]" src={helper} alt="" />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-[auto,1fr] items-center gap-x-[30px] xl:gap-x-[43px] gap-y-[12px] xl:gap-y-[19px]">
              <label
                className="w-fit text-[14px] xl:text-[18px] font-[400]"
                htmlFor="name"
              >
                Your Name <span>*</span>
              </label>
              <input
                className="rounded-[8px] border border-[#b9b9b9] px-1 xl:px-2 py-0.5 xl:py-1 outline-none"
                type="text"
                name="name"
                value={data?.name}
                onChange={(e) =>
                  setData((prev: any) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                id="name"
              />

              <label
                className="w-fit text-[14px] xl:text-[18px] font-[400]"
                htmlFor="email"
              >
                Email ID <span>*</span>
              </label>
              <input
                className="rounded-[8px] border border-[#b9b9b9] px-1 xl:px-2 py-0.5 xl:py-1 outline-none"
                type="email"
                name="email"
                value={data?.email}
                onChange={(e) =>
                  setData((prev: any) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                id="email"
              />

              <label
                className="w-fit text-[14px] xl:text-[18px] font-[400]"
                htmlFor="contact"
              >
                Contact Number <span>*</span>
              </label>
              <input
                className="rounded-[8px] border border-[#b9b9b9] px-1 xl:px-2 py-0.5 xl:py-1 outline-none"
                type="number"
                name="contact"
                id="contact"
                value={data?.contact}
                onChange={(e) =>
                  setData((prev: any) => ({
                    ...prev,
                    contact: e.target.value,
                  }))
                }
              />

              <p className="w-fit text-[14px] xl:text-[18px] font-[400]">
                Upload a file
              </p>
              <input
                ref={fileRef}
                type="file"
                name="file"
                id="file"
                onChange={(e) =>
                  handleFile(e?.target?.files && e?.target?.files[0])
                }
                className="hidden"
              />
              <button
                onClick={() => fileRef?.current?.click()}
                className="w-fit text-[12px] xl:text-[15px] font-[600] text-white bg-[#AB0101] py-[2px] xl:py-[5px] px-[30px] xl:px-[51px] rounded-[10px]"
              >
                Browse
              </button>
            </div>
            <p className="mt-[15px] xl:mt-[21px] text-[15px] xl:text-[18px] font-[400]">
              Questions / Comments <span>*</span>
            </p>
            <textarea
              className="rounded-[8px] border border-[#b9b9b9] px-2 py-1 resize-none w-full mt-[4px] xl:mt-[7px] outline-none"
              name="query"
              rows={3}
              id="query"
            />
            <button className="font-inter mt-[6px] xl:mt-[10px] text-[12px] xl:text-[16px] font-[500] text-white bg-[#AB0101] py-[5px] xl:py-[8px] w-full rounded-[10px]">
              Submit Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
