import React from "react"

const Navbar = ({
  data,
}: {
  data: {
    name: string
    time: {
      from: string
      to: string
    }
  }
}) => {
  const tabs = [
    { title: "Traveller Details" },
    { title: "Package Details" },
    { title: "Cancellation & Date Change" },
  ]

  return (
    <div className="bg-black xl:pt-[25px] py-[18px] xl:pb-[22px] pl-[25px] xl:pl-[30px] text-white">
      <p className="text-[18px] xl:text-[22px] leading-none font-[600]">
        {data?.name} ( {data?.time?.from} - {data?.time?.to} )
      </p>
      <div className="flex items-center gap-[20px] xl:gap-[30px] mt-[9px] xl:mt-[14px] leading-none">
        {tabs?.map((t, index) => (
          <p className="text-[14px] xl:text-[16px] font-[600]" key={index}>
            {index + 1}. <span className="ml-1">{t?.title}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export default Navbar
