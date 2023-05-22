import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import React, { useState } from 'react'
import { Mail } from '../iconify/Mail'

const montserrate = Montserrat({subsets: ["latin"]})

const Header = () => {
 const [show, setShow] = useState(true)
  return (
    <nav className="bg-white shadow-lg max-w-[1250px] m-auto">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-64">
						<div>
							<Link 
								href="/"
								className="flex items-center gap-2 py-4 px-2">
									<img src="https://img.icons8.com/ios/50/041C2F/in-transit--v1.png"/>
									{/* <img src="./imags/logo.png" alt="Logo" className="h-8 w-8 mr-2"/> */}
									<span className="font-bold text-blue text-2xl">Ultra Express</span>
							</Link>
						</div>
						<div className="hidden lg:flex items-center space-x-1">
							<Link href="/" className="py-4 px-2 text-blue hover:text-lightBlue transition duration-300 border-blue font-bold ">Home</Link>
							<Link href="/about" className="py-4 px-2 text-blue hover:text-lightBlue transition duration-300 border-blue font-bold ">About Us</Link>
							<Link href="/services" className="py-4 px-2 text-blue  hover:text-lightBlue transition duration-300 border-blue font-bold ">Services</Link>
							<Link href="mail:support@ultraexpress.org" className="lex items-center gap-2 py-4 px-2 text-blue  hover:text-lightBlue transition duration-300 border-blue font-bold ">Contact <Mail width={20} height={20} fill='#034460'/></Link>
						</div>
					</div>

					<div className="hidden lg:flex items-center space-x-3 ">
						<Link href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue hover:text-white transition duration-300">English </Link>
						<Link href="/track" className="py-2 px-2 w-40 text-center font-medium text-blue rounded bg-yellow transition duration-300">Track Parcel</Link>
					</div>
					<div className="lg:hidden flex items-center">
						<button
              				onClick={(e)=>setShow(prev=>!prev)} className="outline-none mobile-menu-button">
							<svg className=" w-6 h-6 text-gray-500 hover:text-blue "
								x-show="!showMenu"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className={`${show? 'hidden': 'absolute z-10 bg-white w-full p-5 text-lg'} mobile-menu`}>
				<ul className="">
					<li><Link href="/" className="block px-2 py-4 hover:bg-lightBlue hover:text-white transition duration-300 border-blue font-semibold ">Home</Link></li>
					<li><Link href="/about" className="block px-2 py-4 hover:bg-lightBlue text-blue hover:text-white transition duration-300 border-blue font-semibold ">About Us</Link></li>
					<li><Link href="/services" className="block px-2 py-4 hover:bg-lightBlue text-blue  hover:text-white transition duration-300 border-blue font-semibold ">Services</Link></li>
					<li><Link href="mail:support@ultraexpress.org" className="flex items-center gap-2 block px-2 py-4 hover:bg-lightBlue  text-blue  hover:text-white transition duration-300 border-blue font-semibold ">Contact <Mail width={20} height={20} fill='#034460'/></Link></li>
					<li><Link href="/track" className="inline-block py-2 px-5 font-medium text-blue rounded bg-yellow transition duration-300 mt-5">Track Parcel</Link></li>
				</ul>
			</div>
			
		</nav>
  )
}

export default Header