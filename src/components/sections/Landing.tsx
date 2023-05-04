import useWhenInView from '@/hooks/useWhenInView';
import Link from 'next/link'
import React from 'react';
import { useInView} from 'react-intersection-observer';

const Landing = () => {
  const {lead, leadView, p, pView, sub, subView } = useWhenInView();
  const [btn, btnView] = useInView({delay: 800, triggerOnce: true})
  
  return (
        <div 
          id='landing'
          className='h-[70vh] w-screen text-white py-6 flex sm:justify-start   ' >
            <div className='p-6 sm:p-0 sm:w-[1100px] m-auto'>
            <div className='flex items-center justify-left lg:pl-1477  '>
              <div className='md:basis-7/12 '>
                <span ref={sub} className={`text-xs font-medium block opacity-0 ${subView? "slide-top":""}`}>Logistics & Transportation</span>
                <h1 ref={lead} className={`text-left text-4xl font-bold mt-2 mb-6 opacity-0 ${leadView? "slide-top":""}`}>Digital & Trusted Transport Logistic Company</h1>
                <p ref={p} className={`font-light opacity-0 ${pView? "slide-top":""}`}>We find delight in  providing comprehensive and professional freight
                  forwarding services, for easing your supply chain needs.
                </p>
                <Link href="/track" ><button ref={btn} className={`bg-yellow py-2 text-blue font-semibold text-sm rounded-full w-40 mt-5 opacity-0 ${btnView? "slide-top":""}`}>Track Parcel</button></Link>
              </div>
            </div>
            </div>
        </div>
  )
}

export default Landing