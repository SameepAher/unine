import React from 'react'

const index = ({ picSrc, title, description }) => {
  return (
    <div className="border-2 rounded-lg px-6 py-6 hover:bg-green-300 cursor-pointer">
      <img src={picSrc} alt="" className="mb-12 w-10 h-10" />
      <div className="font-bold">{title}</div>
      <div className="mt-4 text-gray-500">{description}</div>
    </div>
  )
}

export default index
