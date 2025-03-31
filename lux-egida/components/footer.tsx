import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import logo from "@/public/Screenshot 2025-03-31 2010101.png";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary-100 bg-primary-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Link href="/" className="flex items-center">
              <Image src={logo.src} alt="Lux Egida Advisors" width={320} height={160} className="h-12 w-auto" />
            </Link>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contact@luxegida.com</span>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 md:text-right">
            <p>&copy; {currentYear} Lux Egida Advisors. All rights reserved.</p>
            <p className="mt-2">
              <Link href="#" className="text-secondary underline-offset-4 hover:underline hover:text-secondary-600">
                Privacy Policy
              </Link>{" "}
              &bull;{" "}
              <Link href="#" className="text-secondary underline-offset-4 hover:underline hover:text-secondary-600">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

