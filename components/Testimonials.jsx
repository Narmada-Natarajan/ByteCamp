import React from "react";

export function Testimonials() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h3 className="text-3xl font-bold text-center text-gray-800">
          Our Client Testimonials
        </h3>
        <p className="mt-4 text-center text-gray-600">
          Trusted by students for our quality projects and clear explanations.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 flex justify-center">
            <img
              className="rounded-xl object-contain h-48"
              src="assets/r1.png"
              alt="First client review"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 flex justify-center">
            <img
              className="rounded-xl object-contain h-48"
              src="assets/r2.png"
              alt="Second client review"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 flex justify-center">
            <img
              className="rounded-xl object-contain h-48"
              src="assets/r3.png"
              alt="Third client review"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
