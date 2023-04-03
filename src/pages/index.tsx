import Head from 'next/head'
import Image from 'next/image'
import { Inter, Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Landing from '@/components/sections/Landing'
import WhatWeOffer from '@/components/sections/WhatWeOffer'
import GetInTouch from '@/components/sections/GetInTouch'
import KnowAboutUs from '@/components/sections/KnowAboutUs'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Team from '@/components/sections/Team'

const inter = Inter({ subsets: ['latin'] })
const montserrate = Montserrat({subsets: ['vietnamese']})


export default function Home() {
  return (
    // <>
      <Layout>
        <main className={`${montserrate.className} `}>
          <Landing />
          <WhatWeOffer/>
          <KnowAboutUs/>
          <GetInTouch ImageId='transport'/>
          <HowItWorks/>
          <WhyChooseUs/>
          <Team/>
        </main>
      </Layout>
  )
}
