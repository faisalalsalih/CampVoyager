import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
        <Image src="/hilink-logo.svg" alt='logo' width={74} height={29}/>
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='text-black-500 hover:text-green-600 hover:transition-all hover:duration-100'>
              {link.label}
            </Link>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar
