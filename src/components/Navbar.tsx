"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"
import { useTranslation } from "@/hooks/useTranslations"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t: text } = useTranslation()

  const navItems = [
    { label: text("Navigation.text1"), href: "/" },
    { label: text("Navigation.text2"), href: "/" },
    { label: text("Navigation.text3"), href: "/" },
    { label: text("Navigation.text4"), href: "/" },
    { label: text("Navigation.text5"), href: "/" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerWidth < 768 ? 250 : 300
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background shadow-xl " : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <Image src={isScrolled ? "/logo.png" : "/logo-light.png"} alt="Logo" width={50} height={50} className={`transition duration-300 ease-in-out transform ${isScrolled ? 'scale-100 opacity-100' : ' scale-95 opacity-90'
          }`} />

        {/* Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`font-bold transition ${isScrolled ? "text-primary hover:text-secondary" : "text-highlight hover:text-accent"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden items-center ${isScrolled ? "text-primary" : "text-highlight"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-background px-6 space-y-2 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60 py-2" : "max-h-0 py-0"
          }`}
      >
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="block font-semibold text-primary hover:text-secondary transition"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
