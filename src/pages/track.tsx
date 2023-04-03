import Layout from '@/components/layout/Layout'
import Track from '@/components/sections/Track'
import React from 'react'

type Props = {}

const track = (props: Props) => {
  return (
    <Layout>
      <main className={`max-w-[1250px] m-auto`}>
        <Track/>
      </main>
    </Layout>
  )
}

export default track