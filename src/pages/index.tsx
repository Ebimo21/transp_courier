import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Landing from '@/components/sections/Landing'
import WhatWeOffer from '@/components/WhatWeOffer'
import GetInTouch from '@/components/GetInTouch'
import KnowAboutUs from '@/components/KnowAboutUs'
import HowItWorks from '@/components/HowItWorks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <>
      <Layout>
        <Landing />
        <WhatWeOffer/>
        <KnowAboutUs/>
        <GetInTouch/>
        <HowItWorks/>
      </Layout>
  )
}
