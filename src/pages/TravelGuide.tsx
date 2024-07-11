import Gallery from "../components/travel_guide/Gallery";
import LatestNews from "../components/travel_guide/LatestNews";
import VideoLibrary from "../components/travel_guide/VideoLibrary";
import Recommended from "../components/travel_guide/Recommended";
import MonthlyFilters from "../components/travel_guide/MonthlyFilters";
import Heritage from "../components/travel_guide/Heritage";
import NewsLetter from "../components/travel_guide/NewsLetter";
import Footer from "../components/home/footer/Footer";
import About from "../components/home/about/About";
import { galleryBanner, galleryImg, heritageBG, recco } from "../assets";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";

const TravelGuide = () => {
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  const heritageData = [
    {
      id: 11,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 12,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 13,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 14,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 15,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 16,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 17,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 18,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
    {
      id: 19,
      type: "Heritage",
      image: heritageBG,
      title: "Tourist Attraction Place In India - Ladakh",
      desc: "Ladakh is a region administered by India as a union territory, which constitutes a part of ...",
    },
  ];

  const recommendationData = [
    {
      id: 7,
      title: "Strasbourg - Capital of Est Region",
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
    {
      id: 8,
      title: "Strasbourg - Capital of Est Region",
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
    {
      id: 9,
      title: "Strasbourg - Capital of Est Region",
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
    {
      id: 10,
      title: "Strasbourg - Capital of Est Region",
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
  ];

  const latestNewsData = [
    {
      id: 3,
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
    {
      id: 4,
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
    {
      id: 5,
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
    {
      id: 6,
      type: "Recommendation",
      desc: "Strasbourg Derivation and names Before the fifth century BC, the city was known as Argantorati...",
      image: recco,
    },
  ];

  const galleryData = {
    top: [
      {
        id: 1,
        type: "heritage",
        title: "Udaipur - A Hurt of Heritage",
        desc: 'Udaipur is known for its beauty, natural heritage, and cultural heritage. It\'s also known as the "White City" because of its many ....',
        img: galleryImg,
      },
      {
        id: 2,
        type: "heritage",
        title: "Udaipur - A Hurt of Heritage",
        desc: 'Udaipur is known for its beauty, natural heritage, and cultural heritage. It\'s also known as the "White City" because of its many ....',
        img: galleryImg,
      },
    ],
    banner: {
      type: "heritage",
      img: galleryBanner,
    },
  };

  const videoData = [
    {
      title: "Udaipur travel guide in hindi with budget instructions",
      timeInMinutes: "05",
      video: "2g811Eo7K8U",
    },
    {
      title: "Udaipur travel guide in hindi with budget instructions",
      timeInMinutes: "05",
      video: "2g811Eo7K8U",
    },
    {
      title: "Udaipur travel guide in hindi with budget instructions",
      timeInMinutes: "05",
      video: "2g811Eo7K8U",
    },
    {
      title: "Udaipur travel guide in hindi with budget instructions",
      timeInMinutes: "05",
      video: "2g811Eo7K8U",
    },
    {
      title: "Udaipur travel guide in hindi with budget instructions",
      timeInMinutes: "05",
      video: "2g811Eo7K8U",
    },
    {
      title: "Udaipur travel guide in hindi with budget instructions",
      timeInMinutes: "05",
      video: "2g811Eo7K8U",
    },
    {
      title: "Udaipur travel guide in hindi with budget instructions",
      timeInMinutes: "05",
      video: "2g811Eo7K8U",
    },
  ];

  return (
    <div>
      {!isAboveMediumScreen && <MobileNavbar />}
      <div className="flex md:flex-row flex-col gap-[20px] xl:gap-[30px] md:px-[20px] px-0  xl:px-[30px] pt-[20px] xl:pt-[30px] justify-evenly mt-[10px] md:mt-0">
        <Gallery data={galleryData} />
        <LatestNews data={latestNewsData} />
      </div>
      <VideoLibrary data={videoData} />
      <Recommended data={recommendationData} />
      <MonthlyFilters />
      <Heritage data={heritageData} />
      <NewsLetter />
      <div className="h-[40px]" />
      <About />
      <Footer />
    </div>
  );
};

export default TravelGuide;
