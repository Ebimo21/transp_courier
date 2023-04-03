import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import ArrowRight from '../iconify/ArrowRight'

type Props = {}

const KnowAboutUs = (props: Props) => {
  return (
    <div className='py-14'>
        <div className='flex items-center justify-center flex-wrap gap-10 lg:gap-5 p-5'>
            <img 
                className='basis-full lg:basis-3/12'
                width={200} 
                src='./images/aboutus.jpg' 
                alt='heavy containers' />

            <div className='basis-full lg:basis-5/12'>
                <span className='text-base font-semibold'>Know About Us</span>
                <h3 className='text-lightBlue font-bold text-2xl md:text-4xl my-4'>We find delight in providing professional freight forwarding services for easing your 
                    supply chain needs.
                </h3>
                <p className='text- font-light'>We aim to contribute well to your company by brewing eǖ ective supply chain management 
                    strategies. Our professional resources is dedicated to ensure that there is constant 
                    and timely delivery of all consignments under our care.
                </p>

                <button className='bg-yellow px-6 py-2 mt-8 rounded-full font-semibold flex items-center gap-4 text-sm '> About Us <span className='bg-lightYellow rounded-full'><ArrowRight width={14} height={14} fill='#000'/></span> </button>
            </div>
        </div>
    </div>
  )
}

export default KnowAboutUs