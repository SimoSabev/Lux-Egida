"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Working with this advisory team has transformed how I approach my financial future. Their attention to detail and personalized strategy has yielded exceptional results.",
      author: "Jonathan R.",
      position: "CEO, Technology Firm",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The level of discretion and expertise provided is unmatched. They've helped me navigate complex financial situations with confidence and clarity.",
      author: "Alexandra M.",
      position: "Family Office Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Their holistic approach to wealth management has allowed me to align my financial decisions with my personal values and long-term vision.",
      author: "Michael T.",
      position: "Real Estate Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative bg-white py-24 md:py-32">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary-100/30 blur-3xl"></div>
        <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-primary-100/30 blur-3xl"></div>
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-primary-800 sm:text-4xl md:text-5xl">
            <span className="font-medium">Client</span> Testimonials
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-primary-300"></div>
          <p className="mb-16 text-gray-600 md:text-lg lg:text-xl">
            Discover what our distinguished clients have to say about their experience working with us.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-xl border border-primary-100 bg-white p-8 shadow-elegant md:p-12">
            <div className="mb-8 flex flex-col items-center md:flex-row md:items-start md:gap-8">
              <div className="mb-6 flex-shrink-0 md:mb-0">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary-100">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="mb-8 text-lg italic text-gray-700 md:text-xl lg:text-2xl">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>
                <div className="inline-block border-t border-primary-200 pt-4">
                  <p className="font-medium text-primary-700">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 bg-white text-primary-600 transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 disabled:opacity-50"
                aria-label="Previous testimonial"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 bg-white text-primary-600 transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 disabled:opacity-50"
                aria-label="Next testimonial"
                disabled={isAnimating}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-4 left-0 flex w-full justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary-500 w-6" : "bg-primary-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
