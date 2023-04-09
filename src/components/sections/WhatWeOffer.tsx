import React from 'react'
import ArrowRight from '../iconify/ArrowRight'
import { Warehouse } from '../iconify/Warehouse'
import { OceanFrieght } from '../iconify/OceanFriegth'
import { AirFreight } from '../iconify/AirFreight'
import { RoadFreight } from '../iconify/RoadFreight'


type Props = {}

const WhatWeOffer = (props: Props) => {

    const cards = [
        {
            lead: "+304,521",
            sub: "Parcels Shipped Safely"
        },
        {
            lead: "+120,000",
            sub: "Cities Served Worldwide"
        },
        {
            lead: "+5102",
            sub: "Satisfied Clients"
        },
        {
            lead: "+1200",
            sub: "Companies we Help"
        },
    ]
  return (
    <div className='p-5 max-w-[1100px] mt-5 m-auto '>
        <div className=''>
            <h2 className='font-bold text-blue mb-2 mt-4 text-3xl'>What we Offer</h2>
            <p className='font-light text-sm md:w-[500px]'>We find delight in  providing comprehensive and professional freight
                forwarding services, for easing your supply chain needs.</p>
        </div>

        <div className='bg-blue rounded-[30px] h-[2050px] md:h-[450px] mt-10 md:mt-32 p-2 pt-10 '>
            <div className='flex flex-wrap justify-center mx-5 md:-translate-y-32 gap-5 '>
                {items.map((item, index)=>{
                    return(
                        <div 
                            key={index} 
                            className="flex flex-col shadow-card basis-10/12 md:basis-2/12 grow bg-white py-4 px-5 rounded
                                        b border-b-8 border-solid border-b-yellow ">
                            {/* <div className='w-20 h-16 relative bg-lightYellow p-3 rounded-full'><img className=' absolute w-10 m-auto block' src={item.image}  alt={item.lead}/></div> */}
                            <div className='w-16 h-16 bg-lightYellow p-3 rounded-full'>
                                {item.svg== "Warehousing" && <Warehouse/>}
                                {item.svg== "Ocean Freight" && <OceanFrieght/>}
                                {item.svg== "Air Freight" && <AirFreight/>}
                                {item.svg== "Road Freight" && <RoadFreight/>}
                            </div>
                            <h3 className='font-bold text-blue mt-8 mb-5'>{item.lead}</h3>
                            <p className='t font-light text-sm '>{item.sub}</p>
                            <span className='bg-blue p-1 w-7 h-7 inline-block rounded-full my-4 '><ArrowRight width={20} height={20} fill='#fff'/></span>
                        </div>

                    )
                })}


            </div>

            <div className='flex flex-wrap lg:flex-nowrap gap-20 md:gap-10 mt-10 md:-translate-y-32 text-md text-center'>
            {cards.map((item, index)=>{
              return (
                    <div key={index} className='basis-full md:basis-3/12 text-white'>
                        <h3 className='text-4xl font-bold text-yellow'>{item.lead}</h3>
                        <p className='font-medium mt-2  m-auto w-40'>{item.sub}</p>
                    </div>
              )  
            })}
            </div>
        </div>
    </div>
  )
}


const items = [
    {
    lead: "Wharehousing",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Warehousing.svg",
    svg: "Warehousing",
},
    {
    lead: "Air Freight",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Air_freight.svg",
    svg: "Air Freight",
},
    {
    lead: "Ocean Freight",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Ocean_freight.svg",
    svg: "Ocean Freight",
},
    {
    lead: "Road Freight",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Road_freight.svg",
    svg: "Road Freight",
},
]

export default WhatWeOffer