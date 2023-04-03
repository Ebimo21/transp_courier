import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

type Props = {}

const WhyChooseUs = (props: Props) => {
  return (
    <div>
        <div className='flex flex-wrap gap-10 lg:gap-2 px-5 lg:px-10 py-10 justify-center items-center semibold max-w-[1250px] m-auto' >
            <div className='basis-full grow flex flex-wrap lg:basis-5/12 text-center gap-5 justify-center'>
                <div className='basis-10/12 rounded-sm hover:bg-lightBlue  sm:max-w-[310px] lg:max-w-[240px] leading-3 py-10 px-5 lg:p-5 sm:p-5  shadow-card--features'>
                    <img width={80} className='block m-auto' src='./images/Shipping.png'  />
                    <h4 className='text-lightBlue my-3 lg:text-sm hover:text-yellow font-bold'>Shipping Options</h4>
                    <span className='font-normal lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </span>
                </div>
                <div className='basis-10/12 lg:translate-y-8 rounded-sm hover:bg-lightBlue  sm:max-w-[310px] lg:max-w-[240px] leading-3 py-10 px-5 lg:p-5 sm:p-5  shadow-card--features'>
                    <img width={80} className='block m-auto' src='./images/Deliveries.png'  />
                    <h4 className='text-lightBlue my-3 lg:text-sm hover:text-yellow font-bold'>Timely Deliveries</h4>
                    <span className='font-normal lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </span>
                </div>
                <div className='basis-10/12 rounded-sm hover:bg-lightBlue  sm:max-w-[310px] lg:max-w-[240px] leading-3 py-10 px-5 lg:p-5 sm:p-5  shadow-card--features'>
                    <img width={80} className='block m-auto' src='./images/Customer_Service.png'  />
                    <h4 className='text-lightBlue my-3 lg:text-sm hover:text-yellow font-bold'>Customer Services</h4>
                    <span className='font-normal lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </span>
                </div>
                <div className='basis-10/12 lg:translate-y-8 rounded-sm hover:bg-lightBlue  sm:max-w-[310px] lg:max-w-[240px] leading-3 py-10 px-5 lg:p-5 sm:p-5  shadow-card--features'>
                    <img width={80} className='block m-auto' src='./images/Tracking_System.png'  />
                    <h4 className='text-lightBlue my-3 lg:text-sm hover:text-yellow font-bold'>Tracking Systems</h4>
                    <span className='font-normal lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </span>
                </div>
            </div>
            <div className='basis-full lg:basis-6/12 lg:max-w-[500px] '>
                <span className='bg-yellow px-2 text-xs font-bold py-1'>Our Features</span>
                <h3 className='text-lightBlue text-2xl font-bold  mt-4'>Why Choose Us</h3>
                <p className='text-light mt-4 text-sm text-lightBlue'>Sustainability is an increasingly important factor for many customers when
                    choosing a shipping company. Your shipping company can stand out by demonstrating
                    a commitment to sustainable practices, such as using energy-efficient vehicles,
                    reducing waste and offsetting carbon emissions.
                </p>

                <div className='mt-5 flex  lg:text-xs flex-wrap gap-5'>
                        <div className='flex flex-col gap-3'>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> Reliable and Timely Delivery</span>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> Cost-Effective Shipping Options</span>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> Exceptional Customer Service</span>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> Flexibility and Customization</span>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> Advanced Tracking Systems</span>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> Commitment to Sustainability</span>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> International Shipping Expertise</span>
                            <span className='flex items-center gap-3 text-blue font-medium'>
                                <span className='bg-yellow inline-block rounded-full'>
                                    <AiOutlineCheck /></span> Insurance and Liability Coverage</span>
                        </div>

                    </div>
                        <div className='mt-10 flex gap-10 items-center'>
                            <button className='bg-blue px-4 w-40 py-2 text-white rounded-3xl mt-'>Contact Us</button>

                            <button className='flex items-center gap-3 font-semibold'>Learn More <BsArrowRight color='#034460' /></button>


                        </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs