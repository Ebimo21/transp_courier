import React, {useEffect} from 'react'
import ArrowRight from '../iconify/ArrowRight'
import { Warehouse } from '../iconify/Warehouse'
import { OceanFrieght } from '../iconify/OceanFriegth'
import { AirFreight } from '../iconify/AirFreight'
import { RoadFreight } from '../iconify/RoadFreight'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'


type Props = {}

const WhatWeOffer = (props: Props) => {

    const [lead, leadView] = useInView({triggerOnce: true});
    const [p, pView] = useInView({delay: 1200, triggerOnce: true});
    const [sub, subView] = useInView({delay: 400, triggerOnce: true});
    const [cardOne, cardOneView] = useInView({triggerOnce: true, delay: 400})
    const [cardTwo, cardTwoView] = useInView({triggerOnce: true, delay: 600})
    const [cardThree, cardThreeView] = useInView({triggerOnce: true, delay: 800})
    const [cardFour, cardFourView] = useInView({triggerOnce: true, delay: 1000})

    const [itemOne, itemOneView] = useInView({triggerOnce: true, delay: 400})
    const [itemTwo, itemTwoView] = useInView({triggerOnce: true, delay: 600})
    const [itemThree, itemThreeView] = useInView({triggerOnce: true, delay: 800})
    const [itemFour, itemFourView] = useInView({triggerOnce: true, delay: 1000})
    

    const cards = [
        {
            lead: 304_521,
            sub: "Parcels Shipped Safely",
            card: cardOne,
            ref: cardOneView,
        },
        {
            lead: 120_000,
            sub: "Cities Served Worldwide",
            card: cardTwo,
            ref: cardTwoView,
        },
        {
            lead: 5_102,
            sub: "Satisfied Clients",
            card: cardThree,
            ref: cardThreeView,
        },
        {
            lead: 1_200,
            sub: "Companies we Help",
            card: cardFour,
            ref: cardFourView,
        },
    ]

    const items = [
        {
        lead: "Wharehousing",
        sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        image: "./images/Warehousing.svg",
        svg: "Warehousing",
        card: itemOne,
        ref: itemOneView,
    },
        {
        lead: "Air Freight",
        sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        image: "./images/Air_freight.svg",
        svg: "Air Freight",
        card: itemTwo,
        ref: itemTwoView,
    },
        {
        lead: "Ocean Freight",
        sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        image: "./images/Ocean_freight.svg",
        svg: "Ocean Freight",
        card: itemThree,
        ref: itemThreeView,
    },
        {
        lead: "Road Freight",
        sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
        image: "./images/Road_freight.svg",
        svg: "Road Freight",
        card: itemFour,
        ref: itemFourView,
    },
    ]
  return (
    <div className='p-5 max-w-[1100px] mt-5 m-auto '>
        <div className=''>
            <h2 ref={lead} className={`font-bold text-blue mb-2 mt-4 text-3xl opacity-0 ${leadView? "slide-top":""}`}>What we Offer</h2>
            <p ref={p} className={`font-light text-sm md:w-[500px] opacity-0 ${pView? "slide-top":""}`}>We find delight in  providing comprehensive and professional freight
                forwarding services, for easing your supply chain needs.</p>
        </div>

        <div className='bg-blue rounded-[30px] h-[2050px] md:h-[450px] mt-10 md:mt-32 p-2 pt-10 '>
            <div className='flex flex-wrap justify-center mx-5 md:-translate-y-32 gap-5 '>
                {items.map((item, index)=>{
                    return(
                        <div 
                            ref={item.card}
                            key={index} 
                            className={`flex flex-col shadow-card basis-10/12 md:basis-2/12 grow bg-white py-4 px-5 rounded
                                        b border-b-8 border-solid border-b-yellow opacity-0 ${item.ref? "slide-top":""}`}>
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
                    <div ref={item?.card} key={index} className={`basis-full md:basis-3/12 text-white opacity-0 ${item.ref? "slide-top":""}`}>
                        <h3 className='text-4xl font-bold text-yellow'>{item?.ref &&<CountUp duration={3.5} separator=',' prefix='+ ' end={item.lead} />}</h3>
                        <p className='font-medium mt-2  m-auto w-40'>{item.sub}</p>
                    </div>
              )  
            })}
            </div>
        </div>
            <div></div>
    </div>
  )
}




export default WhatWeOffer