import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/public/logo1.png";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="border-t border-primary-100 bg-gradient-to-tr from-[#192840] to-[#21344f] py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Left side: Logo + Contact */}
            <div className="flex flex-col gap-6 animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">

              {/* Logo */}
              <Link href="/" className="">
                <Image
                    src={logo.src}
                    alt="Lux Egida logo"
                    width={200}
                    height={200}
                    className="w-[150px] h-auto md:w-[200px] object-contain"
                />
              </Link>

              {/* Contact Info */}
              <div className="flex flex-col gap-3 ml-5 text-sm text-slate-300">
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span>contact@luxuryassetmanagement.com</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors mt-1">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>Monaco • London • New York • Dubai</span>
                </div>
              </div>
            </div>

            {/* Right side: Copyright */}
            <div className="flex flex-col justify-center items-center text-center text-sm text-slate-400 md:items-end md:text-right animate-fade-left animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
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
  );
}