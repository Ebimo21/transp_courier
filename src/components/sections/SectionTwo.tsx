import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {}

const SectionTwo = (props: Props) => {
  return (
    <div className='px-5 '>
      <div className=' flex flex-wrap gap-20 justify-center items-center'>
        <div className='md:basis-4/12 order-2 '>
            <span className='bg-yellow p-3'>Vision</span>
          <h3 className='text-2xl text-blue font-bold my-4'>Positioned to be the most innovative and reliable</h3>
          <p className='font-thin'>Our vision is to be the most reliable and innovative logistics partner
            in the world, providing sustainable and cost-eǖ ective solutions to meet our clients&apos; needs
            while creating value for all stakeholders.</p>

        </div>
        <div>
          <img 
            src='./images/Vision.jpg' 
            alt=""
            className='md:max-w-[550px] block m-auto' />
        </div>
      </div>
    </div>
  )
}

export default SectionTwo