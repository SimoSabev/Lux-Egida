"use client";
import { useEffect, useState } from "react";
import { Anchor, Plane, Building } from "lucide-react";

export function CrossSectorSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("expertise");

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsInView(entry.isIntersecting);
          });
        },
        { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
      <section id="expertise" className="bg-primary-50 py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
                className={`mb-4 font-serif text-3xl font-light text-primary sm:text-4xl md:text-5xl transition-opacity duration-700 ${
                    isInView
                        ? "animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out"
                        : "opacity-0"
                }`}
            >
              <span className="font-medium">Cross-Sector</span> Expertise
            </h2>
            <div
                className={`mx-auto mb-16 h-1 w-24 bg-secondary transition-opacity duration-700 ${
                    isInView
                        ? "animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out"
                        : "opacity-0"
                }`}
            ></div>
          </div>

          <div
              className={`mx-auto max-w-4xl rounded-xl bg-slate-200 p-8 shadow-2xl border border-gray-100 transition-opacity duration-1000 ${
                  isInView
                      ? "animate-fade-up animate-once animate-duration-1000 animate-delay-400 animate-ease-in-out"
                      : "opacity-0"
              }`}
          >
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: <Anchor className="h-8 w-8" />, label: "Yachting" },
                { icon: <Plane className="h-8 w-8" />, label: "Aviation" },
                { icon: <Building className="h-8 w-8" />, label: "Real Estate" },
              ].map(({ icon, label }, ) => (
                  <div key={label} className="text-center group">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-primary-100">
                      <div className="text-secondary transition-all duration-300 group-hover:scale-110">
                        {icon}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-medium text-primary">{label}</h3>
                  </div>
              ))}
            </div>

            <div className="mt-12 transition-opacity duration-700">
              <p className="mb-6 px-10 text-justify text-gray-600">
                Our reach spans across three of the main key pillars of luxury asset ownership. While we offer support
                across all areas — from acquisition to operations — what truly sets us apart is the depth of our
                alignment with your interests.
              </p>
              <p className="px-10 text-justify text-gray-600">
                We make complexity invisible and decision-making intuitive — bringing clarity, control, and confidence
                across multiple sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
