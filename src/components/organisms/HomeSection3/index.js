import React from 'react'
import img1 from '../../../images/img1.png'

const index = () => {
  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-center items-center pb-12">
      <div className="w-full lg:w-2/5 p-6">
        <img src={img1} alt="" className="w-4/5 h-80 m-auto" />
      </div>
      <div className="w-4/5 mt-6 lg:mt-0 lg:w-2/5">
        <div className="font-semibold text-3xl px-6 lg:px-0 lg:w-3/5">
          Keep your cash flow clear 💸 and keep increasing 🚀
        </div>
        <div className="text-2xl text-gray-600 mt-6 px-6 lg:px-0 lg:w-4/5">
          See it all at a glance when you link your cash accounts, credit cards, investments, and
          bills.
        </div>
        <div className="mt-12 px-6 text-xl lg:px-0">
          <span className="bg-green-300 py-4 px-6 rounded-lg">Try for now →</span>
        </div>
      </div>
    </div>
  )
}

export default index
