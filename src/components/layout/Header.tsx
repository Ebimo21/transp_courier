import React, { ReactNode } from 'react'


const Header = () => {
  return (
    <div 
        className='flex justify-between items-center
                   py-4 bg-white'>
        <span>Transp</span>

        <menu className='hidden'>
            <ul>Home</ul>
            <ul>About Us</ul>
            <ul>Services</ul>
            <ul>Contact</ul>
        </menu>

        <span>
            <span>Englis </span>
            <button>Track Parcel</button>
        </span>
    </div>
  )
}

export default Header