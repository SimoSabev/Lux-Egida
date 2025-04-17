import { Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-100 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-primary sm:text-4xl md:text-5xl animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out">
            <span className="font-medium">Acting in</span> Your Best Interest
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-secondary animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out"></div>
          <p className="mb-16 text-gray-600 md:text-lg animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
            We Don&apos;t Just Represent. We Safeguard.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="order-1 animate-fade-right animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out shadow-2xl">
            <div className="rounded-xl bg-slate-50 p-8 shadow-elegant border border-gray-100 h-full">
              <h3 className="mb-6 text-2xl font-medium text-primary">We Don&apos;t Just Represent. We Safeguard.</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Our mission is simple: protect the principal&apos;s interest at all times. That means anticipating what
                others miss, guiding with clarity, and acting not just on your behalf, but in your best interest.
              </p>
              <p className="leading-relaxed text-gray-600">
                Whether the focus is yachting, aviation, or real estate, our role is not simply transactional but rather
                strategic. We are proactive and grounded in loyalty to your long-term goals.
              </p>
            </div>
          </div>

          <div className="order-2 animate-fade-left animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out shadow-2xl">
            <div className="rounded-xl bg-slate-50 p-8 shadow-elegant border border-gray-100 h-full">
              <h3 className="mb-6 text-2xl font-medium text-primary">Strategic Partnership</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                We align our expertise with your vision to create exceptional outcomes across all your luxury assets.
              </p>
              <p className="leading-relaxed text-gray-600">
                Our approach is built on understanding your unique needs and preferences, then applying our specialized
                knowledge to protect and enhance your investments.
              </p>
              <div className="mt-8 flex items-center">
                <div className="h-12 w-1 bg-secondary"></div>
                <p className="ml-4 italic text-gray-600">&quot;Excellence is not a skill. It&apos;s an attitude.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
