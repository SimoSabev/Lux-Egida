import { ArrowRight } from "lucide-react"

export function NetworkSection() {
  return (
    <section id="contact" className="bg-primary-50 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="mb-4 font-serif text-3xl font-light text-primary sm:text-4xl animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out">
              <span className="font-medium">A Mindfully</span> Developed Network
            </h2>
            <div className="mx-auto mb-8 h-1 w-24 bg-secondary animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out"></div>
          </div>

          <div className="flex flex-col justify-center items-center rounded-xl bg-slate-200 p-8 shadow-2xl border border-gray-100 animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
            <p className="mb-6 text-gray-600">
              Trusted partnerships and strong relationships are the foundation of our success. Over the years, we have
              cultivated a global network of exceptional professionals — from advisors and brokers to captains,
              architects, and technical specialists.
            </p>
            <p className="mb-12 text-gray-600">
              Our partners are aligned with our standards, our discretion, and our commitment to excellence. When you
              work with us, you gain access to a world-class team dedicated to serving your vision with precision.
            </p>

            <div className="pt-8">
              <h3 className="mb-6 text-2xl font-medium text-primary">Let&apos;s Elevate What&apos;s Possible</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Your goals deserve more than execution — they deserve advocacy.
              </p>
              <p className="mb-8 leading-relaxed text-gray-600">
                We do not just manage assets — we manage outcomes. Through discretion, clarity, and strategic alignment,
                we ensure every step supports your broader ambitions.
              </p>
              <a
                href="mailto:contact@luxuryassetmanagement.com"
                className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-[#111733] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 group"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
