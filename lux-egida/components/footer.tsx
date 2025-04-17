import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary-100 bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
            <Link href="/" className="text-xl font-light tracking-widest text-primary">
              <span className="font-semibold">LUXURY</span> ASSET MANAGEMENT
            </Link>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contact@luxuryassetmanagement.com</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Monaco • London • New York • Dubai</span>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 md:text-right animate-fade-left animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
            <p>&copy; {currentYear} Luxury Asset Management. All rights reserved.</p>
            <p className="mt-2">
              <Link href="#" className="text-secondary underline-offset-4 hover:underline">
                Privacy Policy
              </Link>{" "}
              &bull;{" "}
              <Link href="#" className="text-secondary underline-offset-4 hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
