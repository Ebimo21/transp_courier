import React from 'react'
import { Warehouse } from '../iconify/Warehouse'
import { OceanFrieght } from '../iconify/OceanFriegth'
import { AirFreight } from '../iconify/AirFreight'
import { RoadFreight } from '../iconify/RoadFreight'

type Props = {}

const ChooseUs = (props: Props) => {
    const Cards = [
        {
            lead: "Warehousing",
            src: "./images/warehousing.svg",
            alt: "",
            svg: "Warehousing",
        },
        {
            lead: "Air Freight",
            src: "./images/Air_freight.svg",
            alt: "",
            svg: "Air Freight",

        },
        {
            lead: "Ocean Freight",
            src: "./images/Ocean_freight.svg",
            alt: "",
            svg: "Ocean Freight",

        },
        {
            lead: "Road Freight",
            src: "./images/Road_freight.svg",
            alt: "",
            svg: "Road Freight",
        },
    ]
  return (
    <div className='flex lg:justify-center flex-wrap my-10'>
        <div className='p-6 pl-10 basis-full  lg:basis-8/12 flex flex-wrap'>
            <div className='lg:basis-5/12'>
                <h3 className='font-bold text-4xl text-blue'>Choose Us</h3>
                <p className='text-blue font-semibold '>For all your Freight Services</p>
            </div>
            <p className='mt-2 lg:basis-7/12'>Experience the diǖerence that our professionalism, expertise, 
                and dedication can make for your business.</p>
        </div>
        
        <div className='flex pl-5  flex-wrap gap-3 lg:p-2 items-center basis-11/12 md:basis-7/12'>
            {Cards.map((item, index)=>{
                return(
                    <div 
                        // className='basis-5/12 lg:basis-2/12 border border-solid flex justify-center items-stretch text-center py-4 rounded-2xl flex-wrap'
                        className='basis-5/12 lg:basis-2/12 border border-solid border-blue flex justify-center items-stretch text-center py-8 rounded-2xl flex-wrap md:basis-2/12 grow bg-white px-5'
                        key={index}>
                        <div className='w-16 h-16 bg-lightYellow p-3 rounded-full'>
                                {item.svg== "Warehousing" && <Warehouse/>}
                                {item.svg== "Ocean Freight" && <OceanFrieght/>}
                                {item.svg== "Air Freight" && <AirFreight/>}
                                {item.svg== "Road Freight" && <RoadFreight/>}
                            </div>
                        <p className='basis-full text-blue font-medium mt-2'>{item.lead}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ChooseUs