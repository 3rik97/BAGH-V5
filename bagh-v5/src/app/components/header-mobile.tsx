'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <nav className="relative max-w-[1920px]">
            <div className="px-[20px] lg:px-[100px] flex items-center justify-between p-4 bg-black text-white z-50 fixed w-full">
                <Link href="/">
                    <img src="/BAGH.png" alt="Logo" className="h-10 w-auto" />
                </Link>
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                    className="text-white"
                >
                    <Menu size={28} />
                </button>
            </div>

            <div
                className={`
    fixed top-0 right-0 w-[430px] h-screen bg-[#000] text-white
    p-6 pt-16 z-[9999] flex flex-col gap-6 shadow-lg
    transition-all duration-300 ease-in-out
    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
  `}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 text-white"
                >
                    <X size={28} />
                </button>

                <ul className="flex flex-col gap-6">
                    <li><Link href="#" className="text-lg flex items-center gap-[45px]"><img src="/home.png" alt="" /> Home</Link></li>
                    <li><Link href="#about" className="text-lg flex items-center gap-[45px]"><img src="/blog.png" alt="" /> About</Link></li>
                    <li><Link href="#services" className="text-lg flex items-center gap-[45px]"><img src="/services.png" alt="" /> Services</Link></li>
                    <li><Link href="#contact" className="text-lg flex items-center gap-[45px]"><img src="/contact.png" alt="" /> Contact</Link></li>
                    <li><Link href="#" className="text-lg flex items-center gap-[45px]"><img src="/blog.png" alt="" /> Blog</Link></li>
                    <li>
                        <button className="w-full bg-[#F47521] text-white py-2 mt-4">
                            Sign In
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MobileNav
