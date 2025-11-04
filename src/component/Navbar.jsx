import React from 'react'
import { FcAbout } from 'react-icons/fc'
import { PiUserListBold } from 'react-icons/pi'
import { RiHome9Line } from 'react-icons/ri'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
    <nav className='p-5 bg-Bg-nav'>
        <div className='container'>
            <ul className='flex gap-5 items-center justify-center font-semibold text-lg text-white font-roboto'>
                <li><NavLink to="/"  className={({ isActive }) =>isActive ? "flex items-center gap-3 text-black":"flex items-center gap-3 text-white"}> <RiHome9Line className='text-2xl text-blue-600'/>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) =>isActive ? "flex items-center gap-3 text-black":"flex items-center gap-3 text-white"}><FcAbout  className='text-2xl text-blue-600'/>About</NavLink></li>
                <li><NavLink to="/contract" className={({ isActive }) =>isActive ? "flex items-center gap-3 text-black":"flex items-center gap-3 text-white"}><PiUserListBold className='text-2xl text-blue-600' />Contract</NavLink></li>
            </ul>
                
        </div>
    </nav>
    
    </>
  )
}

export default Navbar