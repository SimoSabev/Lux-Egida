"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

export function PrivateCircleSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsInView(entry.isIntersecting);
          });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    const section = document.getElementById('private-circle');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
      <section id="private-circle" className="bg-slate-100 py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
                className={`mb-4 font-serif text-3xl font-light text-primary sm:text-4xl md:text-5xl transition-opacity duration-700 ${
                    isInView
                        ? "animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out"
                        : "opacity-0"
                }`}
            >
              <span className="font-medium">A Private Circle</span> of Principals
            </h2>
            <div
                className={`mx-auto mb-16 h-1 w-24 bg-secondary transition-opacity duration-700 ${
                    isInView
                        ? "animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out"
                        : "opacity-0"
                }`}
            ></div>
            <p
                className={`mb-16 text-gray-600 md:text-lg transition-opacity duration-700 ${
                    isInView
                        ? "animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out"
                        : "opacity-0"
                }`}
            >
              A Club Without a Name, Built on Trust
            </p>
          </div>

          <div
              className={`relative mx-auto max-w-5xl overflow-hidden rounded-xl shadow-2xl transition-opacity duration-1000 ${
                  isInView
                      ? "animate-fade-up animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out"
                      : "opacity-0"
              }`}
          >
            <Image
                src="https://placehold.co/1200x600/f0f1f7/1e2756?text=Exclusive+Network"
                alt="Exclusive network"
                width={1200}
                height={600}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="max-w-2xl rounded-xl bg-slate-200 shadow-lg p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-medium text-primary">
                  A Club Without a Name, Built on Trust
                </h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  We are more than an asset management firm — we represent a
                  discreet community of like-minded principals with intersecting
                  interests. Within this private circle, meaningful connections
                  are made, off-market opportunities shared, and trust is quietly
                  exchanged.
                </p>
                <p className="leading-relaxed text-gray-700">
                  It is not a network we advertise. It is a space that exists
                  because of who we serve and how we operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
