import useWhenInView from '@/hooks/useWhenInView';
import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import { useInView } from 'react-intersection-observer'

type Props = {}

function HowItWorks({}: Props) {
    const {lead, leadView, p, pView, sub, subView } = useWhenInView();
    const [cardOne, cardOneView] = useInView({triggerOnce: true})
    const [cardTwo, cardTwoView] = useInView({triggerOnce: true})
    const [cardThree, cardThreeView] = useInView({triggerOnce: true})
  return (
    <div>
        <div className='text-center mt-5 p-5'>
            <span ref={sub}  className={`text-xs font-bold opacity-0 block ${subView? "slide-top":""} `}>Logisitics & Transportation</span>
            <h3 ref={lead} className={`text-3xl font-bold text-lightBlue opacity-0 ${leadView? "slide-top":""}`}>How it Works</h3>
            <p ref={p} className={`text-sm font-medium md:w-[500px] mt-2 m-auto opacity-0 ${pView? "slide-top":""}`}>You choose the cities where you&apos;d like to deliver. All deliveries are 
                within a specific service area and delivery services vary by location. 
                Whatever the mode or requirement, we will find and book the ideal expedited
                shipping solution to ensure a timely delivery
            </p>

            <div className='mt-5 flex gap-10 text-left flex-wrap justify-center'>
                <div ref={cardOne} className={`basis-10/12 lg:basis-3/12 p-6 border border-solid border-slate-900 rounded-2xl opacity-0 ${cardOneView? "slide-top":""}`}>
                    <span className='bg-yellow p-4 rounded-full inline-block '> <img width={40} src='./images/Payment.svg' alt='icon'/></span>
                    <h3 className='font-bold text-lightBlue my-3'>Make an Order</h3>
                    <p className='text-sm'>To make an order for shipment of parcel, you can speak with any of our 
                        agents through the following meduim
                    </p>

                    <div className='flex flex-col gap-3 mt-5'>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Email</span>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Call Us</span>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Chat Us</span>
                        </div>
                </div>
                <div ref={cardTwo} className={`basis-10/12 lg:basis-3/12 p-6 border border-solid border-slate-900 rounded-2xl opacity-0 ${cardTwoView? "slide-top":""}`}>
                    <span className='bg-yellow p-4 rounded-full inline-block '> <img width={40} src='./images/Payment 1.svg' alt='icon'/></span>
                    <h3 className='font-bold text-lightBlue my-3'>Make Payment</h3>
                    <p className='text-sm'>Our shipping prices are vyer friendly and affordable. We currently accept payment through the following means:
                    </p>
                    <div className='flex flex-col gap-3 mt-5'>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Bank Transfer</span>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Bitcoin</span>
                        </div>

                </div>
                <div ref={cardThree} className={`basis-10/12 lg:basis-3/12 p-6 border border-solid border-slate-900 rounded-2xl opacity-0 ${cardThreeView? "slide-top":""}`}>
                    <span className='bg-yellow p-4 rounded-full inline-block '> <img width={40} src='./images/Track.svg' alt='icon'/></span>
                    <h3 className='font-bold text-lightBlue my-3'>Track Parcel</h3>
                    <p className='text-sm'>Once your parcel is shipped, a tracking code will be generated for you to monitor your parcel anytime. You can know the exact location your parcel is at any point in time.
                    </p>
                    <div className='flex flex-col gap-3 mt-5'>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span>Know Parcel current location</span>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span>Know Parcel Current Status</span>
                            <span className='flex items-center gap-3 text-blue font-semibold'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span>Know Parcel Exact ETA</span>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks