"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Image from "next/image"

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (data) => {
    // In a real implementation, you would send this data to your server
    console.log(data)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSuccess(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-primary-50 to-white py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-primary-800 sm:text-4xl md:text-5xl">
            <span className="font-medium">Contact</span> Us
          </h2>
          <div className="mx-auto mb-16 h-1 w-24 bg-primary-300"></div>
          <p className="mb-16 text-gray-600 md:text-lg lg:text-xl">
            Schedule a confidential consultation to discuss how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="relative hidden overflow-hidden rounded-xl lg:col-span-2 lg:block">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Luxury office"
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-medium">Visit Our Office</h3>
              <p className="mb-6">Experience the luxury of our private consultation spaces</p>
              <div className="rounded-md bg-white/20 px-6 py-3 backdrop-blur-sm">
                123 Financial District
                <br />
                New York, NY 10004
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-primary-100 bg-white shadow-elegant">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-primary-700">Thank You</h3>
                  <p className="text-gray-600">Your message has been received. We will be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-primary-700">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        className={`w-full rounded-md border ${
                          errors.firstName ? "border-red-500" : "border-primary-200"
                        } px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-primary-700">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        className={`w-full rounded-md border ${
                          errors.lastName ? "border-red-500" : "border-primary-200"
                        } px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full rounded-md border ${
                        errors.email ? "border-red-500" : "border-primary-200"
                      } px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                  <div className="mt-6">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primary-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className={`w-full rounded-md border ${
                        errors.phone ? "border-red-500" : "border-primary-200"
                      } px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                  </div>
                  <div className="mt-6">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full rounded-md border ${
                        errors.message ? "border-red-500" : "border-primary-200"
                      } px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                      {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-md bg-primary-600 px-6 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
