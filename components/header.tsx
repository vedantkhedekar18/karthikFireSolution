import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu } from 'lucide-react'

export default function Header() {
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
            className="w-14 h-16 object-contain"
          />
          <div>
            <div className="font-bold text-white text-3xl lg:text-3xl">KARTHIK</div>
            <div className="text-red-600 text-lg -mt-1.5">FIRE SOLUTION</div>
            <div className="text-white text-xs -mt-1.5">Expert Fire Fighting & Safety Solutions</div>
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
            <div className="text-white font-bold">8369237441</div>
          </div>
        </div>

        {/* Mobile right side: compact call button + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
        <a href="tel:8369237441" className="flex items-center gap-1.5 px-3 py-2 border border-red-600 rounded">
        <Phone className="w-4 h-4 text-red-600" />
        <span className="text-white text-sm font-bold">8369237441</span>
        </a>
        <button aria-label="Open menu">
        <Menu className="w-6 h-6 text-white" />
        </button>
        </div>

      </div>
    </header>
  )
}