import { Anchor, Plane, Building } from "lucide-react"

export function CrossSectorSection() {
  return (
    <section id="expertise" className="bg-primary-50 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-primary sm:text-4xl md:text-5xl animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out">
            <span className="font-medium">Cross-Sector</span> Expertise
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-secondary animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out"></div>
          <p className="mb-16 text-gray-600 md:text-lg animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
            Yachting. Aviation. Real Estate.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-xl bg-slate-200 p-8 shadow-2xl border border-gray-100 animate-fade-up animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-primary-100">
                <Anchor className="h-8 w-8 text-secondary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-primary">Yachting</h3>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-primary-100">
                <Plane className="h-8 w-8 text-secondary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-primary">Aviation</h3>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-primary-100">
                <Building className="h-8 w-8 text-secondary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-primary">Real Estate</h3>
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-6 px-10 text-justify text-gray-600">
              Our reach spans across three of the main key pillars of luxury asset ownership. While we offer support
              across all areas — from acquisition to operations — what truly sets us apart is the depth of our alignment
              with your interests.
            </p>
            <p className="px-10 text-justify text-gray-600">
              We make complexity invisible and decision-making intuitive — bringing clarity, control, and confidence
              across multiple sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
