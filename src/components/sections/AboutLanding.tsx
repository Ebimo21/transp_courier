import React from 'react'

function AboutLanding() {
  return (
    <div className=' bg-lightYellow'>
            <div className='flex flex-wrap gap-5 items-center'>
                <div className='basis-full lg:basis-4/12 mx-6 lg:ml-32 my-10 '>
                    <span className='bg-yellow px-4 py-1'>Services</span>
                    <h3 className='text-lightBlue text-4xl font-bold  mt-4'>A Company You can Trust</h3>
                    <p className='mt-4 font-light text-blue  '>Welcome to our freight company that specialises in air, 
                        ocean, and road tranportation services, as well as warehousing solutions for businesses of all sizes. 
                    </p>

                    <p className='mt-4 font-light text-blue '>We aim to contribute well to your company by brewing effective supply chain management strategies. Our professional
                        resources are dedicated to ensure that there is constant and timely delivery of all consignments under our care.
                    </p>
                </div>
                <div className='h grow basis-full lg:basis-3/12'>
                    <img  src='./images/services.jpg' alt='' className='' />
                </div>
            </div>
        </div>
  )
}

export default AboutLanding
