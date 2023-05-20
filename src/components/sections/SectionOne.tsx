import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ArrowRight from '../iconify/ArrowRight'

type Props = {}

const SectionOne = (props: Props) => {
  return (
    <div className='pt-10 px-5'>
      <div className=' flex flex-wrap gap-10 justify-center items-center'>
        <div className='md:basis-5/12 '>
          <h3 className='text-4xl lg:text-3xl text-blue font-bold mb-3'>Simplifying Complex Shipping challengess with innovative solutions</h3>
          <p className='font-thin'>Logistics companies are essential to the smooth functioning of global supply chains. 
            They oǖ er a range of services such as transportation, warehousing, inventory management, 
            and distribution to businesses across diǖerent industries. The role of logistics companies 
            has become increasingly important in recent years due to the growth of e-commerce and global
             trade.</p>

             <button className='bg-yellow px-6 py-2 mt-8 rounded-full font-semibold flex items-center gap-4 text-sm '> Get Quote <span className='bg-lightYellow rounded-full'><ArrowRight width={14} height={14} fill='#000'/></span> </button>
        </div>
        <div className='md:basis-5/12'>
          <img 
            src='./images/About Courasel.jpg' 
            alt=""
            className='mds:smax-w-[450px] w-full block m-auto' />
        </div>
      </div>
    </div>
  )
}

export default SectionOne