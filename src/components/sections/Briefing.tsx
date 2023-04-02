import React from 'react'

function Briefing() {
    const Images = [
        {
            src: "./images/Warehouse_Services.jpg",
            alt: ""
        },
        {
            src: "./images/Ocean_Services.jpg",
            alt: ""
        },
        {
            src: "./images/Air_Services.jpg",
            alt: ""
        },
        {
            src: "./images/Road_Services.jpg",
            alt: ""
        },
    ]
  return (
    <div>
        <div className='p-5'>
            <div className='flex flex-wrap gap-3 justify-center items-center'>
                {Images.map((item, index)=>{
                    return(
                        <div 
                        key={index} 
                        className='basis-5/12 lg:basis-5/12'
                        >
                        <img 
                            alt={item.alt}
                            src={item.src}
                            />
                        </div>
                    )
                })}

                <div className='basis-11/12 lg:basis-8/12 text-justify'>
                <p className='mt-4'>
            We take pride in being a reliable partner for our clients, oǖ ering a wide range of logistics services to meet their 
needs and help them succeed in today&apos;s competitive market. Our dedicated team of professionals has years 
of experience in the transportation and logistics industry and is committed to providing exceptional customer 
service and support.
            </p>

            <p className='mt-4'>
            We have a fleet of modern, well-maintained vehicles and equipment, including aircraft, ships, and trucks, to 
ensure timely and eǗcient delivery of goods. Our state-of-the-art warehousing facilities are equipped with the 
latest technology to provide secure storage, inventory management, and distribution services.
            </p>

            <p className='mt-4'>
            At our company, we understand the importance of delivering goods on time, every time. That&apos;s why we oǖ er 
flexible and customizable solutions to meet our clients&apos; unique requirements, whether it&apos;s a one-time shipment 
or ongoing logistics support.
            </p>

            <p className='mt-4'>
            We pride ourselves on our commitment to sustainability and are constantly looking for ways to reduce our 
carbon footprint and promote eco-friendly practices in the logistics industry
            </p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Briefing