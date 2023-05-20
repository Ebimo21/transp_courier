import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {}

const SectionTwo = (props: Props) => {
  return (
    <div className='px-5 py-5 '>
      <div className=' flex flex-wrap gap-20 justify-center items-center'>
        <div className='md:basis-5/12 order-2 '>
            <span className='bg-yellow text-blue font-semibold p-1 w-20 text-center inline-block'>Vision</span>
          <h3 className='text-2xl text-blue font-bold my-4'>Positioned to be the most innovative and reliable</h3>
          <p className='font-thin text-blue'>Our vision is to be the most reliable and innovative logistics partner
            in the world, providing sustainable and cost-eǖ ective solutions to meet our clients&apos; needs
            while creating value for all stakeholders.</p>

        </div>
        <div className='md:basis-5/12'>
          <img 
            src='./images/Vision.jpg' 
            alt=""
            className=' w-full block m-auto' />
        </div>
      </div>
    </div>
  )
}

export default SectionTwo