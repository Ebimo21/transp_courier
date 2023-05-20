import React from 'react'

type Props = {}

const SectionFour = (props: Props) => {
  return (
    <div className='px-5 py-5 '>
      <div className=' flex flex-wrap gap-20 justify-center items-center'>
        <div className='md:basis-5/12 order-2 '>
            <span className='bg-yellow font-semibold p-1 w-32 text-center inline-block'>Our Partners</span>
          <h3 className='text-2xl text-blue font-bold my-4'>We have established strong relationships with our global partners.</h3>
          <p className='font-thin text-blue'>We strive to become pioneers in the field, providing first quality and cost effective 
            service, and smart solutions to the market. Our 10+ years&apos; experience in the shipping, transport 
            and logistics industry is our strength, which support us to deliver our promises to our customers</p>

        </div>
        <div className='md:basis-5/12'>
          <img 
            src='./images/Partners.jpg' 
            alt=""
            className='w-full block m-auto' />
        </div>
      </div>
    </div>
  )
}

export default SectionFour