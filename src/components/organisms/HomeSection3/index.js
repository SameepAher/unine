import React, { useEffect } from 'react'
import img1 from '../../../images/img1.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Index = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      className="mt-12 lg:mt-24 flex flex-col lg:flex-row justify-center items-center pb-12"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="w-full lg:w-2/5 p-6 lg:p-0">
        <img src={img1} alt="" className="w-full lg:w-4/5 h-64 lg:h-96 m-auto" />
      </div>
      <div className="p-6 lg:mt-6 lg:mt-0 lg:w-2/5">
        <div className="font-semibold text-2xl lg:text-3xl lg:w-3/5 leading-snug">
          Keep your cash flow clear 💸 and keep increasing 🚀
        </div>
        <div className="text-xl lg:text-2xl text-gray-600 mt-6 lg:mt-10 lg:w-4/5 leading-snug">
          See it all at a glance when you link your cash accounts, credit cards, investments, and
          bills.
        </div>
        <div className="mt-12 text-lg lg:mt-20">
          <span className="bg-green-300 py-4 px-6 rounded-lg">Try for now →</span>
        </div>
      </div>
    </div>
  )
}

export default Index
