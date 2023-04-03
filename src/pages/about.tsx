import Layout from '@/components/layout/Layout'
import GetInTouch from '@/components/sections/GetInTouch'
import Landing from '@/components/sections/Landing'
import SectionFour from '@/components/sections/SectionFour'
import SectionOne from '@/components/sections/SectionOne'
import SectionThree from '@/components/sections/SectionThree'
import SectionTwo from '@/components/sections/SectionTwo'
import Team from '@/components/sections/Team'
import React from 'react'

type Props = {}

const about = (props: Props) => {
  return (
    <Layout>
        <main>
            <div id='about'
            className=' w-screen text-white p-6' >
            <div className='flex flex-col items-center justify-center h-[30vh] lg:h-[60vh] '>
                    <span className='text-yellow font-bold'>Who We Are</span>
                    <h1 className=' text-6xl font-bold mb-5'>About Us</h1>
                    < p className='lg:w-5/12 text-center'>We have been pioneering the industry in Europe for over a decade and delivering
                    value products within given timeframe, every single time.
                    </p>
            </div>

            </div>
            <SectionOne/>
            <SectionTwo />
            <SectionThree/>
            <SectionFour/>
            <GetInTouch ImageId='shipping'/>
            <Team/>
        </main>
    </Layout>
  )
}

export default about