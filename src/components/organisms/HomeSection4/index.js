import React, { useEffect } from 'react'
import img2 from '../../../images/img2.png'
import globe from '../../../images/globe.png'
import bank from '../../../images/bank.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])
  return (
    <div
      className="lg:mt-12 flex flex-col-reverse lg:flex-row justify-center items-center pb-6 lg:pb-12"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="p-6 lg:pl-20 mt-6 lg:mt-0 lg:w-2/5">
        <div className="font-semibold text-2xl lg:text-3xl lg:px-0 lg:w-3/5 leading-snug">
          Manage regular payments easily 🤑
        </div>
        <div className="mt-12 flex">
          <div className="mr-6 lg:mr-12">
            <img src={globe} alt="" className="w-12 h-12" />
            <div className="mt-10 font-semibold text-xl lg:text-2xl">Globality</div>
            <div className="mt-4 text-gray-500 text-lg lg:text-xl">
              Send payments to the person in front of you and the rest of the world.
            </div>
          </div>
          <div className="">
            <img src={bank} alt="" className="w-12 h-12" />
            <div className="mt-10 font-semibold text-xl lg:text-2xl">Integrate</div>
            <div className="mt-4 text-gray-500 text-lg lg:text-xl">
              We work with local banks and overseas banks so you don't have to worry.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/5 p-6 lg:p-0">
        <img src={img2} alt="" className="w-full lg:w-4/5 h-64 lg:h-96 m-auto lg:m-0" />
      </div>
    </div>
  )
}

export default Index
