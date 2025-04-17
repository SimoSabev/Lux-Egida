import Image from "next/image"

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-white py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-primary sm:text-4xl md:text-5xl animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out">
            <span className="font-medium">Our</span> Philosophy
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-secondary animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out"></div>
          <p className="mb-16 text-gray-600 md:text-lg animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
            Experience. Insight. Discretion.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1 animate-fade-right animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-xl border border-secondary-200 bg-white"></div>
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-xl border border-primary-200 bg-primary-50"></div>
            <div className="relative overflow-hidden rounded-xl border border-primary-100 shadow-elegant">
              <Image
                src="https://placehold.co/800x600/f0f1f7/1e2756?text=Luxury+Yacht"
                alt="Luxury yacht"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-left animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out">
            <div className="rounded-xl bg-slate-200 p-8 shadow-2xl border border-gray-100">
              <h3 className="mb-6 text-2xl font-medium text-primary">Experience. Insight. Discretion.</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                In the world of luxury asset management, there is no substitute for experience and knowledge. We have
                spent years managing high-value assets across complex sectors, allowing us to understand the unique
                challenges and opportunities that come with them.
              </p>
              <p className="leading-relaxed text-gray-600">
                Our work goes beyond management — it&apos;s about stewardship. We act with intent, insight, and absolute
                discretion to ensure your vision is protected and realized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
