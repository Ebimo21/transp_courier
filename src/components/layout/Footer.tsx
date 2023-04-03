import { Montserrat } from 'next/font/google'
import React from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import {CiTwitter} from 'react-icons/ci'
import {FiFacebook, FiInstagram, FiYoutube} from 'react-icons/fi'

type Props = {}
// const montserrate = Montserrat({subsets: ["vietnamese"]})
// const montserrate = Montserrat({subsets: ["latin"]})
const montserrate = Montserrat({subsets: ["cyrillic"]})


const Footer = (props: Props) => {
  return (
    <div className={`${montserrate.className} bg-blue p-5 pt-20 text-white flex flex-wrap justify-center gap-10`}>
            <div className='basis-full lg:basis-3/12  font-thin'>
                <h3 className='font-extrabold text-3xl'>Transp</h3>
                <p className=' mt-3 text-sm lg:text-xs'>We fuse our global network with our depth of expertise in air freight, ocean freight, 
                    railway transportation, trucking, and multimode transportation, also we are providing sourcing,
                    warehousing, E-commerce fulfilment, and value added service to our customers including kitting, 
                    assembly, customized package and business inserts etc.
                </p>

                <p className='text-yellow mt-5 font-medium lg:text-xs'>Follow Us</p>
                <div className='flex items-center mt-2 gap-5'>
                  <CiTwitter/>
                  <FiFacebook/>
                  <FiInstagram/>
                  <FiYoutube/>
                </div>
            </div>
            <div className='flex font-thin text-base gap-10 lg:gap-20 flex-wrap justify-between'>
              <div className='flex-col gap-1 flex flex-wrap'>
                <h3 className='text-yellow text-xl mb-2 font-semibold'>Company</h3>
                <p><a href='#'>Mission & Vision</a></p>
                <p><a href='#'>Our Team</a></p>
                <p><a href='#'>Career</a></p>
                <p><a href='#'>Press & Media</a></p>
                <p><a href='#'>Advertising</a></p>
                <p><a href='#'>Testimonial</a></p>
              </div>

              <div className='flex-col gap-1 flex flex-wrap'>
                <h3 className='text-yellow text-xl mb-2 font-semibold'>Industries</h3>
                <p><a href='#'>Global Coverage</a></p>
                <p><a href='#'>Distribution</a></p>
                <p><a href='#'>Accounting Tools</a></p>
                <p><a href='#'>Freight Recovery</a></p>
                <p><a href='#'>Supply Chain</a></p>
                <p><a href='#'>Warehousing</a></p>
              </div>

              <div className='flex-col gap-1 flex flex-wrap'>
                <h3 className='text-yellow text-xl mb-2 font-semibold'>Services</h3>
                <p><a href='#'>Air Freight</a></p>
                <p><a href='#'>Ocean Freight</a></p>
                <p><a href='#'>Railway Freight</a></p>
                <p><a href='#'>Warehousing</a></p>
                <p><a href='#'>Distribution</a></p>
                <p><a href='#'>Value Added</a></p>
              </div>
            </div>
        </div>
  )
}

export default Footer