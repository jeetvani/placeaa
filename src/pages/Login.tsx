/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { google_signup, login_background } from "../assets";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="relative h-[90vh] bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center bg-[image:var(--bg-image)] "
        style={{
          ["--bg-image" as string]: `url(${login_background})`,
        }}
      ></div>

      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <button
          className="absolute top-4 right-4 text-black text-4xl"
          onClick={handleClose}
        >
          &times;
        </button>

        <div className="w-full max-w-md bg-white bg-opacity-25 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Hello <span className="text-[#AB0101]">Traveller's</span>{" "}
            <span className="text-yellow-400">👋</span>
          </h2>

          <form>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email or Mobile Number
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-black rounded-md mb-4 outline-none border-[1px] placeholder:text-sm"
              placeholder="Enter Email or Mobile Number"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            <button className="w-full bg-[#AB0101] text-white py-2 rounded-full transition duration-300">
              Continue
            </button>
          </form>
          <div className="flex w-full items-center gap-2 mt-4">
            <div className="w-[50%] h-[1px] bg-black" />
            <div className="w-full text-center text-sm text-white">
              or login/signup using
            </div>
            <div className="w-[50%] h-[1px] bg-black" />
          </div>

          <div className="mt-4 flex justify-center">
            <button className="bg-white p-2 rounded-full shadow-md">
              <img src={google_signup} alt="Google" className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-3 rounded-md flex items-center gap-3"
              >
                <div className="bg-black text-white text-[10px] font-bold rounded-full w-16 h-10 flex flex-col items-center justify-center">
                  <p>10%</p>
                  <p>OFF </p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Welcome Offer</p>
                  <p className="text-xs">
                    10% instant discount on First Booking for new customers only
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white text-center">
            By proceeding you agree with our{" "}
            <a href="#" className="text-[#AB0101] font-semibold">
              Privacy Policy
            </a>
            ,{" "}
            <a href="#" className="text-[#AB0101] font-semibold">
              T&Cs
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#AB0101] font-semibold">
              User Agreement
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
