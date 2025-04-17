import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-100 pt-20">
      <div className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-primary-50 blur-3xl opacity-50 animate-pulse animate-infinite animate-duration-[10000ms] animate-ease-in-out"></div>
      <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-secondary-50 blur-3xl opacity-50 animate-pulse animate-infinite animate-duration-[15000ms] animate-ease-in-out"></div>

      <div className="container relative px-4 py-24 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto max-w-3xl text-center lg:text-left">
            <div className="mb-4 inline-block rounded-full bg-primary-50 px-4 py-1 text-sm font-medium text-primary animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out">
              Luxury Asset Management
            </div>
            <h1 className="mb-6 font-serif text-4xl font-light tracking-tight text-primary sm:text-5xl md:text-6xl animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out">
              Your Strategic Partner in <span className="font-medium">Luxury Asset Management</span>
            </h1>
            <p className="mb-12 text-lg leading-relaxed text-gray-600 md:text-xl animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
              Discreet, experienced, and fully aligned with your interests — across yachting, aviation, and real estate.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start animate-fade-up animate-once animate-duration-700 animate-delay-400 animate-ease-in-out">
              <a
                href="#philosophy"
                className="group inline-flex h-14 items-center justify-center rounded-md border border-primary-200 bg-white px-8 text-sm font-medium text-primary transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                <span className="relative">
                  Our Philosophy
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#111733] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-2xl border border-secondary-200 bg-white"></div>
            <div className="absolute -right-6 -bottom-6 h-full w-full rounded-2xl border border-primary-200 bg-primary-50"></div>
            <div className="relative overflow-hidden rounded-2xl border border-primary-100 shadow-elegant">
              <Image
                src="https://placehold.co/800x600/f0f1f7/1e2756?text=Luxury+Asset+Management"
                alt="Luxury asset management"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
