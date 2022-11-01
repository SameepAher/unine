import React from 'react'

const index = () => {
  return (
    <>
      <div className="bg-black text-white px-16 lg:pr-24 py-12 lg:py-20 border-b-2">
        <div className="lg:flex justify-between">
          <div>
            <div className="flex logo w-36 mx-auto">
              <div className="design-logo m-auto flex">
                <div className="bg-gray-200 w-1.5 h-6 rounded-l-md"></div>
                <div>
                  <div className="w-1.5 h-4 bg-black"></div>
                  <div className="bg-gray-200 w-1.5 h-2"></div>
                </div>
                <div className="bg-gray-200 w-1.5 h-6"></div>
                <div>
                  <div className="bg-gray-200 w-1.5 h-1.5"></div>
                  <div className="w-1.5 h-3 bg-black"></div>
                  <div className="bg-gray-200 w-1.5 h-1.5"></div>
                </div>
                <div>
                  <div className="bg-gray-200 w-1.5 h-1.5"></div>
                  <div className="w-1.5 h-1.5 bg-black"></div>
                  <div className="bg-gray-200 w-1.5 h-3"></div>
                </div>
                <div>
                  <div className="bg-gray-200 w-1.5 h-[5.8px]"></div>
                  <div className="w-1.5 h-4 bg-black"></div>
                </div>
                <div className="bg-gray-200 w-1.5 h-6 rounded-r-md"></div>
              </div>
              <div className="ml-3 text-3xl">unine</div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-8 h-6 border-2 rounded-lg mx-2"></div>
              <div className="w-8 h-6 border-2 rounded-lg mx-2"></div>
              <div className="w-8 h-6 border-2 rounded-lg mx-2"></div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:w-2/5 lg:relative text-center lg:text-left">
            <div className="lg:flex justify-between lg:w-4/5 lg:absolute right-0">
              <div className="lg:w-44">Technology Park 8-14 Marie Curie Street 08042 Barcelona</div>
              <div className="mt-6 lg:mt-0 ">
                <div>Learn</div>
                <div className="mt-2">Apps</div>
                <div className="mt-2">Community</div>
              </div>
              <div className="whitespace-nowrap mt-6 lg:mt-0">
                <div>Legal Mentions</div>
                <div className="mt-2">Terms of Service</div>
                <div className="mt-2">Privacy Policy</div>
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
