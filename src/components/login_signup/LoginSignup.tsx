import React, { Dispatch } from "react"
import { close, google, loginBg } from "../../assets"

const LoginSignup = ({
  setLoginPopup,
  setIsLoggedIn,
}: {
  setLoginPopup: Dispatch<boolean>
  setIsLoggedIn: Dispatch<boolean>
}) => {
  return (
    <div className="fixed h-screen w-screen bg-[#000000f0] text-white z-[489645216875] flex justify-center items-center">
      <div className="relative lg:scale-75 xl:scale-90 2xl:scale-100">
        <img
          src={close}
          alt="close"
          className="absolute xl:-top-7 xl:-right-7 lg:-top-5 lg:-right-5"
          onClick={() => setLoginPopup(false)}
        />
        <img src={loginBg} alt="login" className="" />
        <div className="bg-[#F5F5F5] flex flex-col justify-between bottom-[27px] rounded-[20px] px-[21px] py-[27px] text-black font-inter absolute top-[27px] right-[27px]">
          <div>
            {" "}
            <p className="text-[20px] font-[600] leading-[24.2px]">
              Hello <span className="text-[#AB0101]">Travellers</span>👋
            </p>
            <p className="mt-[22px] text-[16px] font-[500] leading-[19.36px] mb-[8px]">
              Email or Mobile Number
            </p>
            <input
              className="text-[13px] font-[500] leading-[15.73px] px-[13.6px] w-full py-[12px] outline-none border-[0.7px] border-black rounded-[10px]"
              type="text"
              placeholder="Enter Email or Mobile Number"
            />
            <button
              onClick={() => {
                setIsLoggedIn(true)
                setLoginPopup(false)
              }}
              className="text-[15px] font-[700] mt-[12px] pb-[10px] pt-[12px] leading-[18.15px] w-full bg-[#AB0101] rounded-full text-white"
            >
              Continue
            </button>
            <div className="flex items-center gap-[9px] mt-[27px]">
              <div className="h-[1px] bg-[#5E5E5E] flex-1"></div>
              <p className="text-[#5E5E5E] font-[500] text-[12px] leading-[14.52px]">
                or login/signup using
              </p>
              <div className="h-[1px] bg-[#5E5E5E] flex-1"></div>
            </div>
            <div className="flex justify-center">
              <img
                src={google}
                alt=""
                className="h-[40px] w-[40px] mt-[22px]"
              />
            </div>
          </div>

          <p className="font-[400] w-[360px] text-[11px] leading-[13.31px]">
            By proceeding you agree with our{" "}
            <span className="font-[700] text-[#AB0101]">Privacy Policy</span> ,{" "}
            <span className="font-[700] text-[#AB0101]">T&Cs</span> and{" "}
            <span className="font-[700] text-[#AB0101]">User Agreement</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
