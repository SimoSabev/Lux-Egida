"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import logo from "@/public/logo.png"
import Image from "next/image"

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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white/95 shadow-elegant backdrop-blur-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image src={logo.src} alt={"Lux Egida logo"} width={100} height={100}/>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="#philosophy"
            className="text-sm font-medium text-gray-600 transition-all duration-300 hover:text-primary hover:underline hover:underline-offset-8"
          >
            Philosophy
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-600 transition-all duration-300 hover:text-primary hover:underline hover:underline-offset-8"
          >
            About
          </Link>
          <Link
            href="#expertise"
            className="text-sm font-medium text-gray-600 transition-all duration-300 hover:text-primary hover:underline hover:underline-offset-8"
          >
            Expertise
          </Link>
          <Link
            href="#contact"
            className="ml-4 rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
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
        <div className="absolute w-full bg-white shadow-elegant-lg md:hidden animate-fade-down animate-once animate-duration-300 animate-ease-in-out">
          <nav className="container flex flex-col space-y-6 px-4 py-8">
            <Link
              href="#philosophy"
              className="text-lg font-medium text-primary transition-colors hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Philosophy
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium text-primary transition-colors hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#expertise"
              className="text-lg font-medium text-primary transition-colors hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-md border border-primary px-5 py-3 text-base font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
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
