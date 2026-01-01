import React from 'react'

export function Project() {
    const projects = [
        { title: "Web Development Projects", desc: "React, MERN, Full-stack & responsive websites." },
        { title: "AI / ML Projects", desc: "Machine learning, Deep learning & Real-world AI use cases." },
        { title: "Final Year Projects", desc: "Completely ready Final year Solutions." },
        { title: "App Development Projects", desc: "Logic-based, automation & backend focused Projects." },
        { title: "Data Science Projects", desc: "Data analysis, visualization & predictive models." },
        { title: "Custom College Projects", desc: "Tailored projects as per your syllabus & requirements." },
    ];


    return (
        <section className="py-2 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold">We Offer</h3>
                <p className="mt-4 text-gray-600">A wide range of tech projects designed for college students.</p>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl border border-green-100 bg-green-50 hover:shadow-xl transition"
                        >
                            <h4 className="text-xl font-semibold text-green-600">{p.title}</h4>
                            <p className="mt-3 text-gray-600 font-semibold">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Project