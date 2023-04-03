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
    <nav className="bg-white shadow-lg max-w-[1250px] m-auto">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-64">
						<div>
							<Link 
								href="/"
								className="flex items-center py-4 px-2">
									<img src="./imags/logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
									<span className="font-bold text-blue text-2xl">Transp</span>
							</Link>
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<Link href="/" className="py-4 px-2 text-blue hover:text-lightBlue transition duration-300 border-blue font-bold ">Home</Link>
							<Link href="/about" className="py-4 px-2 text-blue hover:text-lightBlue transition duration-300 border-blue font-bold ">About Us</Link>
							<Link href="/services" className="py-4 px-2 text-blue  hover:text-lightBlue transition duration-300 border-blue font-bold ">Services</Link>
							<Link href="#" className="py-4 px-2 text-blue  hover:text-lightBlue transition duration-300 border-blue font-bold ">Contact</Link>
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
					<li><Link href="/" className="block text-sm px-2 py-4 hover:bg-lightBlue hover:text-lightBlue transition duration-300 border-blue font-semibold ">Home</Link></li>
					<li><Link href="/about" className="block text-sm px-2 py-4 hover:bg-lightBlue text-blue hover:text-lightBlue transition duration-300 border-blue font-semibold ">About Us</Link></li>
					<li><Link href="/services" className="block text-sm px-2 py-4 hover:bg-lightBlue text-blue  hover:text-lightBlue transition duration-300 border-blue font-semibold ">Services</Link></li>
					<li><Link href="#" className="block text-sm px-2 py-4 hover:bg-lightBlue  text-blue  hover:text-lightBlue transition duration-300 border-blue font-semibold ">Contact</Link></li>
					<li><Link href="/track" className="inline-block py-2 px-2 font-medium text-blue rounded bg-yellow transition duration-300">Track Parcel</Link></li>
				</ul>
			</div>
			
		</nav>
  )
}

export default Header