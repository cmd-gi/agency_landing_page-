"use client";

import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-blue mb-4">
            FEEL FREE TO CONTACT US
          </h2>
        </div>

        {/* Dual CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Phone Card */}
          <div className="bg-white rounded-lg shadow-card p-8 text-center border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="bg-teal text-white rounded-full p-4 shadow-lg">
                <Phone size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary-blue mb-3">
              📞 Need Assistance? Call Us Today!
            </h3>
            <a 
              href="tel:6364958672"
              className="inline-block bg-bright-green text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call Now: 63649 58672
            </a>
          </div>

          {/* Second Phone Card */}
          <div className="bg-white rounded-lg shadow-card p-8 text-center border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="bg-teal text-white rounded-full p-4 shadow-lg">
                <Phone size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary-blue mb-3">
              📞 Need Assistance? Call Us Today!
            </h3>
            <a 
              href="tel:9385349622"
              className="inline-block bg-bright-green text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call Now: 9385349622
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}