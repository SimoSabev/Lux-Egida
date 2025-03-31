import Image from "next/image"

export function HeroSection() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white pt-20">
            <div
                className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-primary-50 blur-3xl opacity-50"></div>
            <div
                className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-secondary-50 blur-3xl opacity-50"></div>

            <div className="container relative px-4 py-24 md:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="mx-auto max-w-3xl text-center lg:text-left">
                        <div
                            className="mb-4 inline-block rounded-full bg-primary-50 px-4 py-1 text-sm font-medium text-primary">
                            Wealth Protection Specialists
                        </div>
                        <h1 className="mb-6 font-serif text-4xl font-light tracking-tight text-primary sm:text-5xl md:text-6xl">
                            <span className="font-medium">Protecting</span> Your Financial Legacy
                        </h1>
                        <p className="mb-12 text-lg leading-relaxed text-gray-600 md:text-xl">
                            Lux Egida Advisors provides sophisticated wealth management and protection strategies for
                            discerning
                            individuals and families.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            <a
                                href="#services"
                                className="group inline-flex h-14 items-center justify-center rounded-md border border-primary-200 bg-white px-8 text-sm font-medium text-primary transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                            >
                <span className="relative">
                  Explore Services
                  <span
                      className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
                            </a>
                            <a
                                href="#experience"
                                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                            >
                                Our Expertise
                            </a>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div
                            className="absolute -left-6 -top-6 h-full w-full rounded-2xl border border-secondary-200 bg-white"></div>
                        <div
                            className="absolute -right-6 -bottom-6 h-full w-full rounded-2xl border border-primary-200 bg-primary-50"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-primary-100 shadow-elegant">
                            <Image
                                src="/placeholder.svg?height=600&width=800"
                                alt="Luxury financial advisory"
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

