import React, { useState } from 'react'

function Track() {
    const [tracking_id, setTracking_Id] = useState()
    const handleTrackParcel = async()=>{

    }
  return (
        <div>
        <div className='py-5 px-10 md:py-10 md:px-20'>
            
            <h2 className='text-yellow'>Track</h2>
            <p className='text-3xl text-blue font-bold'>Track Your Parcel</p>
        </div>

        <div className='bg-[#6ca4ed] py-10 px-5 md:py-10 md:px-20'>
            <p className='text-[#30363f]'>
                Know where your parcel is and also get notified 
                when package is ready for pickup / delivery
            </p>

            <div className='flex justify-between overflow-hidden mt-5  w-full rounded-full bg-white'>
                <input
                    // onChange={(e)=>setTracking_Id(e.target.value)}
                    name='tracking'
                    type='text'
                    className='bg-transparent basis-7/12 outline-none pl-4'
                    placeholder='Enter Parcel Tracking Number' />

                <button className='bg-yellow basis-3/12 lg:basis-3/12 md:p-4 px-8 rounded-full font-bold text-blue'>Track Parcel</button>
            </div>
        </div>
    </div>
  )
}

export default Track
