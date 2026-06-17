'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-red-900/30 bg-black/60 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Karthik Fire Solution Logo"
            width={70}
            height={50}
            className="w-10 h-12 lg:w-14 lg:h-16 object-contain"
          />
          <div>
            <div className="font-bold text-white text-xl lg:text-3xl">KARTHIK</div>
            <div className="text-red-600 text-sm lg:text-lg -mt-1.5">FIRE SOLUTION</div>
            <div className="hidden lg:block text-white text-xs -mt-1.5">Expert Fire Fighting & Safety Solutions</div>
          </div>
        </div>

        {/* Navigation — desktop only */}
        <nav className="hidden lg:flex items-center gap-12">
          <Link href="#home" className="text-white text-sm hover:text-red-600 transition">HOME</Link>
          <Link href="#about-us" className="text-white text-sm hover:text-red-600 transition">ABOUT US</Link>
          <Link href="#services" className="text-white text-sm hover:text-red-600 transition">SERVICES</Link>
          <Link href="#why-choose" className="text-white text-sm hover:text-red-600 transition">WHY US</Link>
          <Link href="#certifications" className="text-white text-sm hover:text-red-600 transition">CERTIFICATIONS</Link>
          <Link href="#contact" className="text-white text-sm hover:text-red-600 transition">CONTACT</Link>
        </nav>

        {/* Contact Button — desktop only */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 border border-red-600 rounded">
          <Phone className="w-4 h-4 text-red-600" />
          <div>
            <div className="text-xs text-gray-400">FOR QUOTE</div>
            <div className="text-white font-bold">+91 8369237441</div>
          </div>
        </div>

        {/* Mobile right side */}
        <div className="flex lg:hidden items-center gap-3">
          <a href="tel:+91 8369237441" className="flex items-center gap-1.5 px-3 py-2 border border-red-600 rounded">
            <Phone className="w-4 h-4 text-red-600" />
            <span className="text-white text-sm font-bold">+91 8369237441</span>
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen
              ? <X className="w-6 h-6 text-white" />
              : <Menu className="w-6 h-6 text-white" />
            }
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-black/95 border-t border-red-900/30 px-6 py-4 flex flex-col gap-4">
          <Link href="#home" onClick={() => setMobileOpen(false)} className="text-white text-sm hover:text-red-600 transition">HOME</Link>
          <Link href="#about-us" onClick={() => setMobileOpen(false)} className="text-white text-sm hover:text-red-600 transition">ABOUT US</Link>
          <Link href="#services" onClick={() => setMobileOpen(false)} className="text-white text-sm hover:text-red-600 transition">SERVICES</Link>
          <Link href="#why-choose" onClick={() => setMobileOpen(false)} className="text-white text-sm hover:text-red-600 transition">WHY US</Link>
          <Link href="#certifications" onClick={() => setMobileOpen(false)} className="text-white text-sm hover:text-red-600 transition">CERTIFICATIONS</Link>
          <Link href="#contact" onClick={() => setMobileOpen(false)} className="text-white text-sm hover:text-red-600 transition">CONTACT</Link>
        </nav>
      )}
    </header>
  )
}