import React from 'react'
import {BsArrowRight} from "react-icons/bs"

type Props = {}

function HowItWorks({}: Props) {
  return (
    <div>
        <div className='text-center p-5'>
            <span className='text-xs text-bold'>Logisitics & Transportation</span>
            <h3 className='text-3xl font-bold text-lightBlue'>How it Works</h3>
            <p className='text-xs font-light md:w-[500px] mt-2 m-auto'>You choose the cities where you&apos;d like to deliver. All deliveries are 
                within a specific service area and delivery services vary by location. 
                Whatever the mode or requirement, we will find and book the ideal expedited
                shipping solution to ensure a timely delivery
            </p>

            <div className='mt-5 flex gap-10 text-left flex-wrap justify-center'>
                <div className='basis-10/12 lg:basis-3/12 p-6 border border-solid border-slate-900 rounded-2xl'>
                    <span className='bg-yellow p-4 rounded-full inline-block '> <img width={40} src='./images/payment.svg' alt='icon'/></span>
                    <h3 className='font-bold text-lightBlue my-3'>Make an Order</h3>
                    <p className='text-sm'>To make an order for shipment of parcel, you can speak with any of our 
                        agents through the following meduim
                    </p>

                    <div className='flex flex-col gap-3 mt-5'>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Email</span>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Call Us</span>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Chat Us</span>
                        </div>

                </div>
                <div className='basis-10/12 lg:basis-3/12 p-6 border border-solid border-slate-900 rounded-2xl'>
                    <span className='bg-yellow p-4 rounded-full inline-block '> <img width={40} src='./images/payment.svg' alt='icon'/></span>
                    <h3 className='font-bold text-lightBlue my-3'>Make an Order</h3>
                    <p className='text-sm'>To make an order for shipment of parcel, you can speak with any of our 
                        agents through the following meduim
                    </p>

                    <div className='flex flex-col gap-3 mt-5'>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Email</span>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Call Us</span>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Chat Us</span>
                        </div>

                </div>
                <div className='basis-10/12 lg:basis-3/12 p-6 border border-solid border-slate-900 rounded-2xl'>
                    <span className='bg-yellow p-4 rounded-full inline-block '> <img width={40} src='./images/payment.svg' alt='icon'/></span>
                    <h3 className='font-bold text-lightBlue my-3'>Make an Order</h3>
                    <p className='text-sm'>To make an order for shipment of parcel, you can speak with any of our 
                        agents through the following meduim
                    </p>

                    <div className='flex flex-col gap-3 mt-5'>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Email</span>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Call Us</span>
                            <span className='flex items-center gap-3 text-blue font-medium'><span className='bg-yellow inline-block rounded-full'><BsArrowRight /></span> Chat Us</span>
                        </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks