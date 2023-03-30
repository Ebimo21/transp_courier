import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

type Props = {}

const GetInTouch = (props: Props) => {
  return (
    <>
        <div className=' bg-lightYellow'>
            <div className='flex flex-wrap gap-5'>
                <div className='basis-full lg:basis-5/12 mx-6 lg:ml-32 my-10 '>
                    <span className='bg-yellow px-4 py-1'>Get In Touch</span>
                    <h3 className='text-lightBlue text-xl font-bold  mt-4'>Proud to Deliver <br />Excellence Every Time</h3>
                    <p className='text-light mt-4 text-sm text-lightBlue'>We aim to contribute well to your company by brewing eǖ ective supply 
                        chain management strategies. Our professional resources is dedicated 
                        to ensure that there is constant and timely delivery of all consignments 
                        under our care.
                    </p>

                    <div className='mt-5 flex flex-wrap gap-20'>
                        <div className='flex flex-col gap-5'>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Flexibility</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Flexibility</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Flexibility</span>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Flexibility</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Flexibility</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Flexibility</span>
                        </div>
                    </div>

                    <div className='mt-10 flex gap-10 items-center'>
                        <button className='bg-blue px-4 w-40 py-2 text-white rounded-3xl mt-'>Contact Us</button>

                        <button className='flex items-center gap-3 font-semibold'>Learn More <BsArrowRight color='#034460' /></button>


                    </div>

                </div>

                <div id='transport' className='h grow basis-full lg:basis-5/12'></div>
            </div>
        </div>
    </>
  )
}

export default GetInTouch