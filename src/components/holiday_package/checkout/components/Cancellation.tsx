import React, { useState } from "react"
import { downClose, upOpen } from "../../../../assets"

const Cancellation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`rounded-[15px] pt-[8px] xl:pt-[12px] ${
        isOpen ? "pb-[16px] xl:pb-[28px]" : "pb-[8px] xl:pb-[12px]"
      } pr-[20px] xl:pr-[25px] pl-[19px] xl:pl-[22px] border border-[#d9d9d9] shadow-[0px_0px_0px_0px_rgba(217,217,217,0.25)]`}
      style={{ boxShadow: "0px 0px 2px 0px rgba(217, 217, 217, 0.25)" }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center"
      >
        <p className="text-[18px] xl:text-[20px] font-[600]">3. Cancellation</p>
        {isOpen ? (
          <img
            className="w-[11px] h-[18px]"
            src={upOpen}
            alt=""
          />
        ) : (
          <img
            className="w-[11px] h-[18px]"
            src={downClose}
            alt=""
          />
        )}
      </div>
    </div>
  )
}

export default Cancellation
