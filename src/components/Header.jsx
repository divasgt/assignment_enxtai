"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed z-100 top-4 sm:top-8.5 left-4 right-4 sm:left-8 sm:right-8 lg:left-17.5 lg:right-17.5 font-lemon flex items-center justify-between">
        <Link href="/" className="flex flex-col justify-center items-center hover:text-[#999999] active:text-[#E7E7E7]">
          <span className="font-bold text-xl sm:text-2xl tracking-wider -mb-0.5">DHRUVA</span>
          <span className="text-[10px] sm:text-xs font-light tracking-widest">ASTRONOMY CLUB</span>
        </Link>

        {/* Menu button - visible on mobile/tablet */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 xl:gap-10 font-medium tracking-wider text-lg xl:text-xl">
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/" >HOME</Link></li>
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/events" >EVENTS</Link></li>
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/podcast" >PODCAST</Link></li>
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/about" >ABOUT</Link></li>
          </ul>
        </nav>

        {/* Mobile/Tablet nav menu */}
        <nav className={`lg:hidden fixed top-16 sm:top-20 left-4 right-4 sm:left-8 sm:right-8 bg-black/90 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col gap-6 font-medium tracking-wider text-xl text-center">
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300 block py-2" href="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300 block py-2" href="/events" onClick={() => setIsMenuOpen(false)}>EVENTS</Link></li>
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300 block py-2" href="/podcast" onClick={() => setIsMenuOpen(false)}>PODCAST</Link></li>
            <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300 block py-2" href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}