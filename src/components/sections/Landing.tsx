import React from 'react'

type Props = {}

const Landing = (props: Props) => {
  return (
    // <Layout>
        <div 
          id='landing'
          className='h-[70vh] w-screen text-white p-6' >

          <div className='flex items-center justify-left '>
            <div className='md:basis-7/12'>
            <span>Logistics & Transportation</span>
            <h1 className='text-left text-4xl font-bold my-6'>Digital & Trusted Transport Logistic Company</h1>
            < p className=''>We find delight in  providing comprehensive and professional freight
              forwarding services, for easing your supply chain needs.
            </p>

            <button className='bg-yellow p-3 rounded-sm mt-5 '>Track Parcel</button>
            </div>
          </div>

          <div className='h-40'>
            

          </div>

        </div>
        // </Layout>
  )
}

export default Landing