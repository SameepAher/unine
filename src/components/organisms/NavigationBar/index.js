import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import cross from '../../../images/cross.png'
import dropdownDown from '../../../images/dropDown-down.png'
import logo from '../../../images/logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Index = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  const [mobileViewNavBar, setMobileViewNavBar] = useState(false)
  return (
    <div className="bg-black lg:flex justify-around py-10 lg:pt-14 tracking-wider">
      <div className="my-auto">
        <div className="flex justify-between px-6 text-3xl font-semibold text-white">
          <Link to={'/'}>
            <img
              src={logo}
              alt=""
              className="lg:-mt-1.5"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            />
          </Link>
          <img
            src={cross}
            className={
              mobileViewNavBar ? 'grid lg:hidden w-8 h-8' : 'dropdown hidden lg:hidden my-auto'
            }
            onClick={() => setMobileViewNavBar(!mobileViewNavBar)}
          />
          <div
            className={mobileViewNavBar ? 'hidden' : 'dropdown lg:hidden my-auto'}
            onClick={() => setMobileViewNavBar(!mobileViewNavBar)}
          >
            <div className="bg-gray-200 w-6 h-1"></div>
            <div className="bg-black w-6 h-1"></div>
            <div className="flex">
              <div className="bg-black w-1 h-1"></div>
              <div className="bg-gray-200 w-5 h-1"></div>
            </div>
            <div className="bg-black w-6 h-1"></div>
            <div className="flex">
              <div className="bg-black w-2 h-1"></div>
              <div className="bg-gray-200 w-4 h-1"></div>
            </div>
            <div className="bg-black w-6 h-1"></div>
            <div className="flex">
              <div className="bg-black w-3 h-1"></div>
              <div className="bg-gray-200 w-3 h-1"></div>
            </div>
          </div>
        </div>
        <div
          className={mobileViewNavBar ? 'grid text-white text-right mt-6 px-6 text-xl' : 'hidden'}
        >
          <Link to={'/learn'} className="mt-4">
            <span>Learn</span>
          </Link>
          <Link to={'/apps'} className="mt-4">
            <span>App</span>
          </Link>
          <Link to={'/community'} className="mt-4">
            <span>Community</span>
          </Link>
          <Link to={'/unine-at-work'} className="mt-4">
            <span>Unine at Work</span>
          </Link>
          <Link to={'/signup'} className="mt-4">
            <span>Sign up</span>
          </Link>
          <Link to={'/demo'} className="mt-4">
            <span>Get a demo</span>
          </Link>
        </div>
      </div>
      <div
        className="whitespace-nowrap my-auto text-lg hidden lg:text-xl lg:flex my-auto font-normal text-gray-100"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <Link to={'/learn'}>
          <span className="px-6">Learn</span>
        </Link>
        <span className="px-6 flex cursor-pointer">
          App <img src={dropdownDown} alt="" className="h-4 w-4 my-auto ml-2" />
        </span>
        <span className="px-6 flex cursor-pointer">
          Community <img src={dropdownDown} alt="" className="h-4 w-4 my-auto ml-2" />
        </span>
        <Link to={'/unine-at-work'}>
          <span className="px-6">Unine at Work</span>
        </Link>
      </div>
      <div
        className="whitespace-nowrap my-auto text-lg lg:text-xl hidden lg:flex my-auto font-normal text-gray-100"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <Link to={'/signup'}>
          <span className="px-4 my-auto">Sign up</span>
        </Link>
        <Link to={'/demo'}>
          <span className="ml-4 px-5 rounded-xl py-3 bg-green-400 text-black font-normal">
            Get a demo
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Index
