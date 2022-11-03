import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import logo from '../../../images/logo.png'

const index = () => {
  return (
    <>
      <div className="bg-black text-white px-16 lg:pr-24 py-12 lg:py-20 border-b-2">
        <div className="lg:flex justify-between">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Link to={'/'}>
              <img src={logo} alt="" className="m-auto" />
            </Link>
            <div className="w-fit mx-auto lg:w-auto flex justify-between mt-6">
              <FontAwesomeIcon icon={faFacebookSquare} className="mr-2 w-7 h-7 cursor-pointer" />
              <FontAwesomeIcon icon={faInstagram} className="mx-2 w-7 h-7 cursor-pointer" />
              <FontAwesomeIcon icon={faDiscord} className="mx-2 w-7 h-7 cursor-pointer" />
            </div>
          </div>
          <div className="mt-6 text-lg lg:mt-0 lg:w-2/5 text-center lg:text-left">
            <div
              className="lg:flex justify-between"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div className="lg:w-44 lg:mx-6">
                Technology Park 8-14 Marie Curie Street 08042 Barcelona
              </div>
              <div className="mt-6 lg:mt-0 lg:mx-6">
                <Link to={'learn'}>
                  <div>Learn</div>
                </Link>
                <Link to={'apps'}>
                  <div className="mt-2">Apps</div>
                </Link>
                <Link to={'community'}>
                  <div className="mt-2">Community</div>
                </Link>
              </div>
              <div className="whitespace-nowrap mt-6 lg:mt-0 lg:mx-6">
                <Link to={'legal-mentions'}>
                  <div>Legal Mentions</div>
                </Link>
                <Link to={'terms-of-service'}>
                  <div className="mt-2">Terms of Service</div>
                </Link>
                <Link to={'privacy-policy'}>
                  <div className="mt-2">Privacy Policy</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-6 text-center">©️ 2022 COPYRIGHT BY UNINE</div>
    </>
  )
}

export default index
