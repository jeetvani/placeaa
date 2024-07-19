import { useState } from "react";
import { login_background } from "../assets";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div className="relative h-screen bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center bg-[image:var(--bg-image)] "
        style={{
          ["--bg-image" as string]: `url(${login_background})`,
        }}
      ></div>

      <div className="relative h-full flex flex-col items-center justify-center p-6 pt-20">
        <button
          className="absolute top-4 right-4 text-black text-3xl"
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
              OTP has been sent
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border-black rounded-md mb-2 outline-none border-[1px] placeholder:text-sm"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <p className="text-[#082485] font-semibold mb-2">Resend OTP</p>
            <button className="w-full bg-[#AB0101] text-white py-2 rounded-full transition duration-300">
              Verify
            </button>
          </form>

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

export default Otp;
