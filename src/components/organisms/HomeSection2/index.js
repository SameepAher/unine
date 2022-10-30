import React from 'react'

const index = () => {
  const cards = [
    {
      picSrc: '',
      title: 'Always Protected',
      description: 'Shopping with UNINE is even more secure thanks to Buyer Protection.',
    },
    {
      picSrc: '',
      title: 'Always Protected',
      description: 'Shopping with UNINE is even more secure thanks to Buyer Protection.',
    },
    {
      picSrc: '',
      title: 'Always Protected',
      description: 'Shopping with UNINE is even more secure thanks to Buyer Protection.',
    },
    {
      picSrc: '',
      title: 'Always Protected',
      description: 'Shopping with UNINE is even more secure thanks to Buyer Protection.',
    },
  ]

  return (
    <div className="py-2 lg:py-16">
      <div className="text-3xl font-semibold text-center mt-10">Safe & Convenient Transaction</div>
      <div className="text-xl mx-auto md:w-full font-normal text-center mt-8 text-gray-500">
        Want to pay anything so easy with the touch of a finger. Through <br /> UNINE, you can make
        practically any transaction.
      </div>
      <div className="grid lg:grid-cols-4 px-12 lg:px-44 mt-10 lg:mt-16 gap-y-4 lg:gap-x-8">
        {cards.map((card) => (
          <div className="border-2 rounded-lg px-6 py-6 hover:bg-green-300 cursor-pointer">
            <img src={card.picSrc} alt="" className="mb-12 w-10 h-10" />
            <div className="font-bold">{card.title}</div>
            <div className="mt-4 text-gray-500">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index
