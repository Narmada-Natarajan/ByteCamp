import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Hero = () => {
    return (
        <div>
            <section className="pt-32 pb-24 md:my-15 bg-linear-to-b from-green-50 to-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            We build smart
                            <span className="text-green-600"> tech projects</span> for college success
                            <FaGraduationCap className="inline-block ml-3 text-green-500 text-4xl md:text-5xl align-middle" />
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg ">From idea to final delivery, we provide clean code, Live demos, and complete Documentation. Trusted by hundreds of students.
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=919445757405&text=Hi%20ByteCamp,%20I%20need%20a%20college%20project" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border border-green-500 text-green-600 px-6 py-2 rounded-xl hover:bg-green-50 transition">
                            <FaWhatsapp className="text-green-500 text-xl" />
                            Contact
                        </a>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl"></div>
                        <img src="assets/bytecampimg.png" alt="hero" className="relative z-10 rounded-3xl shadow-xl" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero