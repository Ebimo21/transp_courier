import React from 'react'

type Props = {}

function SectionThree({}: Props) {
  return (
    <div className='px-5 py-5 '>
      <div className=' flex flex-wrap gap-20 justify-center items-center'>
        <div className='md:basis-5/12 '>
            <span className='bg-yellow font-semibold p-1 w-20 text-center inline-block'>History</span>
          <h3 className='text-2xl text-blue font-bold my-4'>Globally Conected by Large Network.</h3>
          <p className='font-thin'>Logistic Ultra Express was founded in 2005 by a group of transportation 
            professionals who saw an opportunity to provide a better level of service to businesses. 
            Since our founding, we have grown to become a leading transportation provider, with a presence
            in over 30 countries around the world.</p>

        </div>
        <div className='md:basis-5/12'>
          <img 
            src='./images/History.jpg' 
            alt=""
            className='w-full block m-auto' />
        </div>
      </div>
    </div>
  )
}

export default SectionThree