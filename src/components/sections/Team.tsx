import useWhenInView from '@/hooks/useWhenInView';
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

type Props = {}

const Team = (props: Props) => {
    const { cardOne, cardOneView, cardTwo, cardTwoView, cardThree, cardThreeView, cardFour, cardFourView } = useWhenInView();

    type Team ={
        name: String,
        role: String,
        socials: {
            facebook: URL,
            twitter: URL,
            instagram: URL,
        },
        img: string,
        alt: string,
        card: ((node?: Element | null) => void),
        ref: boolean
        
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
            img: "./images/Partners.jpg",
            alt: "team",
            card: cardOne,
            ref: cardOneView,
        },
        {
            name: "Devon Lane",
            role: "Founder / CEO",
            socials: {
                facebook: new URL("http://localhost:3000/"),
                twitter: new URL("http://localhost:3000/"),
                instagram: new URL("http://localhost:3000/"),
            },
            img: "./images/Partners.jpg",
            alt: "team",
            card: cardTwo,
            ref: cardTwoView,
        },
        {
            name: "Devon Lane",
            role: "Founder / CEO",
            socials: {
                facebook: new URL("http://localhost:3000/"),
                twitter: new URL("http://localhost:3000/"),
                instagram: new URL("http://localhost:3000/"),
            },
            img: "./images/Partners.jpg",
            alt: "team",
            card: cardThree,
            ref: cardThreeView
        },
        {
            name: "Devon Lane",
            role: "Founder / CEO",
            socials: {
                facebook: new URL("http://localhost:3000/"),
                twitter: new URL("http://localhost:3000/"),
                instagram: new URL("http://localhost:3000/"),
            },
            img: "./images/Partners.jpg",
            alt: "team",
            card: cardFour,
            ref: cardFourView,
        },
        
    ]
  return (
    <div>
        <div className='p-5 py-10 space max-w-[1250px] m-auto'>
            <h3 className='text-lightBlue text-2xl font-bold text-left'>Meet Our Team</h3>
            <p className='text-lightBlue font-light mt-2 text-left lg:w-4/12 '>Welcome to our transportation services agency. We are the best at our transportation services ever.</p>
            <div className='flex flex-wrap justify-center gap-2 mt-5'>
                {team.map((item, index)=>{
                    return (
                        <div ref={item.card} className={`max-w-[288px] basis-12/12 opacity-0 ${item.ref? "slide-top":""}`} key={index}>
                            <img src={item.img} alt={item.alt} />
                            <div className='bg-white -translate-y-10 w-5/6 justify-between rounded-sm flex items-end p-3  m-auto'>
                                <div>
                                    <h4 className='text-blue font-bold'>{item.name}</h4>
                                    <p className='font-light '>{item.role}</p>
                                </div>

                                <div className='flex items-centers gap-2'>
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