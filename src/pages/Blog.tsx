import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { blogPoster, calender_blog, popularadds, tags } from "../assets";
import Sidebar from "../components/blog/Sidebar";
import About from "../components/home/about/About";
import Footer from "../components/home/footer/Footer";
import SponsoredAd from "../components/home/ads/SponsoredAd";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import { useMediaQuery } from "react-responsive";

const Blog = () => {
  const location = useLocation();
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  // console.log(location?.state?.data)

  const [pageData, setPageData] = useState<{
    id: string | number;
    title: string;
    by: { name: string; image?: string };
    date: string;
    tags: Array<string>;
    description: string;
    img: string;
    detail: Array<{ title: string; description: string }>;
    related: Array<{
      image: string;
      title: string;
      by: { name: string; image?: string };
      date: string;
      id: string | number;
    }>;
    recent_updates: Array<{
      image: string;
      title: string;
      by: { name: string; image?: string };
      date: string;
      id: string | number;
    }>;
  }>({
    id: 1,
    title: "Tourist Attraction Place in india - Ladakh",
    by: { name: "Placeaa" },
    date: "04 APR 2023",
    tags: ["Explore City", "Adventure"],
    description:
      'Nestled in the northernmost region of India, Ladakh is a mesmerizing destination that captivates travelers with its stark yet stunning landscapes, vibrant culture, and spiritual aura. Often referred to as the "Land of High Passes," Ladakh is renowned for its breathtaking mountain scenery, ancient monasteries, and warm hospitality. This article serves as a guide to the enchanting tourist attractions that make Ladakh a must-visit destination for every traveler seeking a unique and unforgettable experience.',
    img: blogPoster,
    detail: [
      {
        title: "A Glimpse of Ladakh's Geography and Culture",
        description:
          "Ladakh's geography is characterized by rugged terrains, high mountain ranges, and deep valleys. The region is flanked by the towering Himalayas to the south and the Karakoram Range to the north, with the Indus River meandering through its heart. Due to its high altitude, Ladakh experiences extreme climatic conditions, with bitterly cold winters and short, intense summers. The local culture of Ladakh is a tapestry woven from Tibetan Buddhist influences, ancient rituals, and the customs of various indigenous communities. The monasteries that dot the landscape stand as living testaments to this rich heritage. Thiksey Monastery, perched atop a hill, offers panoramic views of the Indus Valley and houses an awe-inspiring statue of Maitreya Buddha. Hemis Monastery, known for its annual Hemis Festival, showcases the vibrant mask dances and traditional music that are integral to Ladakhi culture.",
      },
      {
        title: "A Glimpse of Ladakh's Geography and Culture",
        description:
          "Ladakh's geography is characterized by rugged terrains, high mountain ranges, and deep valleys. The region is flanked by the towering Himalayas to the south and the Karakoram Range to the north, with the Indus River meandering through its heart. Due to its high altitude, Ladakh experiences extreme climatic conditions, with bitterly cold winters and short, intense summers. The local culture of Ladakh is a tapestry woven from Tibetan Buddhist influences, ancient rituals, and the customs of various indigenous communities. The monasteries that dot the landscape stand as living testaments to this rich heritage. Thiksey Monastery, perched atop a hill, offers panoramic views of the Indus Valley and houses an awe-inspiring statue of Maitreya Buddha. Hemis Monastery, known for its annual Hemis Festival, showcases the vibrant mask dances and traditional music that are integral to Ladakhi culture.",
      },
      {
        title: "A Glimpse of Ladakh's Geography and Culture",
        description:
          "Ladakh's geography is characterized by rugged terrains, high mountain ranges, and deep valleys. The region is flanked by the towering Himalayas to the south and the Karakoram Range to the north, with the Indus River meandering through its heart. Due to its high altitude, Ladakh experiences extreme climatic conditions, with bitterly cold winters and short, intense summers. The local culture of Ladakh is a tapestry woven from Tibetan Buddhist influences, ancient rituals, and the customs of various indigenous communities. The monasteries that dot the landscape stand as living testaments to this rich heritage. Thiksey Monastery, perched atop a hill, offers panoramic views of the Indus Valley and houses an awe-inspiring statue of Maitreya Buddha. Hemis Monastery, known for its annual Hemis Festival, showcases the vibrant mask dances and traditional music that are integral to Ladakhi culture.",
      },
      {
        title: "A Glimpse of Ladakh's Geography and Culture",
        description:
          "Ladakh's geography is characterized by rugged terrains, high mountain ranges, and deep valleys. The region is flanked by the towering Himalayas to the south and the Karakoram Range to the north, with the Indus River meandering through its heart. Due to its high altitude, Ladakh experiences extreme climatic conditions, with bitterly cold winters and short, intense summers. The local culture of Ladakh is a tapestry woven from Tibetan Buddhist influences, ancient rituals, and the customs of various indigenous communities. The monasteries that dot the landscape stand as living testaments to this rich heritage. Thiksey Monastery, perched atop a hill, offers panoramic views of the Indus Valley and houses an awe-inspiring statue of Maitreya Buddha. Hemis Monastery, known for its annual Hemis Festival, showcases the vibrant mask dances and traditional music that are integral to Ladakhi culture.",
      },
    ],
    related: [
      {
        id: "xa8",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
      {
        id: "xa7",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
    ],
    recent_updates: [
      {
        id: "xa6",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
      {
        id: "xa5",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
      {
        id: "xa4",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
      {
        id: "xa3",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
      {
        id: "xa2",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
      {
        id: "xa1",
        title: "Tourist Attraction Place in india - Ladakh",
        by: { name: "Placeaa" },
        date: "04 APR 2023",
        image: blogPoster,
      },
    ],
  });

  const getInitials = (name: string) => {
    return name?.slice(0, 1);
  };

  return (
    <>
      {!isAboveMediumScreen && <MobileNavbar />}

      <div className="pt-[20px] xl:pt-[30px]">
        <div className="flex md:flex-row flex-col px-5 md:px-0 md:pr-[30px] xl:pr-[40px] gap-[30px]">
          <div className="flex-1 md:pl-[30px] xl:pl-[40px]">
            <p className="font-inter leading-none mb-[12px] text-[24px] xl:text-[30px] font-[600]">
              {pageData?.title}
            </p>
            <div className="text-[#5e5e5e] uppercase text-[14px] xl:text-[17px] font-[400] md:flex grid grid-cols-2 items-center gap-[20px] xl:gap-[25px]">
              <div className="flex items-center gap-[7px] xl:gap-[10px]">
                {pageData?.by?.image ? (
                  <img
                    className="xl:h-[22px] xl:w-[22px] w-[20px] h-[20px] rounded-full"
                    src={pageData?.by?.image}
                    alt=""
                  />
                ) : (
                  <div className="xl:h-[22px] text-[14px] xl:text-[16px] font-[400] xl:w-[22px] w-[20px] h-[20px] rounded-full text-center bg-black text-white">
                    {getInitials(pageData?.by?.name)}
                  </div>
                )}
                <p>{pageData?.by?.name}</p>
              </div>
              <div className="flex items-center gap-[7px] xl:gap-[10px]">
                <img
                  className="xl:w-[22px] w-[20px] -mt-0.5 h-[15px] xl:h-[17px]"
                  src={calender_blog}
                  alt=""
                />
                <p>{pageData?.date}</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-[30px] gap-3">
                {pageData?.tags?.map((pdt: string, index: number) => (
                  <div className="flex items-center gap-[7px] xl:gap-[10px]">
                    <img
                      className="xl:h-[18px] xl:w-[18px] h-[15px] w-[15px]"
                      src={tags}
                      alt=""
                    />
                    <p key={index}>{pdt}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-[20px] xl:mt-[30px] text-[18px] xl:text-[20px] font-[300] leading-snug">
              {pageData?.description}
            </p>
            <img
              className="w-full xl:mt-[28px] my-[20px] xl:mb-[22px]"
              style={{ objectFit: "cover" }}
              src={pageData?.img}
              alt=""
            />
            <div>
              {pageData?.detail?.map((pdd, index: number) => (
                <div className="mt-12" key={index}>
                  <p className="text-[22px] xl:text-[26px] font-[700]">
                    {pdd?.title}
                  </p>
                  <p className="text-[18px] xl:text-[20px] mt-2 xl:mt-3 font-[300] leading-snug">
                    {pdd?.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex md:justify-end justify-center mb-10 md:mb-0 gap-[20px] mt-[25px] scale-90 xl:scale-100 xl:mt-[30px]">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="25"
                  viewBox="0 0 17 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1242 4.4975C15.1498 4.35584 13.8338 4.25 13.0062 4.25C10.7651 4.25 10.6196 4.95833 10.6196 6.09166V8.10917H16.2216L15.7333 12.2883H10.6196V25H3.60519V12.2883H0L0 8.10917H3.60519V5.52416C3.60519 1.98333 5.89441 0 11.6421 0C13.639 0 15.1005 0.212501 17 0.495834L16.1242 4.4975Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.1429 2.95915C26.145 3.46157 25.0711 3.79993 23.9447 3.95271C25.0946 3.17139 25.9776 1.93483 26.3929 0.461403C25.3181 1.1853 24.1248 1.70925 22.8573 1.99327C21.8413 0.766959 20.3929 0 18.7925 0C15.7174 0 13.224 2.82585 13.224 6.31101C13.224 6.80522 13.2738 7.28714 13.3688 7.74957C8.74032 7.48708 4.6375 4.97395 1.89083 1.15556C1.41133 2.0876 1.13721 3.1714 1.13721 4.328C1.13721 6.51711 2.11881 8.44886 3.61428 9.58085C2.70053 9.54804 1.84287 9.26401 1.09107 8.79133V8.87027C1.09107 11.9289 3.01175 14.4789 5.55758 15.0603C5.09075 15.2038 4.5986 15.2818 4.09106 15.2818C3.73189 15.2818 3.38268 15.2418 3.04251 15.1679C3.75089 17.6749 5.80818 19.5 8.24454 19.5513C6.33924 21.2431 3.93816 22.2531 1.329 22.2531C0.878463 22.2531 0.435161 22.2234 0 22.1639C2.46441 23.9541 5.39111 25 8.53586 25C18.778 25 24.379 15.3833 24.379 7.04412C24.379 6.77036 24.3745 6.49763 24.3627 6.22796C25.452 5.33591 26.3965 4.22443 27.1429 2.95915Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M23.2945 0.000174786H1.99166C1.75219 -0.00313094 1.51442 0.0404836 1.29192 0.128528C1.06941 0.216572 0.866536 0.347321 0.694874 0.513308C0.523212 0.679294 0.386127 0.877268 0.291447 1.09592C0.196767 1.31457 0.146347 1.54963 0.143066 1.78765V23.2123C0.146347 23.4504 0.196767 23.6854 0.291447 23.9041C0.386127 24.1227 0.523212 24.3207 0.694874 24.4867C0.866536 24.6527 1.06941 24.7834 1.29192 24.8715C1.51442 24.9595 1.75219 25.0031 1.99166 24.9998H23.2945C23.5339 25.0031 23.7717 24.9595 23.9942 24.8715C24.2167 24.7834 24.4196 24.6527 24.5913 24.4867C24.7629 24.3207 24.9 24.1227 24.9947 23.9041C25.0894 23.6854 25.1398 23.4504 25.1431 23.2123V1.78765C25.1398 1.54963 25.0894 1.31457 24.9947 1.09592C24.9 0.877268 24.7629 0.679294 24.5913 0.513308C24.4196 0.347321 24.2167 0.216572 23.9942 0.128528C23.7717 0.0404836 23.5339 -0.00313094 23.2945 0.000174786ZM7.72606 20.9249H3.95343V9.67504H7.72606V20.9249ZM5.83975 8.10006C5.31945 8.10006 4.82047 7.89462 4.45256 7.52893C4.08466 7.16324 3.87798 6.66725 3.87798 6.15009C3.87798 5.63292 4.08466 5.13694 4.45256 4.77125C4.82047 4.40556 5.31945 4.20012 5.83975 4.20012C6.11602 4.16897 6.3958 4.19618 6.66077 4.27997C6.92573 4.36375 7.1699 4.50222 7.37729 4.68631C7.58468 4.8704 7.75062 5.09595 7.86423 5.3482C7.97785 5.60045 8.03657 5.87371 8.03657 6.15009C8.03657 6.42646 7.97785 6.69972 7.86423 6.95197C7.75062 7.20423 7.58468 7.42978 7.37729 7.61387C7.1699 7.79795 6.92573 7.93642 6.66077 8.02021C6.3958 8.10399 6.11602 8.1312 5.83975 8.10006ZM21.3327 20.9249H17.5601V14.8875C17.5601 13.375 17.0193 12.3875 15.6486 12.3875C15.2244 12.3906 14.8113 12.5228 14.465 12.7665C14.1188 13.0101 13.8559 13.3533 13.712 13.75C13.6136 14.0438 13.5709 14.3532 13.5862 14.6625V20.9124H9.81359C9.81359 20.9124 9.81359 10.6875 9.81359 9.66254H13.5862V11.25C13.9289 10.6589 14.4274 10.1719 15.0279 9.84154C15.6284 9.51115 16.3083 9.34986 16.9942 9.37504C19.5093 9.37504 21.3327 10.9875 21.3327 14.45V20.9249Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M25.1431 5.6875C25.129 5.14822 25.0873 4.61001 25.0181 4.075C24.9247 3.60641 24.7692 3.15239 24.5556 2.725C24.3321 2.26138 24.0321 1.83878 23.6681 1.475C23.3007 1.11526 22.8788 0.815739 22.4181 0.5875C21.9901 0.378055 21.5361 0.226717 21.0681 0.1375C20.5381 0.0581242 20.0038 0.0122001 19.4681 0H5.83057C5.29128 0.0140455 4.75307 0.055767 4.21807 0.125C3.74947 0.218335 3.29545 0.373879 2.86807 0.5875C2.40445 0.810921 1.98185 1.11097 1.61807 1.475C1.25832 1.84239 0.958805 2.26424 0.730566 2.725C0.521122 3.15295 0.369783 3.60697 0.280566 4.075C0.201191 4.60492 0.155267 5.13931 0.143066 5.675C0.143066 5.9125 0.143066 6.25 0.143066 6.35V18.65C0.143066 18.7875 0.143066 19.0875 0.143066 19.3125C0.157112 19.8518 0.198833 20.39 0.268066 20.925C0.361402 21.3936 0.516946 21.8476 0.730566 22.275C0.953987 22.7386 1.25403 23.1612 1.61807 23.525C1.98545 23.8847 2.40731 24.1843 2.86807 24.4125C3.29602 24.6219 3.75004 24.7733 4.21807 24.8625C4.74798 24.9419 5.28238 24.9878 5.81807 25H19.4556C19.9949 24.986 20.5331 24.9442 21.0681 24.875C21.5367 24.7817 21.9907 24.6261 22.4181 24.4125C22.8817 24.1891 23.3043 23.889 23.6681 23.525C24.0278 23.1576 24.3273 22.7358 24.5556 22.275C24.765 21.847 24.9163 21.393 25.0056 20.925C25.0849 20.3951 25.1309 19.8607 25.1431 19.325C25.1431 19.0875 25.1431 18.7875 25.1431 18.65V6.35C25.1431 6.25 25.1431 5.9125 25.1431 5.6875ZM12.9306 21.25C11.4294 21.2426 9.95448 20.8556 8.64307 20.125L3.89307 21.375L5.14307 16.725C4.33696 15.3706 3.90555 13.8261 3.89307 12.25C3.89804 10.4787 4.42707 8.74839 5.41352 7.27713C6.39996 5.80587 7.79972 4.65941 9.43648 3.98214C11.0732 3.30488 12.8738 3.12709 14.6114 3.47117C16.349 3.81526 17.946 4.66583 19.2011 5.91575C20.4562 7.16568 21.3134 8.75907 21.6648 10.4952C22.0161 12.2314 21.8458 14.0327 21.1753 15.6723C20.5048 17.3118 19.3642 18.7163 17.8971 19.7089C16.4299 20.7014 14.7019 21.2377 12.9306 21.25ZM12.9306 4.8375C11.6053 4.85266 10.3078 5.21873 9.17001 5.89842C8.03225 6.57811 7.09491 7.54716 6.45344 8.7069C5.81196 9.86664 5.48925 11.1756 5.51817 12.5007C5.54709 13.8257 5.9266 15.1194 6.61807 16.25L6.79307 16.5375L6.04307 19.275L8.89307 18.5L9.16807 18.6625C10.305 19.3322 11.5986 19.6901 12.9181 19.7C14.9072 19.7 16.8148 18.9098 18.2214 17.5033C19.6279 16.0968 20.4181 14.1891 20.4181 12.2C20.4181 10.2109 19.6279 8.30322 18.2214 6.8967C16.8148 5.49018 14.9072 4.7 12.9181 4.7L12.9306 4.8375ZM17.3056 15.4875C17.1418 15.7606 16.9226 15.9963 16.6621 16.1793C16.4015 16.3623 16.1055 16.4886 15.7931 16.55C15.3262 16.6353 14.8456 16.6053 14.3931 16.4625C13.9673 16.3294 13.5498 16.1708 13.1431 15.9875C11.5977 15.2121 10.2799 14.0492 9.31807 12.6125C8.79542 11.9468 8.4783 11.1432 8.40557 10.3C8.39812 9.94974 8.46438 9.60182 8.60005 9.27881C8.73571 8.9558 8.93775 8.66491 9.19307 8.425C9.26827 8.33973 9.36053 8.2712 9.46388 8.22383C9.56724 8.17646 9.67938 8.15131 9.79307 8.15H10.1431C10.2806 8.15 10.4681 8.15 10.6431 8.5375C10.8181 8.925 11.2806 10.0875 11.3431 10.2C11.3738 10.26 11.3898 10.3264 11.3898 10.3937C11.3898 10.4611 11.3738 10.5275 11.3431 10.5875C11.2878 10.7233 11.2119 10.8498 11.1181 10.9625C11.0056 11.1 10.8806 11.2625 10.7806 11.3625C10.6806 11.4625 10.5556 11.5875 10.6806 11.8125C11.0207 12.3865 11.4417 12.9085 11.9306 13.3625C12.463 13.8329 13.0717 14.2092 13.7306 14.475C13.9556 14.5875 14.0931 14.575 14.2181 14.475C14.3431 14.375 14.7806 13.825 14.9306 13.6C15.0806 13.375 15.2306 13.4125 15.4306 13.4875C15.6306 13.5625 16.7431 14.1 16.9681 14.2125C17.1931 14.325 17.3306 14.375 17.3931 14.475C17.4473 14.8022 17.4172 15.1377 17.3056 15.45V15.4875Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M20.1447 15.0161C19.4064 15.021 18.6784 15.1892 18.0129 15.5085C17.3474 15.8279 16.7611 16.2905 16.2959 16.8632L9.92301 13.9304C10.2226 13.0141 10.2226 12.0263 9.92301 11.11L16.2959 8.1772C17.0477 9.08319 18.0958 9.69485 19.2552 9.90421C20.4145 10.1136 21.6107 9.90719 22.6326 9.32148C23.6544 8.73577 24.4363 7.80839 24.8401 6.70301C25.2439 5.59763 25.2438 4.38531 24.8398 3.28001C24.4357 2.1747 23.6537 1.24746 22.6318 0.661941C21.6098 0.0764194 20.4136 -0.129747 19.2543 0.0798268C18.0949 0.289401 17.047 0.901243 16.2954 1.80737C15.5437 2.7135 15.1368 3.85566 15.1463 5.03229C15.1501 5.3296 15.1793 5.62604 15.2338 5.91836L8.63593 8.95095C7.93251 8.26404 7.04175 7.79971 6.07527 7.61614C5.10878 7.43258 4.10955 7.53794 3.20276 7.91903C2.29597 8.30013 1.52194 8.93999 0.977668 9.75847C0.433392 10.577 0.143066 11.5376 0.143066 12.5202C0.143066 13.5027 0.433392 14.4634 0.977668 15.2819C1.52194 16.1004 2.29597 16.7402 3.20276 17.1213C4.10955 17.5024 5.10878 17.6078 6.07527 17.4242C7.04175 17.2407 7.93251 16.7763 8.63593 16.0894L15.2338 19.122C15.1793 19.4143 15.1501 19.7108 15.1463 20.0081C15.1463 20.9954 15.4395 21.9605 15.9887 22.7814C16.5379 23.6024 17.3186 24.2422 18.2319 24.62C19.1452 24.9978 20.1502 25.0967 21.1198 24.9041C22.0894 24.7115 22.98 24.236 23.6791 23.5379C24.3781 22.8398 24.8542 21.9503 25.047 20.9819C25.2399 20.0136 25.1409 19.0099 24.7626 18.0977C24.3843 17.1856 23.7436 16.406 22.9216 15.8574C22.0997 15.3089 21.1333 15.0161 20.1447 15.0161ZM20.1447 2.53632C20.639 2.53632 21.1222 2.68271 21.5332 2.95697C21.9442 3.23123 22.2645 3.62105 22.4536 4.07712C22.6428 4.5332 22.6923 5.03506 22.5959 5.51923C22.4994 6.0034 22.2614 6.44813 21.9119 6.7972C21.5624 7.14627 21.1171 7.38399 20.6323 7.48029C20.1475 7.5766 19.645 7.52717 19.1883 7.33826C18.7316 7.14934 18.3413 6.82943 18.0667 6.41897C17.7921 6.00851 17.6455 5.52594 17.6455 5.03229C17.6455 4.37032 17.9088 3.73546 18.3775 3.26738C18.8462 2.79929 19.4819 2.53632 20.1447 2.53632ZM5.14956 15.0161C4.65527 15.0161 4.17208 14.8698 3.76109 14.5955C3.3501 14.3212 3.02977 13.9314 2.84061 13.4753C2.65146 13.0193 2.60196 12.5174 2.69839 12.0332C2.79483 11.5491 3.03285 11.1043 3.38237 10.7553C3.73189 10.4062 4.1772 10.1685 4.66199 10.0722C5.14679 9.97587 5.64929 10.0253 6.10596 10.2142C6.56263 10.4031 6.95295 10.723 7.22756 11.1335C7.50217 11.544 7.64875 12.0265 7.64875 12.5202C7.64875 13.1821 7.38544 13.817 6.91675 14.2851C6.44807 14.7532 5.81239 15.0161 5.14956 15.0161ZM20.1447 22.504C19.6504 22.504 19.1672 22.3576 18.7562 22.0834C18.3452 21.8091 18.0249 21.4193 17.8357 20.9632C17.6466 20.5072 17.5971 20.0053 17.6935 19.5211C17.79 19.037 18.028 18.5922 18.3775 18.2432C18.727 17.8941 19.1723 17.6564 19.6571 17.5601C20.1419 17.4638 20.6444 17.5132 21.1011 17.7021C21.5578 17.891 21.9481 18.2109 22.2227 18.6214C22.4973 19.0318 22.6439 19.5144 22.6439 20.0081C22.6439 20.67 22.3806 21.3049 21.9119 21.773C21.4432 22.2411 20.8075 22.504 20.1447 22.504Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex items-end gap-[10px]">
                <p className="uppercase text-[20px] xl:text-[24px] font-[600]">
                  Related Posts
                </p>
                <div className="h-[2px] -translate-y-2 flex-1 bg-[#b9b9b9]" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 xl:mt-[30px] my-[25px] xl:mb-[40px]">
                {pageData?.related?.map((pdr) => (
                  <div
                    className="rounded-[10px] flex items-center gap-3 md:gap-[5px] xl:gap-[8px] md:w-fit border border-[#d9d9d9] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
                    key={pdr?.id}
                  >
                    <img
                      className="py-[5px] xl:py-[7px] w-[90px] xl:w-[110px] h-[80px] xl:h-[91px] pl-[5px] xl:pl-[8px]"
                      src={pdr?.image}
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                    <div className="pt-[12px] pr-[5px] xl:pr-[25px] pb-[17px]">
                      <p className="font-[600] font-inter text-[10px] xl:text-[13px] w-[180px] xl:w-[200px] xl:mb-[15px] mb-2">
                        {pdr?.title}
                      </p>
                      <div className="text-[#5e5e5e] uppercase text-[10px] xl:text-[13px] font-[400] flex items-center gap-[15px] xl:gap-[25px]">
                        <div className="flex items-center gap-[6px] xl:gap-[10px]">
                          {pageData?.by?.image ? (
                            <img
                              className="xl:h-[22px] h-[20px] w-[20px] xl:w-[22px] rounded-full"
                              src={pageData?.by?.image}
                              alt=""
                            />
                          ) : (
                            <div className="xl:h-[22px] h-[20px] text-[14px] xl:text-[16px] font-[400] w-[20px] xl:w-[22px] rounded-full text-center bg-black text-white">
                              {getInitials(pageData?.by?.name)}
                            </div>
                          )}
                          <p>{pageData?.by?.name}</p>
                        </div>
                        <div className="flex items-center gap-[6px] xl:gap-[10px]">
                          <img
                            className="xl:w-[22px] w-[20px] -mt-0.5 h-[15px] xl:h-[18px]"
                            src={calender_blog}
                            alt=""
                          />
                          <p>{pageData?.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] h-[80px] xl:h-[100px] relative my-10">
              <img
                src={popularadds}
                style={{ objectFit: "cover" }}
                alt="popularplacesad"
                className="h-full w-full rounded-[20px]"
              />
              <div className="bg-white border rounded-full px-[4px] pt-[2px] pb-[3px] max-w-fit absolute top-[8px] right-[11px]">
                <p className="text-[12px] font-[600] text-[#0F0E0E]">
                  Sponsored
                </p>
              </div>
            </div>
          </div>
          <Sidebar data={pageData?.recent_updates} />
        </div>
        <div className="h-[30px] xl:h-[35px]" />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
