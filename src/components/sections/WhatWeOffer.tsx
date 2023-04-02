import React from 'react'


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
    <div className='p-5 '>
        <h2 className='font-medium text-blue mb-2 mt-4 text-3xl'>What we Offer</h2>
        <p className='font-light text-sm'>We find delight in  providing comprehensive and professional freight
              forwarding services, for easing your supply chain needs.</p>

        <div className='bg-blue rounded-[30px] h-[2300px] md:h-[550px] mt-10 md:mt-32 p-2 pt-10 '>
            <div className='flex flex-wrap justify-center mx-5 md:-translate-y-32 gap-8 '>
                {items.map((item, index)=>{
                    return(
                        <div 
                            key={index} 
                            className="shadow-card basis-10/12 md:basis-2/12 grow bg-white py-8 px-5 rounded
                                        b border-b-8 border-solid border-b-yellow ">
                            <img className='bg-lightYellow p-3 rounded-full ' src={item.image} width={60} alt={item.lead}/>
                            <h3 className='font-bold text-xl text-blue mt-8 mb-5'>{item.lead}</h3>
                            <p className='t font-light'>{item.sub}</p>
                            {/* <span className='bg-blue p-1 w-10 h- inline-block rounded-full '>x</span> */}
                        </div>

                    )
                })}


            </div>

            <div className='flex flex-wrap lg:flex-nowrap gap-20 md:gap-10 mt-10 md:-translate-y-10 text-2xl text-center'>
            {cards.map((item, index)=>{
              return (
                    <div key={index} className='basis-full md:basis-3/12 text-white'>
                        <h3 className='text-5xl font-bold text-yellow'>{item.lead}</h3>
                        <p className='f font-bold mt-2 w-60 m-auto'>{item.sub}</p>
                    </div>
              )  
            })}
            </div>

            {/* <div className='flex flex-wrap lg:flex-nowrap gap-20 md:gap-10 mt-10 md:-translate-y-10 text-2xl text-center'>
                <div className='basis-full md:basis-3/12 text-white'>
                    <h3 className='text-6xl font-bold text-yellow'>+304,521</h3>
                    <p className='f font-bold mt-2 w-60 m-auto'>Parcels Shipped Safely</p>
                </div>
                <div className='basis-full md:basis-3/12 text-white'>
                    <h3 className='text-6xl font-bold text-yellow'>+304,521</h3>
                    <p className='f font-bold mt-2 w-60 m-auto'>Parcels Shipped Safely</p>
                </div>
                <div className='basis-full md:basis-3/12 text-white'>
                    <h3 className='text-6xl font-bold text-yellow'>+304,521</h3>
                    <p className='f font-bold mt-2 w-60 m-auto'>Parcels Shipped Safely</p>
                </div>
                <div className='basis-full md:basis-3/12 text-white'>
                    <h3 className='text-6xl font-bold text-yellow'>+304,521</h3>
                    <p className='f font-bold mt-2 w-60 m-auto'>Parcels Shipped Safely</p>
                </div>

            </div> */}


            
        </div>
    </div>
  )
}


const items = [
    {
    lead: "Wharehousing",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Warehousing.svg"
},
    {
    lead: "Air Freight",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Air_freight.svg"
},
    {
    lead: "Ocean Freight",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Ocean_freight.svg"
},
    {
    lead: "Road Freight",
    sub: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    icon: "We find delight in  providing comprehensive and professional freight forwarding services, for easing your supply chain needs.",
    image: "./images/Road_freight.svg"
},
]

export default WhatWeOffer