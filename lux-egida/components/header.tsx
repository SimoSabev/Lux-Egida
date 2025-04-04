"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "../public/Screenshot 2025-03-31 2010101.png"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-elegant backdrop-blur-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image src={logo.src} alt="Lux Egida Advisors" width={320} height={160} className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="#services"
            className="text-sm font-medium text-gray-600 transition-all duration-200 hover:text-primary hover:underline hover:underline-offset-8"
          >
            Services
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium text-gray-600 transition-all duration-200 hover:text-primary hover:underline hover:underline-offset-8"
          >
            Experience
          </Link>
          <Link
            href="mailto:contact@luxegida.com"
            className="ml-4 rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white"
          >
            Contact
          </Link>
        </nav>
        <button
          className="flex items-center justify-center rounded-md p-2 text-primary transition-colors hover:bg-primary-50 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-elegant-lg md:hidden">
          <nav className="container flex flex-col space-y-6 px-4 py-8">
            <Link
              href="#services"
              className="text-lg font-medium text-primary transition-colors hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#experience"
              className="text-lg font-medium text-primary transition-colors hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="mailto:contact@luxegida.com"
              className="inline-flex w-full items-center justify-center rounded-md border border-primary px-5 py-3 text-base font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

