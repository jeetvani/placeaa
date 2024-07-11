import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { backBtn } from "../assets"

const SingleFAQ = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [data, setData] = useState<{
    title: string
    id: number
    answer: string
  }>()

  useEffect(() => {
    const setPageData = () => {
      if (!location?.state?.faqData) return
      setData(location?.state?.faqData)
    }
    setPageData()
  }, [location])

  return (
    <div className="min-h-screen p-10 xl:py-10 xl:px-40">
      <div className="flex items-center justify-center relative">
        <img
          onClick={() => navigate(-1)}
          className="xl:h-[30px] absolute left-0 xl:w-[30px] h-[25px] w-[25px] cursor-pointer"
          src={backBtn}
          alt=""
        />
        <p className="text-center text-3xl xl:text-4xl font-[600] tracking-wide">
          {data?.title}
        </p>
      </div>
      <p className="text-justify text-xl xl:text-[22px] font-[400] tracking-wide mt-16 xl:mt-24 leading-tight xl:leading-snug">
        {data?.answer}
      </p>
    </div>
  )
}

export default SingleFAQ
