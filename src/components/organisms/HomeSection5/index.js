import React, { useEffect } from 'react'
import person from '../../../images/person.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Index = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      className="mt-12 pb-20"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="text-2xl md:text-4xl py-7 text-center font-semibold">Our Customer Says</div>
      <div className="grid lg:grid-cols-2 py-4 px-4 md:px-12 xl:px-36 gap-y-12">
        <div className="lg:px-6">
          <div className="mx-auto p-8 border-2 rounded-lg">
            <div className="font-semibold text-xl lg:text-2xl">I paid off $24,000 first year</div>
            <div className="mt-6 pb-6 border-b-2 text-lg md:text-xl">
              “Without the system and the support, I would have been canoeing without a paddle!
              Thanks for being my paddle, UNINE. 😉 👍 💪”
            </div>
            <div className="flex py-6">
              <div className="">
                <img src={person} alt="" className="rounded-full w-16 h-16" />
              </div>
              <div className="ml-4 m-auto">
                <p>Ronald Richards</p>
                <p>First Years of using UNINE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-6">
          <div className="mx-auto p-8 border-2 rounded-lg">
            <div className="font-semibold text-xl lg:text-2xl">My net worth is already $43k</div>
            <div className="mt-6 pb-6 border-b-2 text-lg md:text-xl">
              “When I got frustrated with Mint and its lack of flexibility, I found YNAB through
              some random blog post. I never looked back. 💰”
            </div>
            <div className="flex py-6">
              <div className="">
                <img src={person} alt="" className="rounded-full w-16 h-16" />
              </div>
              <div className="ml-4 m-auto">
                <p>Wade Warren</p>
                <p>3 Years of using UNINE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
