import Container from 'atoms/Container'
import Wrapper from 'atoms/Wrapper'
import React from 'react'

const index = () => {
  return (
    <Wrapper className="border-t-2 border-gray-300 bg-black">
      <Container className="mt-10">
        <div className="font-mono font-bold text-3xl text-white mx-auto">
          <div className="text-center">
            More Payment <br /> Options <br /> Better than Cash
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default index
