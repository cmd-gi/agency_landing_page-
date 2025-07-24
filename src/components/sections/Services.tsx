'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Services = () => {
  const [activeTab, setActiveTab] = useState('Web Development')

  const services = [
    {
      id: 'Web Development',
      title: 'Web Development',
      description: 'We create responsive, visually appealing, and high-performing websites tailored to your business needs. Our expertise spans across multiple platforms, including WordPress, React, Laravel, and custom CMS solutions.',
      icon: '🌐'
    },
    {
      id: 'Software Development',
      title: 'Software Development',
      description: 'Custom software solutions designed to streamline your business operations and enhance productivity. We develop scalable applications using cutting-edge technologies.',
      icon: '💻'
    },
    {
      id: 'Digital Marketing',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive qualified traffic to your business. From SEO to PPC, we cover it all.',
      icon: '📈'
    },
    {
      id: 'Social Media Marketing',
      title: 'Social Media Marketing (SMM)',
      description: 'Engaging social media campaigns that build brand awareness and connect with your target audience across all major platforms.',
      icon: '📱'
    },
    {
      id: 'Content Solutions',
      title: 'Content Solutions',
      description: 'High-quality content creation services including copywriting, blog posts, and marketing materials that resonate with your audience.',
      icon: '✍️'
    },
    {
      id: 'Branding & Design',
      title: 'Branding & Design',
      description: 'Complete branding solutions from logo design to brand identity development that helps your business stand out in the market.',
      icon: '🎨'
    }
  ]

  const activeService = services.find(service => service.id === activeTab)

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Our Services</h2>
          <h3 className="text-2xl text-gray-600 font-medium">
            We Provide Wide Range<br />Of Business Services
          </h3>
        </div>

        {/* Services Container */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Service Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    activeTab === service.id
                      ? 'bg-[#0891B2] text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xl">{service.icon}</span>
                  <span className="font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0891B2] rounded-lg p-8 text-white min-h-[400px] flex items-center">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Content */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-6">{activeService?.title}</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    {activeService?.description}
                  </p>
                  <button className="bg-[#10B981] hover:bg-[#0D9668] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    View Detail
                    <span className="text-lg">→</span>
                  </button>
                </div>

                {/* Illustration */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-80 h-80">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/Marketing-amico-13.webp?"
                      alt="Marketing Illustration"
                      fill
                      className="object-contain"
                    />
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#F59E0B] rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#10B981] rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -left-6 w-4 h-4 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services