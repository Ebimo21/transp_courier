import React, { useEffect } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

type Props = {
    ImageId: string
}

const GetInTouch = ({ImageId}: Props) => {
    const [lead, leadInView, leadEntry] = useInView();
    const [p, pView, pEntry] = useInView({delay: 400});
    const [points, pointsView] = useInView({delay: 600});
    
  return (
    <>
        <div  className=' bg-lightYellow group '>
            <div className='flex flex-wrap gap-5'>
                <div  className='basis-full lg:basis-5/12 mx-6 lg:ml-32 my-10 '>
                    <span  className='bg-yellow px-4 py-1 font-bold'>Get In Touch</span>
                    <h3 ref={lead} className={`text-lightBlue text-2xl font-bold  mt-4 opacity-0 ${leadInView? "slide-top":""}`}>Proud to Deliver <br />Excellence Every Time</h3>
                    <p ref={p} className={`'text-light mt-4 text-sm text-lightBlue opacity-0 ${pView? "slide-top":""}`}>We aim to contribute well to your company by brewing eǖ ective supply 
                        chain management strategies. Our professional resources is dedicated 
                        to ensure that there is constant and timely delivery of all consignments 
                        under our care.
                    </p>

                    <div ref={points} className={`mt-5 flex flex-wrap gap-5 md:gap-20 opacity-0 ${pointsView? "slide-top":""}`}>
                        <div className='flex flex-col gap-5'>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Flexibility</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Efficiency</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Best Price</span>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Productivity</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Reliability</span>
                            <span className='flex items-center gap-6 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> 24/7 Support System available</span>
                        </div>
                    </div>

                    <div className='mt-10 flex gap-10 items-center'>
                        <button className='bg-blue px-4 w-40 py-2 text-white font-semibold rounded-3xl '>Contact Us</button>

                        <button className='flex items-center gap-3 font-semibold'>Learn More <BsArrowRight color='#034460' /></button>


                    </div>

                </div>

                <div id={ImageId} className='h grow basis-full lg:basis-5/12'></div>
            </div>
        </div>
    </>
  )
}

export default GetInTouch