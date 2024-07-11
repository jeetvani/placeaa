import React, { useState } from "react";
import { calenderGrey, downClose, downCloseGrey, profile } from "../assets";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import About from "../components/home/about/About";
import Footer from "../components/home/footer/Footer";

const Profile = () => {
  const [profileCard, setProfileCard] = useState<{
    img: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    gstNumber: string;
    companyName: string;
    title: string;
    anniversary: string;
    contact: { countryCode: string; number: string };
    isNumVerified: boolean;
    isMailVerified: boolean;
    email: string;
    maritalStatus: string;
    location: { pincode: string; city: string; state: string; address: string };
    travellers: Array<{
      firstName: string;
      lastName: string;
      gender: string;
      age: number;
      contact: { countryCode: string; number: string };
      email: string;
    }>;
  }>({
    img: profile,
    firstName: "Shubh",
    lastName: "",
    dateOfBirth: "",
    anniversary: "",
    title: "Mr.",
    nationality: "",
    contact: {
      countryCode: "+91",
      number: "7600081901",
    },
    isNumVerified: true,
    isMailVerified: false,
    email: "shubh.placeaa@gmail.com",
    maritalStatus: "Married",
    location: {
      pincode: "390019",
      city: "Vadodara",
      state: "Gujarat",
      address: "",
    },
    travellers: [
      {
        firstName: "Shubh",
        lastName: "Mangukiya",
        gender: "Male",
        age: 20,
        email: "shubh.placeaa@gmail.com",
        contact: {
          countryCode: "+91",
          number: "7600081901",
        },
      },
      {
        firstName: "Justin",
        lastName: "Bieber",
        gender: "Male",
        age: 25,
        email: "justin.bieber@gmail.com",
        contact: {
          countryCode: "+91",
          number: "7600081901",
        },
      },
    ],
    gstNumber: "",
    companyName: "",
  });

  const [selectedSection, setSelectedSection] = useState<string>("My Profile");
  const isAboveMediumScreen = useMediaQuery({ minWidth: 768 });

  const [inputData, setInputData] = useState<typeof profileCard>(profileCard);

  const sections = [
    { name: "My Profile", navigator: "profile-my-profile" },
    { name: "GST Details", navigator: "profile-gst-details" },
    { name: "Save Travellers", navigator: "profile-save-travellers" },
  ];

  const changeSection = (name: string, navigator: string) => {
    setSelectedSection(name);
    const element = document.getElementById(navigator);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const returnCityState = (pincode: number) => {
    return "vadodara, gujarat";
  };

  const saveProfileData = () => {
    setProfileCard(inputData);
  };

  const getInitials = (name: string) => {
    const nameArray = name?.split(" ");
    if (nameArray?.length > 1) {
      return (
        nameArray[0]?.slice(0, 1) +
        nameArray[nameArray?.length - 1]?.slice(0, 1)
      );
    } else {
      return nameArray[0]?.slice(0, 1);
    }
  };

  return (
    <>
      {!isAboveMediumScreen && <MobileNavbar />}
      <div className="px-[25px] xl:px-[40px] pb-[30px] xl:pb-[329px] pt-[20px] xl:pt-[30px] flex flex-col md:flex-row gap-[20px] xl:gap-[30px]">
        <div
          className="rounded-[20px] md:sticky top-5 h-fit py-[34px] px-[35px] border border-[#d9d9d9]"
          style={{ boxShadow: "0px 0px 10px 0px #D9D9D940" }}
        >
          <div className="flex gap-[15px] xl:gap-[20px] items-center">
            <div className="relative">
              <img
                className="xl:h-[90px] rounded-full h-[80px] w-[80px] xl:w-[90px]"
                src={profileCard?.img}
                alt=""
              />
              <p className="absolute text-white bg-black rounded-full xl:px-[11px] px-[8px] py-[1px] xl:py-[2px] bottom-0 right-0 text-[12px] xl:text-[13px] font-[600] leading-[15px]">
                Edit
              </p>
            </div>
            <div>
              <p className="text-black text-[22px] xl:text-[26px] font-[600] leading-[35px]">
                Hi {profileCard?.firstName} !
              </p>
              <div className="text-[14px] xl:text-[16px] leading-[20px] flex items-center gap-[7px]">
                <p className="text-[#5E5E5E] font-[400]">
                  {profileCard?.contact?.number}
                </p>
                <p className="text-[#13A180] font-[600]">
                  {profileCard?.isNumVerified && "verified"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-[25px] xl:mt-[40px] flex-col text-[16px] xl:text-[18px] font-[600] leading-[22px] text-black">
            {sections?.map((s) => (
              <button
                onClick={() => changeSection(s?.name, s?.navigator)}
                className={`w-full ${
                  selectedSection === s?.name ? "bg-[#AB0101] text-white" : ""
                } py-[10px] xl:py-[14px] rounded-[15px]`}
              >
                {s?.name}
              </button>
            ))}
            <button className="w-full py-[10px] xl:py-[14px] rounded-[15px]">
              Log Out
            </button>
          </div>
        </div>
        <div className="flex-1 space-y-[24px] xl:space-y-[26px]">
          <div
            id="profile-my-profile"
            className="rounded-[20px] p-[25px] xl:p-[30px] border border-[#d9d9d9]"
            style={{ boxShadow: "0px 0px 10px 0px #D9D9D940" }}
          >
            <div>
              <p className="text-[22px] font-[600]">My Profile</p>
              <div className="mt-[16px] xl:mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-x-[6px] xl:gap-x-[8px] gap-y-[10px] xl:gap-y-[12px]">
                <div className="rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                    First & Middle Name
                  </p>
                  <input
                    className="md:text-[16px]  xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    value={inputData?.firstName}
                    name="firstName"
                  />
                </div>
                <div className="rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                    Last Name
                  </p>
                  <input
                    className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    value={inputData?.lastName}
                    name="lastName"
                  />
                </div>
                <div className="rounded-[10px] flex border items-center border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <div className="flex items-center gap-[5px] xl:gap-[10px] pr-[19.5px]">
                    <p className="text-[16px] xl:text-[18px] leading-none font-[400]">
                      {inputData?.contact?.countryCode}
                    </p>
                    <img
                      className="xl:w-[11px] xl:h-[18px] w-[9px] h-[13px]"
                      src={downClose}
                      alt=""
                    />
                  </div>
                  <div className="border-l pl-[10px] xl:pl-[15px] border-l-[#5E5E5E]">
                    <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                      Mobile Number
                    </p>
                    <input
                      className="text-[16px] xl:text-[18px] font-[400] tracking-[1px] w-full outline-none border-none"
                      type="number"
                      max={10}
                      maxLength={10}
                      onChange={(e) =>
                        setInputData((prev: any) => ({
                          ...prev,
                          contact: {
                            ...prev.contact,
                            number: e.target.value,
                          },
                        }))
                      }
                      value={inputData?.contact?.number}
                      name="number"
                    />
                  </div>
                  <p
                    className={`${
                      inputData?.isNumVerified
                        ? "font-[600] text-[#13A180]"
                        : "font-[400] underline text-[#5E5E5E] cursor-pointer"
                    } flex-1 text-right text-[16px] xl:text-[18px] leading-[22px]`}
                  >
                    {inputData?.isNumVerified ? "verified" : "verify"}
                  </p>
                </div>
                <div className="flex items-center rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <div>
                    <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                      Email Address
                    </p>
                    <input
                      className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                      type="email"
                      onChange={(e) =>
                        setInputData((prev: any) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      value={inputData?.email}
                      name="email"
                    />
                  </div>
                  <p
                    className={`${
                      inputData?.isMailVerified
                        ? "font-[600] text-[#13A180]"
                        : "font-[400] underline text-[#5E5E5E] cursor-pointer"
                    } flex-1 text-right text-[16px] xl:text-[18px] leading-[25.14px]`}
                  >
                    {inputData?.isMailVerified ? "verified" : "verify"}
                  </p>
                </div>
                <div className="flex items-center rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[9px] px-[14px] pt-[8px] pb-[6px] xl:pt-[12px]">
                  <input
                    className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        dateOfBirth: e.target.value,
                      }))
                    }
                    placeholder="Date of Birth"
                    value={inputData?.dateOfBirth}
                    name="dateOfBirth"
                  />
                  <img
                    className="xl:h-[20px] h-[15px] w-[15px] xl:w-[20px] text-[#5E5E5E]"
                    src={calenderGrey}
                    alt=""
                  />
                </div>
                <div className="flex items-center rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[9px] px-[14px] pt-[8px] pb-[6px] xl:pt-[12px]">
                  <input
                    className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        nationality: e.target.value,
                      }))
                    }
                    placeholder="Nationality"
                    value={inputData?.nationality}
                    name="nationality"
                  />
                  <img
                    className="xl:h-[10px] h-[7px] w-[13px] xl:w-[16px] text-[#5E5E5E]"
                    src={downCloseGrey}
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <div>
                    <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                      Marital Status
                    </p>
                    <input
                      className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                      type="string"
                      onChange={(e) =>
                        setInputData((prev: any) => ({
                          ...prev,
                          maritalStatus: e.target.value,
                        }))
                      }
                      value={inputData?.maritalStatus}
                      name="maritalStatus"
                    />
                  </div>
                  <img
                    className="xl:h-[10px] h-[7px] w-[13px] xl:w-[16px] text-[#5E5E5E]"
                    src={downCloseGrey}
                    alt=""
                  />
                </div>
                <div className="flex items-center rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <input
                    className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        anniversary: e.target.value,
                      }))
                    }
                    placeholder="Anniversary Date"
                    value={inputData?.anniversary}
                    name="anniversary"
                  />
                  <img
                    className="xl:h-[20px] h-[15px] w-[15px] xl:w-[20px] text-[#5E5E5E]"
                    src={calenderGrey}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex justify-end mt-[22px] xl:mt-[35px]">
                <button
                  onClick={saveProfileData}
                  className="text-white bg-[#AB0101] font-inter text-[15px] md:text-[18px] xl:text-[20px] font-[500] leading-[26px] rounded-[10px] px-[45px] xl:px-[60px] py-[5px] xl:py-[8px]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div
            id="profile-gst-details"
            className="rounded-[20px] p-[25px] xl:p-[30px] border border-[#d9d9d9]"
            style={{ boxShadow: "0px 0px 10px 0px #D9D9D940" }}
          >
            <div>
              <p className="text-[22px] font-[600]">GST Details</p>
              <div className="mt-[16px] xl:mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-x-[6px] xl:gap-x-[8px] gap-y-[10px] xl:gap-y-[12px]">
                <div className="rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                    GST Number
                  </p>
                  <input
                    className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        gstNumber: e.target.value,
                      }))
                    }
                    value={inputData?.gstNumber}
                    name="gstNumber"
                  />
                </div>
                <div className="rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                    Company Name
                  </p>
                  <input
                    className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        companyName: e.target.value,
                      }))
                    }
                    value={inputData?.companyName}
                    name="companyName"
                  />
                </div>
                <div className="rounded-[10px] flex border items-center border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <div className="flex items-center gap-[5px] xl:gap-[10px] pr-[19px]">
                    <p className="text-[16px] xl:text-[18px] leading-none font-[400]">
                      {inputData?.contact?.countryCode}
                    </p>
                    <img
                      className="xl:w-[11px] xl:h-[18px] w-[8px] h-[12px]"
                      src={downClose}
                      alt=""
                    />
                  </div>
                  <div className="border-l pl-[10px] xl:pl-[19px] border-l-[#5E5E5E]">
                    <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                      Mobile Number
                    </p>
                    <input
                      className="text-[16px] xl:text-[18px] font-[400] tracking-[1px] w-full outline-none border-none"
                      type="number"
                      max={10}
                      maxLength={10}
                      onChange={(e) =>
                        setInputData((prev: any) => ({
                          ...prev,
                          contact: {
                            ...prev.contact,
                            number: e.target.value,
                          },
                        }))
                      }
                      value={inputData?.contact?.number}
                      name="number"
                    />
                  </div>
                  <p
                    className={`${
                      inputData?.isNumVerified
                        ? "font-[600] text-[#13A180]"
                        : "font-[400] underline text-[#5E5E5E] cursor-pointer"
                    } flex-1 text-right text-[16px] xl:text-[18px] leading-[25px]`}
                  >
                    {inputData?.isNumVerified ? "verified" : "verify"}
                  </p>
                </div>
                <div className="flex items-center rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <div>
                    <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                      Email Address
                    </p>
                    <input
                      className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                      type="email"
                      onChange={(e) =>
                        setInputData((prev: any) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      value={inputData?.email}
                      name="email"
                    />
                  </div>
                  <p
                    className={`${
                      inputData?.isMailVerified
                        ? "font-[600] text-[#13A180]"
                        : "font-[400] underline text-[#5E5E5E] cursor-pointer"
                    } flex-1 text-right text-[16px] xl:text-[18px] leading-[25px]`}
                  >
                    {inputData?.isMailVerified ? "verified" : "verify"}
                  </p>
                </div>
                <div className="flex items-center rounded-[10px] border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                    Address
                  </p>
                  <input
                    className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                    type="string"
                    onChange={(e) =>
                      setInputData((prev: any) => ({
                        ...prev,
                        location: {
                          ...prev?.location,
                          address: e.target.value,
                        },
                      }))
                    }
                    value={inputData?.location?.address}
                    name="address"
                  />
                </div>
                <div className="rounded-[10px] flex items-center justify-between border border-[#d9d9d9] xl:px-[16px] xl:pb-[8px] px-[14px] pt-[8px] pb-[6px] xl:pt-[10px]">
                  <div>
                    <p className="text-[12px] xl:text-[14px] font-[400] text-[#5e5e5e] leading-none">
                      Pincode
                    </p>
                    <input
                      className="text-[16px] xl:text-[18px] font-[400] w-full outline-none border-none"
                      type="string"
                      onChange={(e) =>
                        setInputData((prev: any) => ({
                          ...prev,
                          location: {
                            ...prev?.location,
                            pincode: e.target.value,
                          },
                        }))
                      }
                      value={inputData?.location?.pincode}
                      name="pincode"
                    />
                  </div>
                  <p className="text-black font-[400] xl:leading-[25px] text-[14px] xl:text-[18px]">
                    {inputData?.location?.city}, {inputData?.location?.state}
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-[22px] xl:mt-[35px]">
                <button
                  onClick={saveProfileData}
                  className="text-white bg-[#AB0101] font-inter text-[15px] md:text-[18px] xl:text-[20px] font-[500] leading-[26px] rounded-[10px] px-[45px] xl:px-[60px] py-[5px] xl:py-[8px]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div
            id="profile-save-travellers"
            className="rounded-[20px] p-[25px] xl:p-[30px] border border-[#d9d9d9]"
            style={{ boxShadow: "0px 0px 10px 0px #D9D9D940" }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
              <div>
                <p className="font-[600] text-[18px] xl:text-[20px] xl:leading-[35px]">
                  Save Travellers
                </p>
                <p className="font-[400] text-[14px] xl:text-[16px] xl:leading-[22px]">
                  You have {profileCard?.travellers?.length}{" "}
                  {profileCard?.travellers?.length > 1
                    ? "travellers"
                    : "traveller"}
                </p>
              </div>
              <button className="border-[2px] font-[600] md:w-fit w-[50%]  text-[12px] md:text-[18px] xl:text-[20px] leading-[25px] border-[#082485] text-[#082485] bg-transparent rounded-full px-[25px] xl:px-[32px] py-[1.5px] xl:py-[2.4px]">
                Add Traveller
              </button>
            </div>
            <div className="mt-[21px] space-y-[10px] xl:space-y-[12px]">
              {profileCard?.travellers?.map((pct, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row md:items-center justify-between text-[14px] xl:text-[16px] font-[400] leading-[20px]"
                >
                  <p className="border border-[#B9B9B9] w-fit text-center rounded-full text-[12px] xl:text-[18px] leading-[22px] py-[1.5px] xl:py-[6px] px-[7px] xl:px-[8px]">
                    {getInitials(`${pct?.firstName} ${pct?.lastName}`)}
                  </p>
                  <div className="flex items-center gap-[5px] mt-1 md:mt-0">
                    <p>
                      {pct?.firstName} {pct?.lastName}
                    </p>
                    <p>
                      ( {pct?.gender}, {pct?.age} Years )
                    </p>
                    77
                  </div>
                  <p>
                    {pct?.contact?.countryCode}
                    {pct?.contact?.number}
                  </p>
                  <p>{pct?.email}</p>
                  <p className="text-[#082485] font-[600]">View Details</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {!isAboveMediumScreen && (
        <>
          <About />
          <Footer />
        </>
      )}
    </>
  );
};

export default Profile;
