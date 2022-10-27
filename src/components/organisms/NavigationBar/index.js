import React from 'react'
import Wrapper from 'atoms/Wrapper'
import { Link } from 'gatsby'
import Container from 'atoms/Container'

const index = () => {
  return (
    <Wrapper className="bg-black">
      <Container className="flex font-mono justify-between py-7 text-2xl text-white">
        <div className="flex logo">
          <div className="bg-gray-200 w-8 h-8"></div>
          <div className="ml-3">
            <Link to={'/'}>unine</Link>
          </div>
        </div>
        <div className="dropdown lg:hidden">
          <div className="bg-gray-200 w-8 h-8"></div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default index
