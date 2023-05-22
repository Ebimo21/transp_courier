import Layout from '@/components/layout/Layout'
import Track from '@/components/sections/Track'
import Head from 'next/head'
import React from 'react'

type Props = {}

const track = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Track Parcel | Ultra Express</title>
      </Head>
      <main className={`max-w-[1250px] m-auto`}>
        <Track/>
      </main>
    </Layout>
  )
}

export default track