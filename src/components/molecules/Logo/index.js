import React from 'react'
import { Link } from 'gatsby'

const index = () => {
  return (
    <div className="flex justify-between px-6 text-3xl font-semibold text-white">
      <Link to={'/'}>
        <div className="flex logo">
          <div className="design-logo m-auto flex">
            <div className="bg-gray-200 w-1.5 h-6 rounded-l-md"></div>
            <div>
              <div className="w-1.5 h-4 bg-black"></div>
              <div className="bg-gray-200 w-1.5 h-2"></div>
            </div>
            <div className="bg-gray-200 w-1.5 h-6"></div>
            <div>
              <div className="bg-gray-200 w-1.5 h-1.5"></div>
              <div className="w-1.5 h-3 bg-black"></div>
              <div className="bg-gray-200 w-1.5 h-1.5"></div>
            </div>
            <div>
              <div className="bg-gray-200 w-1.5 h-1.5"></div>
              <div className="w-1.5 h-1.5 bg-black"></div>
              <div className="bg-gray-200 w-1.5 h-3"></div>
            </div>
            <div>
              <div className="bg-gray-200 w-1.5 h-[5.8px]"></div>
              <div className="w-1.5 h-4 bg-black"></div>
            </div>
            <div className="bg-gray-200 w-1.5 h-6 rounded-r-md"></div>
          </div>
          <div className="ml-3">unine</div>
        </div>
      </Link>
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
  )
}

export default index
