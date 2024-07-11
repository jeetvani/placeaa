import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"

const MiniFooter = () => {
  return (
    <div className="bg-[#050505] font-karla text-white px-[38px]">
      <div
        style={{ borderBottom: "1px solid #535353" }}
        className="flex items-center justify-between  py-[23px]"
      >
        <p className="text-[24px] font-[400]">&copy; 2024 PLACEAA PVT. LTD.</p>
        <div className="flex items-center gap-[25px]">
          <div>
            <FaInstagram size={25} />
          </div>
          <div>
            <FaFacebookF size={19} />
          </div>
          <div>
            <FaTwitter size={23} />
          </div>
          <div>
            <FaYoutube size={25} />
          </div>
        </div>
      </div>
      <div className="py-[28px] flex items-center gap-[30px] text-[#d9d9d9] font-[400] text-[16px]">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </div>
    </div>
  )
}

export default MiniFooter
