import React from 'react'

const index = () => {
  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-center items-center pb-12">
      <div className="w-4/5 mt-6 lg:mt-0 lg:w-2/5 lg:px-24">
        <div className="font-bold text-2xl">
          Keep your cash flow clear 💸 <br /> and keep increasing 🚀
        </div>
        <div className="text-xl text-gray-600 mt-6">
          See it all at a glance when you link your cash accounts, credit cards, investments, and
          bills.
        </div>
        <div className="mt-12">
          <span className="bg-green-300 py-4 px-6 rounded-lg">Try for now →</span>
        </div>
      </div>
      <div className="w-full lg:w-2/5 p-6">
        <div className="w-4/5 h-80 m-auto border-2 rounded-lg"></div>
      </div>
    </div>
  )
}

export default index
