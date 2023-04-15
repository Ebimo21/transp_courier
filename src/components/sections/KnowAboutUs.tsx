import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import ArrowRight from '../iconify/ArrowRight'
import { useInView } from 'react-intersection-observer'

type Props = {}

const KnowAboutUs = (props: Props) => {
    const [lead, leadView] = useInView({triggerOnce: true});
    const [p, pView] = useInView({delay: 1200, triggerOnce: true});
    const [sub, subView] = useInView({delay: 400, triggerOnce: true});
    const [img, imgView] = useInView({delay: 400, triggerOnce: true});
    const [btn, btnView] = useInView({delay: 400, triggerOnce: true})
  return (
    <div className='py-14'>
        <div className='flex items-center justify-center flex-wrap gap-10 lg:gap-5 p-5'>
            <img
                ref={img}
                className={`basis-full lg:basis-3/12 opacity-0 ${imgView? "slide-top":""}`}
                width={200} 
                src='./images/aboutus.jpg' 
                alt='heavy containers' />

            <div className='basis-full lg:basis-5/12'>
                <span ref={sub} className={`text-base font-semibold block opacity-0 ${subView? "slide-top":""}`}>Know About Us</span>
                <h3 ref={lead} className={`text-lightBlue font-bold text-2xl md:text-4xl my-4 opacity-0 ${leadView? "slide-top":""}`}>We find delight in providing professional freight forwarding services for easing your 
                    supply chain needs.
                </h3>
                <p ref={p} className={`text- font-light opacity-0 ${pView? "slide-top":""}`}>We aim to contribute well to your company by brewing eǖ ective supply chain management 
                    strategies. Our professional resources is dedicated to ensure that there is constant 
                    and timely delivery of all consignments under our care.
                </p>

                <button ref={btn} className={`bg-yellow px-6 py-2 mt-8 rounded-full font-semibold flex items-center gap-4 text-sm opacity-0 ${btnView? "slide-top":""}`}> About Us <span className='bg-lightYellow rounded-full'><ArrowRight width={14} height={14} fill='#000'/></span> </button>
            </div>
        </div>
    </div>
  )
}

export default KnowAboutUs