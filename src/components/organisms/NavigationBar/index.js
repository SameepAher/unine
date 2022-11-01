import React from 'react'
import { Link } from 'gatsby'
import dropdownDown from '../../../images/dropDown-down.png'
import logo from '../../../images/logo.png'

const index = () => {
  return (
    <div className="bg-black lg:flex justify-around py-10">
      {/* Logo and mobile view */}
      <div className="my-auto">
        <div className="flex justify-between px-6 text-3xl font-semibold text-white">
          {/* Logo */}
          <Link to={'/'}>
            <img src={logo} alt="" className="lg:-mt-1.5" />
          </Link>

          {/* Mobile view */}
          <div className="dropdown lg:hidden my-auto">
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
      </div>

      {/* Menu */}
      <div className="whitespace-nowrap my-auto text-lg hidden lg:text-xl lg:flex my-auto font-normal text-gray-100">
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

      {/* Buttons */}
      <div className="whitespace-nowrap my-auto text-lg lg:text-xl hidden lg:flex my-auto font-normal text-gray-100">
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

export default index
