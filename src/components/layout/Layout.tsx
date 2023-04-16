import React, {ReactNode} from 'react'
import Footer from './Footer'
import Header from './Header'
import { Montserrat } from 'next/font/google'


type Props = {
  children: ReactNode
}



const montserrate = Montserrat({subsets: ["latin"]})
const styles = {
  fontFamily: montserrate,
};

const Layout = ({children}:Props) => {
  return (
    <>
        <div data-theme="light">
          <Header />
          {children}
          <Footer/>
        </div>
    </>
  )
}

export default Layout