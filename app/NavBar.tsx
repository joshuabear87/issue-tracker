import { David_Libre } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { GiBugNet } from "react-icons/gi";

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' }
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link className='text-zinc-600 hover:text-zinc-900 transition-colors' href='/'><GiBugNet /></Link>
        <ul className='flex space-x-6'>
          {links.map(link => 
            <Link 
              key={link.href} 
              className='text-zinc-600 hover:text-zinc-900 transition-colors' 
              href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar