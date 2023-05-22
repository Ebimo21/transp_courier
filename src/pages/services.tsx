import Layout from '@/components/layout/Layout'
import AboutLanding from '@/components/sections/AboutLanding'
import Briefing from '@/components/sections/Briefing'
import ChooseUs from '@/components/sections/ChooseUs'
import Head from 'next/head'
import React from 'react'

function services() {
  return (
    <Layout>
      <Head>
        <title>Services | Ultra Express</title>
      </Head>
        <AboutLanding/>
        <Briefing/>
        <ChooseUs/>
    </Layout>
  )
}

export default services