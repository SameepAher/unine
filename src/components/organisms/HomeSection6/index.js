import React from 'react'
import appStore from '../../../images/appStore.png'
import playStore from '../../../images/playStore.png'

const index = () => {
  return (
    <div className="bg-green-400 lg:px-56 py-12 lg:py-16">
      <div className="">
        <div className="mx-auto font-semibold text-4xl px-12 lg:px-0 lg:w-3/5 text-center">
          Get Unine App on Google Play or App Store
        </div>
        <div className="mt-12 lg:w-2/5 px-12 lg:px-0 mx-auto text-center">
          Build your financial literacy within a transparant community. Follow other investors,
          share insights with people.
        </div>
        <div className="flex justify-center mt-12">
          <img src={appStore} alt="" className="cursor-pointer mx-4" />
          <img src={playStore} alt="" className="cursor-pointer mx-4" />
        </div>
      </div>
    </div>
  )
}

export default index
