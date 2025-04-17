import Image from "next/image"
import { Shield, LineChart, Landmark, FileText, Building2, Briefcase } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Wealth Protection",
      description:
        "Comprehensive strategies designed to preserve and protect your assets from market volatility, litigation, and other potential threats.",
      icon: <Shield className="h-10 w-10 text-secondary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Investment Strategy",
      description:
        "Sophisticated investment approaches tailored to your risk tolerance, time horizon, and financial objectives.",
      icon: <LineChart className="h-10 w-10 text-secondary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Estate Planning",
      description:
        "Comprehensive estate planning services to ensure your legacy is preserved and transferred according to your wishes.",
      icon: <Landmark className="h-10 w-10 text-secondary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Tax Optimization",
      description:
        "Strategic tax planning to minimize liabilities and maximize wealth retention across multiple jurisdictions.",
      icon: <FileText className="h-10 w-10 text-secondary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Business Advisory",
      description:
        "Expert guidance for business owners on succession planning, valuation, and strategic growth initiatives.",
      icon: <Briefcase className="h-10 w-10 text-secondary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Private Banking",
      description:
        "Exclusive private banking services offering preferential rates, personalized attention, and discreet handling of financial matters.",
      icon: <Building2 className="h-10 w-10 text-secondary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="services" className="bg-primary-50 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-primary sm:text-4xl md:text-5xl">
            <span className="font-medium">Exclusive</span> Services
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-secondary"></div>
          <p className="mb-16 text-gray-600 md:text-lg">
            Our bespoke advisory services are tailored to meet the unique needs of high-net-worth individuals and
            families.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-elegant transition-all duration-300 hover:border-primary-200 hover:shadow-elegant-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 p-2 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 h-1 w-12 bg-secondary transition-all duration-300 group-hover:w-16"></div>
                <h3 className="mb-3 text-xl font-medium text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
