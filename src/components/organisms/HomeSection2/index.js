import React from 'react'
import TransactionCard from 'molecules/TransactionCard'
import card1 from '../../../images/card1.png'
import card2 from '../../../images/card2.png'
import card3 from '../../../images/card3.png'
import card4 from '../../../images/card4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const index = () => {
  AOS.init()
  const cards = [
    {
      picSrc: card1,
      title: 'Always Protected',
      description: 'Shopping with UNINE is even more secure thanks to Buyer Protection.',
    },
    {
      picSrc: card2,
      title: 'Get Reward',
      description: 'You can keep using your favorite card and keep getting rewards.',
    },
    {
      picSrc: card3,
      title: 'No Hidden Fees',
      description: 'You will only be charged when selling goods or requesting payment.',
    },
    {
      picSrc: card4,
      title: 'Free shipping',
      description: 'Changed your mind after buying? Send back the item you purchased',
    },
  ]

  return (
    <div
      className="py-2 lg:py-8"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="text-3xl font-semibold text-center mt-10">Safe & Convenient Transaction</div>
      <div className="text-xl mx-auto md:w-2/5 w-4/5 font-normal text-center mt-8 text-gray-500">
        Want to pay anything so easy with the touch of a finger. Through UNINE, you can make
        practically any transaction.
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 px-12 lg:px-44 mt-10 lg:mt-16 gap-y-10">
        {cards.map((card) => (
          <TransactionCard picSrc={card.picSrc} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  )
}

export default index
