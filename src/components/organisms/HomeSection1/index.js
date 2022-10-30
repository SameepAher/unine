import Container from 'atoms/Container'
import Wrapper from 'atoms/Wrapper'
import React from 'react'

const index = () => {
  return (
    <Wrapper className="bg-black py-6 lg:pb-40 lg:flex lg:pt-24 lg:justify-center">
      <div className="lg:w-2/5">
        <div className="font-mono font-bold text-3xl lg:text-5xl text-white mx-auto">
          <div className="lg:text-left w-full mx-auto text-center">
            More Payment Options <br /> Better than Cash
          </div>
        </div>
        <div className="mt-6 lg:mt-12 font-mono font-normal text-sm text-white mx-auto">
          <div className="lg:text-left text-center lg:w-3/5 lg:text-xl">
            With a UNINE you can access the more than 240 million customers out there, as well as
            offering management tools, options, and payment methods.
          </div>
        </div>
        <div className="hidden mt-6 lg:mt-12 bg-black lg:flex justify-between lg:w-96">
          <div className="border-2 rounded-lg w-40 h-16 rounded-lg"></div>
          <div className="border-2 rounded-lg w-44 h-16 rounded-lg"></div>
        </div>
        <div className="hidden lg:flex mt-6 lg:mt-12 pb-4">
          <span className="text-white text-xl">
            Excellent <span className="text-green-300">4.9 out of 5</span>{' '}
            <span className="ml-4">⭐ ⭐ ⭐ ⭐ ⭐</span>
          </span>
        </div>
      </div>
      <div className="lg:border-2 rounded-lg lg:ml-4 border-white">
        <div className="py-8 lg:py-0 bg-black">
          <div className="border-2 rounded-lg w-72 lg:w-96 h-96 lg:h-full mx-auto"></div>
        </div>
        <Container className="lg:hidden sm:w-3/5 px-2 py-6 bg-black flex justify-between">
          <div className="border-2 rounded-lg w-36 h-16 rounded-lg"></div>
          <div className="border-2 rounded-lg w-40 h-16 rounded-lg"></div>
        </Container>
        <Container className="text-center lg:hidden px-2 pb-4">
          <span className="text-white text-xl">
            Excellent <span className="text-green-300">4.9 out of 5</span>{' '}
            <span className="ml-2">⭐⭐⭐⭐⭐</span>
          </span>
        </Container>
      </div>
    </Wrapper>
  )
}

export default index
