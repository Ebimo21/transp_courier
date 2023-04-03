import Link from 'next/link'
import React from 'react'

type Props = {}

const Landing = (props: Props) => {
  return (
        <div 
          id='landing'
          className='h-[70vh] w-screen text-white py-6 flex sm:justify-start   ' >
            <div className='p-6 sm:p-0 sm:w-[1100px] m-auto'>
            <div className='flex items-center justify-left lg:pl-1477  '>
              <div className='md:basis-7/12 '>
                <span className='text-xs font-medium'>Logistics & Transportation</span>
                <h1 className='text-left text-4xl font-bold mt-2 mb-6'>Digital & Trusted Transport Logistic Company</h1>
                < p className='f font-light'>We find delight in  providing comprehensive and professional freight
                  forwarding services, for easing your supply chain needs.
                </p>
                <Link href="/" ><button className='bg-yellow py-2 text-blue font-semibold text-sm rounded-full w-40 mt-5 '>Track Parcel</button></Link>
              </div>
            </div>
            </div>

            {/* <div className='h-40'>
              

            </div> */}

        </div>
  )
}

export default Landing