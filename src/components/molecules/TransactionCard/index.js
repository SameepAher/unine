import React from 'react'

const index = ({ picSrc, title, description }) => {
  return (
    <div className="border-2 rounded-lg px-6 py-6 hover:bg-green-300 cursor-pointer">
      <img src={picSrc} alt="" className="mb-12 w-16 h-16" />
      <div className="font-semibold text-2xl">{title}</div>
      <div className="mt-8 text-gray-500 text-xl lg:w-auto md:w-4/5 pb-4">{description}</div>
    </div>
  )
}

export default index
