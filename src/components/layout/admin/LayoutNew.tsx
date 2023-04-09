import MenuIcon from '@/components/iconify/menuIcon'
import Link from 'next/link'
import React, {ReactNode, useState} from 'react'
import { BsFillHandThumbsDownFill } from 'react-icons/bs'

type Props = {
    children: ReactNode
}

const LayoutNew = ({children}: Props) => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className=''>
        <div className="flex justify-between bg-slate-200 text-slate-900">
            <div className="flex basis-full justify-between p-4 items-center">
                <h2 className='text-2xl font-semibold'>Dashboard</h2>
                
                <div onClick={()=>setMenuOpen(prev=> !prev)} className='lg:hidden'>
                <MenuIcon fill='#000'/>

                    </div>            
                </div>
            <div className="hidden  lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                Dashboard
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                Reports
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                Support
                </a>
            </div>
            </div>
        </div>
        {menuOpen && (
            <div className="lg:hidden absolute w-full bg-white">
            <div className="mt-2 px-2 pt-2 pb-3">
                <Link href={'/admin'}>
                    <span className="block px-3 py-2 rounded text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</span>
                </Link>
                <Link href={"/admin/parcels"}>
                    <span className="mt-1 block px-3 py-2 rounded text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Parcels</span>

                </Link>
            <a href="#" className="mt-1 block px-3 py-2 rounded text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Send Mail</a>
            <a href="#" className="mt-1 block px-3 py-2 rounded text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Support</a>
            </div>
        </div>
        )}

  {children}

    </div>

    // <div>
    //     <div className='p-3'>
    //         <div className='flex justify-between'>
    //             <h2>Dashboard</h2>

    //             <MenuIcon />

    //         </div>
    //     </div>
    //     {children}</div>
  )
}

export default LayoutNew