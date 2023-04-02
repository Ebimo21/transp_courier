import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {}

const SectionOne = (props: Props) => {
  return (
    <div className='pt-10 px-5'>
      <div className=' flex flex-wrap gap-20 justify-center items-center'>
        <div className='md:basis-4/12 '>
          <h3 className='text-2xl text-blue font-bold mb-3'>Simplifying Complex Shipping challengess with innovative solutions</h3>
          <p className='font-thin'>Logistics companies are essential to the smooth functioning of global supply chains. 
            They oǖ er a range of services such as transportation, warehousing, inventory management, 
            and distribution to businesses across diǖerent industries. The role of logistics companies 
            has become increasingly important in recent years due to the growth of e-commerce and global
             trade.</p>

             <button className='bg-yellow px-6 py-2 mt-8 rounded-full flex items-center gap-4 text-sm '> Get Quote <AiOutlineArrowRight/> </button>

        </div>
        <div>
          <img 
            src='./images/About Courasel.jpg' 
            alt=""
            className='md:max-w-[550px] block m-auto' />
        </div>
      </div>
    </div>
  )
}

export default SectionOne