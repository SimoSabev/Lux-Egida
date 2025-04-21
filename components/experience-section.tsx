import Image from "next/image"

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-primary sm:text-4xl md:text-5xl">
            <span className="font-medium">Expertise</span> & Experience
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-secondary"></div>
          <p className="mb-16 text-gray-600 md:text-lg">
            With over two decades of experience in luxury financial advisory, we bring unparalleled expertise to every
            client relationship.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-xl border border-secondary-200 bg-white"></div>
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-xl border border-primary-200 bg-primary-50"></div>
            <div className="relative overflow-hidden rounded-xl border border-primary-100 shadow-elegant">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Financial advisor office"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-xl bg-white p-8 shadow-elegant border border-gray-100">
              <h3 className="mb-6 text-2xl font-medium text-primary">Our Approach</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                We believe in a holistic approach to wealth management, considering all aspects of your financial life
                and personal goals. Our advisory process begins with understanding your unique situation, aspirations,
                and concerns.
              </p>
              <p className="leading-relaxed text-gray-600">
                Through careful analysis and strategic planning, we develop tailored solutions that address your
                immediate needs while positioning you for long-term success. Our ongoing relationship ensures your
                strategy evolves as your life and the market change.
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-primary-50 p-8 shadow-elegant border border-primary-100">
              <h3 className="mb-6 text-2xl font-medium text-primary">Credentials</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-secondary"></div>
                  <div>
                    <h4 className="font-medium text-primary">Certified Financial Planner (CFP)</h4>
                    <p className="text-gray-600">Highest standard of excellence in financial planning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-secondary"></div>
                  <div>
                    <h4 className="font-medium text-primary">Chartered Financial Analyst (CFA)</h4>
                    <p className="text-gray-600">Global gold standard in investment analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-secondary"></div>
                  <div>
                    <h4 className="font-medium text-primary">Private Wealth Management Specialist</h4>
                    <p className="text-gray-600">Specialized in high-net-worth client services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-secondary"></div>
                  <div>
                    <h4 className="font-medium text-primary">International Tax Advisor</h4>
                    <p className="text-gray-600">Expert in cross-border wealth management</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
