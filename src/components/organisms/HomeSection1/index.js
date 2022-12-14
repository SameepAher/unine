import Container from 'atoms/Container'
import Wrapper from 'atoms/Wrapper'
import React, { useEffect } from 'react'
import appStore from '../../../images/appStore.png'
import playStore from '../../../images/playStore.png'
import phone from '../../../images/phone.png'
import mcdLeft from '../../../images/mcdLeft.png'
import mcdRight from '../../../images/mcdRight.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])
  return (
    <Wrapper className="bg-black py-6 lg:pb-40 lg:flex lg:pt-28 lg:justify-center -z-50">
      <div
        className="lg:w-2/5 lg:mx-20"
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <p className="font-mono font-bold text-3xl lg:text-5xl text-white lg:text-left mx-auto text-center lg:leading-snug">
          More Payment Options better than Cash
        </p>
        <div className="mt-6 lg:mt-12 font-mono font-normal text-sm text-white lg:text-left text-center sm:w-3/5 mx-auto lg:mx-0 lg:w-4/5 lg:text-xl lg:leading-8">
          With a UNINE you can access the more than 240 million customers out there, as well as
          offering management tools, options, and payment methods.
        </div>
        <div className="hidden mt-6 lg:mt-12 lg:flex justify-between lg:w-72">
          <img src={appStore} alt="" className="cursor-pointer" />
          <img src={playStore} alt="" className="cursor-pointer" />
        </div>
        <span className="hidden lg:flex mt-6 lg:mt-12 pb-4 lg:pb-0 text-white text-xl">
          Excellent <span className="text-green-300 ml-2"> 4.9 out of 5</span>{' '}
          <span className="ml-4">⭐ ⭐ ⭐ ⭐ ⭐</span>
        </span>
      </div>
      <div
        className=""
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="pb-8 pt-12 lg:py-0 lg:mx-20 relative w-fit mx-auto z-0">
          <img src={phone} alt="" className="mx-auto w-64 h-full" />
          <img
            src={mcdLeft}
            alt=""
            className=" sm:flex border-2 border-black absolute bottom-40 -left-16 sm:-left-24 w-56 h-12"
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <img
            src={mcdRight}
            alt=""
            className="flex border-2 border-black absolute bottom-12 left-20 sm:left-28 w-56 h-12"
            data-aos="slide-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
        </div>
        <div className="lg:hidden w-4/5 py-6 mx-auto">
          <div className="w-4/5 flex justify-center mx-auto">
            <img src={appStore} alt="" className="cursor-pointer mx-4" />
            <img src={playStore} alt="" className="cursor-pointer mx-4" />
          </div>
        </div>
        <Container className="text-center lg:hidden px-2 pb-4">
          <span className="text-white text-xl">
            Excellent <span className="text-green-300">4.9 out of 5</span>{' '}
            <span className="ml-2">⭐⭐⭐⭐⭐</span>
          </span>
        </Container>
      </div>
    </Wrapper>
  )
}

export default Index
