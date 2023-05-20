import useWhenInView from '@/hooks/useWhenInView';
import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

type Props = {}

const WhyChooseUs = (props: Props) => {
    const {lead, leadView, p, pView, sub, subView, cardOne, cardOneView, cardTwo, cardTwoView, cardThree, cardThreeView, cardFour, cardFourView, itemOne, itemOneView } = useWhenInView();
  return (
    <div className=''>
        <div className='flex flex-wrap gap-10 lg:gap-2 lg:px-10 py-10 justify-center items-center semibold max-w-[1250px] m-auto' >
            <div className='basis-full grow flex flex-wrap lg:basis-5/12 text-center gap-4 justify-center'>
                <div ref={cardOne} className={`basis-5/12 rounded-lg sm:max-w-[310px] lg:max-w-[240px] leading-3 py-5 px-5 lg:p-5 sm:p-5  shadow-card--features opacity-0 ${cardOneView? "slide-top":""}`}>
                    <img width={80} className='block m-auto' src='./images/Shipping.png'  />
                    <h4 className='text-lightBlue my-3 text-xs lg:text-sm hover:text-yellow font-bold'>Shipping Options</h4>
                    {/* <p className='font-normal  text-[8px] lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </p> */}
                </div>
                <div ref={cardTwo} className={`basis-5/12 rounded-lg sm:max-w-[310px] lg:max-w-[240px] leading-3 py-5 px-5 lg:p-5 sm:p-5  shadow-card--features lg:translate-y-8 opacity-0 ${cardTwoView? "slide-top":""}`}>
                    <img width={80} className='block m-auto' src='./images/Deliveries.png'  />
                    <h4 className='text-lightBlue my-3 text-xs lg:text-sm hover:text-yellow font-bold'>Timely Deliveries</h4>
                    {/* <p className='font-normal  text-[8px] lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </p> */}
                </div>
                <div ref={cardThree} className={`basis-5/12 rounded-lg sm:max-w-[310px] lg:max-w-[240px] leading-3 py-5 px-5 lg:p-5 sm:p-5  shadow-card--features opacity-0 ${cardThreeView? "slide-top":""}`}>
                    <img width={80} className='block m-auto' src='./images/Customer_Service.png'  />
                    <h4 className='text-lightBlue my-3 text-xs lg:text-sm hover:text-yellow font-bold'>Customer Service</h4>
                    {/* <p className='font-normal leading-5 lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </p> */}
                </div>
                <div ref={cardFour} className={`basis-5/12 rounded-lg sm:max-w-[310px] lg:max-w-[240px] leading-3 py-5 px-5 lg:p-5 sm:p-5  shadow-card--features lg:translate-y-8 opacity-0 ${cardFourView? "slide-top":""}`}>
                    <img width={80} className='block m-auto' src='./images/Tracking_System.png'  />
                    <h4 className='text-lightBlue my-3 text-xs lg:text-sm hover:text-yellow font-bold'>Tracking Systems</h4>
                    {/* <p className='font-normal leading-5 lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque commodo consecteter.
                    </p> */}
                </div>
            </div>
            <div className='basis-full lg:basis-6/12 px-6 lg:max-w-[500px] '>
                <span ref={sub} className={`bg-yellow px-2 text-xs font-bold py-1  opacity-0 ${subView? "slide-top":""}`}>Our Features</span>
                <h3 ref={lead} className={`text-lightBlue text-2xl font-bold  mt-4 opacity-0 ${leadView? "slide-top":""}`}>Why Choose Us</h3>
                <p ref={p} className={`text-light mt-4 text-base text-lightBlue opacity-0 ${pView? "slide-top":""}`}>Sustainability is an increasingly important factor for many customers when
                    choosing a shipping company. Your shipping company can stand out by demonstrating
                    a commitment to sustainable practices, such as using energy-efficient vehicles,
                    reducing waste and offsetting carbon emissions.
                </p>

                <div ref={itemOne} className={`mt-5 flex text-sm  lg:text-xs flex-wrap gap-5 opacity-0 ${itemOneView? "slide-top":""}`}>
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
                        <div className='mt-10 flex justify-between items-center'>
                            <button className='basis-5/12 bg-blue px-4 w-40 py-2 text-white rounded-3xl '>Contact Us</button>

                            <button className='flex items-center gap-3 font-semibold'>Learn More <BsArrowRight color='#034460' /></button>


                        </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs