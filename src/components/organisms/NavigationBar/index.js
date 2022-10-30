import React from 'react'
import { Link } from 'gatsby'
import Logo from 'molecules/Logo'
import dropdownDown from '../../../images/dropDown-down.png'

const index = () => {
  return (
    <div className="bg-black lg:flex justify-around py-7">
      <div className="my-auto">
        <Logo />
      </div>
      <div className="whitespace-nowrap my-auto text-lg hidden lg:flex my-auto font-light text-gray-200">
        <Link to={'/learn'}>
          <span className="px-4">Learn</span>
        </Link>
        <span className="px-4 flex cursor-pointer">
          App <img src={dropdownDown} alt="" className="h-4 w-4 my-auto ml-2" />
        </span>
        <span className="px-4 flex cursor-pointer">
          Community <img src={dropdownDown} alt="" className="h-4 w-4 my-auto ml-2" />
        </span>
        <Link to={'/unine-at-work'}>
          <span className="px-4">Unine at Work</span>
        </Link>
      </div>
      <div className="whitespace-nowrap my-auto text-lg hidden lg:flex my-auto font-light text-gray-300">
        <Link to={'/signup'}>
          <span className="px-4 my-auto">Sign up</span>
        </Link>
        <Link to={'/demo'}>
          <span className="ml-2 px-4 rounded-xl py-2 bg-green-400 text-gray-800 font-normal">
            Get a demo
          </span>
        </Link>
      </div>
    </div>
  )
}

export default index
