import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import React, { ReactNode, useEffect, useState } from 'react'

const montserrate = Montserrat({subsets: ["latin"]})

// <script>
// 				const btn = document.querySelector("button.mobile-menu-button");
// 				const menu = document.querySelector(".mobile-menu");

// 				btn.addEventListener("click", () => {
// 					menu.classList.toggle("hidden");
// 				});
// 			</script>

const Header = () => {
 const [show, setShow] = useState(true)
  return (
    <nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<a href="#" className="flex items-center py-4 px-2">
								<img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
								<span className="font-semibold text-gray-500 text-lg">Transp</span>
							</a>
						</div>
						<div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-blue hover:text-lightBlue transition duration-300 border-blue font-semibold ">Home</Link>
              <Link href="/about" className="py-4 px-2 text-blue hover:text-lightBlue transition duration-300 border-blue font-semibold ">About Us</Link>
              <Link href="/services" className="py-4 px-2 text-blue  hover:text-lightBlue transition duration-300 border-blue font-semibold ">Services</Link>
              <Link href="#" className="py-4 px-2 text-blue  hover:text-lightBlue transition duration-300 border-blue font-semibold ">Contact</Link>
						</div>
					</div>

					<div className="hidden md:flex items-center space-x-3 ">
            <Link href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue hover:text-white transition duration-300">English </Link>
            <Link href="/track" className="py-2 px-2 font-medium text-blue rounded bg-yellow transition duration-300">Track Parcel</Link>
					</div>
					<div className="md:hidden flex items-center">
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
			<div className={`${show? 'hidden': ''} mobile-menu`}>
				<ul className="">
              <li><Link href="/" className="block text-sm px-2 py-4 hover:bg-lightBlue hover:text-white text-blue hover:text-lightBlue transition duration-300 border-blue font-semibold ">Home</Link></li>
              <li><Link href="/about" className="block text-sm px-2 py-4 hover:bg-lightBlue hover:text-white text-blue hover:text-lightBlue transition duration-300 border-blue font-semibold ">About Us</Link></li>
              <li><Link href="/services" className="block text-sm px-2 py-4 hover:bg-lightBlue hover:text-white text-blue  hover:text-lightBlue transition duration-300 border-blue font-semibold ">Services</Link></li>
              <li><Link href="#" className="block text-sm px-2 py-4 hover:bg-lightBlue hover:text-white text-blue  hover:text-lightBlue transition duration-300 border-blue font-semibold ">Contact</Link></li>
              <li><Link href="/track" className="inline-block py-2 px-2 font-medium text-blue rounded bg-yellow transition duration-300">Track Parcel</Link></li>
					{/* <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-blue font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-blue transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-blue transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-blue transition duration-300">Contact Us</a></li> */}
				</ul>
			</div>
			
		</nav>
  )
}

export default Header