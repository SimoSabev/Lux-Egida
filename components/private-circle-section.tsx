"use client"
import {useEffect, useState} from "react";

export function PrivateCircleSection() {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            {threshold: 0.2}
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
        <section id="private-circle" className="bg-slate-100 py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        className={`mb-4 font-serif text-2xl font-light text-primary sm:text-3xl md:text-4xl lg:text-5xl transition-opacity duration-700 ${
                            isInView
                                ? "animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-in-out"
                                : "opacity-0"
                        }`}
                    >
                        <span className="font-medium">A Private Circle</span> of Principals
                    </h2>
                    <div
                        className={`mx-auto mb-8 sm:mb-12 md:mb-16 h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-secondary transition-opacity duration-700 ${
                            isInView
                                ? "animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out"
                                : "opacity-0"
                        }`}
                    ></div>
                </div>


                <div className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                    <div
                        className="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg sm:rounded-xl bg-slate-200 shadow-lg p-4 sm:p-6 md:p-8">
                        <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-medium text-primary">
                            A Club Without a Name, Built on Trust
                        </h3>
                        <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-gray-700">
                            We are more than an asset management firm — we represent a
                            discreet community of like-minded principals with intersecting
                            interests. Within this private circle, meaningful connections
                            are made, off-market opportunities shared, and trust is quietly
                            exchanged.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                            It is not a network we advertise. It is a space that exists
                            because of who we serve and how we operate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}