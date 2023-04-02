import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

type Props = {}

const Team = (props: Props) => {
    type Team ={
        name: String,
        role: String,
        socials: {
            facebook: URL,
            twitter: URL,
            instagram: URL,
        },
        img: String,
        alt: String,
    } 
    const team: Team[]=  [
        {
            name: "Devon Lane",
            role: "Founder / CEO",
            socials: {
                facebook: new URL("http://localhost:3000/"),
                twitter: new URL("http://localhost:3000/"),
                instagram: new URL("http://localhost:3000/"),
            },
            img: "",
            alt: "",
        },
        {
            name: "Devon Lane",
            role: "Founder / CEO",
            socials: {
                facebook: new URL("http://localhost:3000/"),
                twitter: new URL("http://localhost:3000/"),
                instagram: new URL("http://localhost:3000/"),
            },
            img: "",
            alt: "",
        },
        {
            name: "Devon Lane",
            role: "Founder / CEO",
            socials: {
                facebook: new URL("http://localhost:3000/"),
                twitter: new URL("http://localhost:3000/"),
                instagram: new URL("http://localhost:3000/"),
            },
            img: "",
            alt: "",
        },
        {
            name: "Devon Lane",
            role: "Founder / CEO",
            socials: {
                facebook: new URL("http://localhost:3000/"),
                twitter: new URL("http://localhost:3000/"),
                instagram: new URL("http://localhost:3000/"),
            },
            img: "",
            alt: "",
        },
        
    ]
  return (
    <div>
        <div className='p-5 py-10'>
            <h3 className='text-lightBlue text-2xl font-bold text-center'>Meet Our Team</h3>
            <p className='text-lightBlue font-thin text-center w-8/12 m-auto '>Welcome to our transportation services agency. We are the best at our transportation services ever.</p>
            <div className='flex flex-wrap justify-center gap-5 mt-5'>
                {team.map((item, index)=>{
                    return (
                        <div className='max-w-[288px] basis-8/12' key={index}>
                            <img src="./images/partners.jpg" alt='' />
                            <div className='bg-white -translate-y-10 w-5/6 justify-between rounded-sm flex items-end p-3  m-auto'>
                                <div>
                                    <h4 className='text-blue font-bold'>{item.name}</h4>
                                    <p className='font-light '>{item.role}</p>
                                </div>

                                <div className='flex items-centers'>
                                    <Link href={item.socials.twitter}>
                                        <BsTwitter/>
                                    </Link>
                                    <Link href={item.socials.facebook}>
                                        <BsFacebook />
                                    </Link>
                                    <Link href={item.socials.instagram}>
                                        <BsInstagram />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Team