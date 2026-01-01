import React from 'react'

export function Features() {
    const items = [
        { title: "Live Google Meet Demo", desc: "We explain the full project clearly before delivery." },
        { title: "Clean & Optimized Code", desc: "Industry-level structured code with best practices." },
        { title: "Complete Documentation", desc: "Project Report is also provided if needed." },
        { title: "On-Time Delivery", desc: "Your deadlines are our priority. We serve on time." },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold">Why Choose ByteCamp?</h3>
                <p className="mt-4 text-gray-600">Our way of serving students is transparent and very effective.</p>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-green-100 bg-green-50 hover:shadow-lg transition">
                            <h4 className="text-xl font-semibold text-green-600">{f.title}</h4>
                            <p className="mt-3 text-gray-600 font-semibold">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features