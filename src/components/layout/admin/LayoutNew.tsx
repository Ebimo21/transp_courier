import MenuIcon from '@/components/iconify/menuIcon'
import Link from 'next/link'
import React, {ReactNode, useState} from 'react'

type Props = {
    children: ReactNode
}

const LayoutNew = ({children}: Props) => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div data-theme="light" className=''>
        <div className="flex justify-between bg-slate-200 text-slate-900">
            <div className="flex basis-full justify-between p-4 items-center">
                <h2 className='text-2xl font-semibold'>Dashboard</h2>
                
                <div onClick={()=>setMenuOpen(prev=> !prev)} className='lg:hidden'>
                <MenuIcon fill='#000'/>

                    </div>            
                </div>
            <div className="hidden  md:flex md:items-center md:basis-5/12">
            <div className="text-sm lg:flex-grow">
                <Link href={'/'}>
                    <span className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">Main Site</span>
                </Link>
                <Link href={'/admin'}>
                    <span className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">Dashboard</span>
                </Link>
                <Link href={'admin/mailer'}>
                    <span className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">Send Mail</span>
                </Link>
            </div>
            </div>
        </div>
        {menuOpen && (
            <div className="lg:hidden z-40 absolute w-full bg-slate-600">
            <div className="mt-2 px-2 pt-2 pb-3">
                <Link href={'/'}>
                    <span className="block px-3 py-2 rounded text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Main Site</span>
                </Link>
                <Link href={'/admin'}>
                    <span className="block px-3 py-2 rounded text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</span>
                </Link>
                <Link href={'admin/mailer'}>
                    <span className="mt-1 block px-3 py-2 rounded text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Send Mail</span>
                </Link>
            </div>
        </div>
        )}
        {children}
    </div>
  )
}

export default LayoutNew