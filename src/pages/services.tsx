import Layout from '@/components/layout/Layout'
import AboutLanding from '@/components/sections/AboutLanding'
import Briefing from '@/components/sections/Briefing'
import ChooseUs from '@/components/sections/ChooseUs'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function services() {
  return (
    <Layout>
        <AboutLanding/>
        <Briefing/>
        <ChooseUs/>
    </Layout>
  )
}

export default services