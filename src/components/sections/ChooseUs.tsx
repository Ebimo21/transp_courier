import React from 'react'

type Props = {}

const ChooseUs = (props: Props) => {
    const Cards = [
        {
            lead: "Warehousing",
            src: "./images/warehousing.svg",
            alt: "",
        },
        {
            lead: "Air Freight",
            src: "./images/Air_freight.svg",
            alt: "",
        },
        {
            lead: "Ocean Freight",
            src: "./images/Ocean_freight.svg",
            alt: "",
        },
        {
            lead: "Road Freight",
            src: "./images/Road_freight.svg",
            alt: "",
        },
    ]
  return (
    <div className='flex lg:justify-center flex-wrap'>
        <div className='p-5 basis-full  lg:basis-8/12 flex flex-wrap'>
            <div className='lg:basis-5/12'>
                <h3 className='font-bold text-4xl text-blue'>Choose Us</h3>
                <p className='text-blue font-semibold '>For all your Freight Services</p>
            </div>
            <p className='mt-2 lg:basis-7/12'>Experience the diǖerence that our professionalism, expertise, 
                and dedication can make for your business.</p>
        </div>
        
        <div className='flex  flex-wrap gap-3 lg:p-2 justify-center items-center basis-8/12'>
            {Cards.map((item, index)=>{
                return(
                    <div 
                        className='basis-5/12 lg:basis-2/12 border border-solid flex justify-center items-stretch text-center py-4 rounded-2xl flex-wrap'
                        key={index}>
                        <img 
                            className='bg-lightYellow p-3 rounded-full  '
                            width={60}
                            src={item.src}
                            alt={item.alt}
                            />
                        <p className='basis-full text-blue font-medium mt-2'>{item.lead}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ChooseUs