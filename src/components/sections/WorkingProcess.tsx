'use client'

import React, { useState, useEffect } from 'react'
import { Check, Users, Settings, DollarSign, Clock, Heart, RotateCw, MessageCircle, Eye } from 'lucide-react'

const workingSteps = [
  {
    number: '01',
    title: 'Proven Track Record',
    description: 'We have successfully delivered numerous projects, helping businesses achieve their online goals.',
    icon: Check
  },
  {
    number: '02',
    title: 'Expert Team',
    description: 'Our team comprises industry experts with extensive experience in web development, digital marketing, and software solutions.',
    icon: Users
  },
  {
    number: '03',
    title: 'Customized Solutions',
    description: 'We don\'t believe in one-size-fits-all. Every solution we offer is customized to suit your business needs.',
    icon: Settings
  },
  {
    number: '04',
    title: 'Affordable Pricing',
    description: 'High-quality services at competitive prices, ensuring maximum ROI for our clients.',
    icon: DollarSign
  },
  {
    number: '05',
    title: '24/7 Support',
    description: 'We provide round-the-clock support to ensure your digital assets are always up and running efficiently.',
    icon: Clock
  }
]

const coreValues = [
  {
    number: '01',
    title: 'Passionate',
    description: 'We genuinely love marketing and believe that the best work comes from those who are truly passionate about helping others.',
    icon: Heart
  },
  {
    number: '02',
    title: 'Adaptable',
    description: 'We stay up to date on the latest industry trends and technologies to keep clients informed and our work cutting-edge.',
    icon: RotateCw
  },
  {
    number: '03',
    title: 'Responsive',
    description: 'We strive to always deliver what we promise to clients, to meet every deadline, and to ensure proactive communication.',
    icon: MessageCircle
  },
  {
    number: '04',
    title: 'Transparent',
    description: 'We have transparent processes to ensure we are on the right track and are achieving effective results for your business.',
    icon: Eye
  }
]

const WorkingProcess = () => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-medium text-teal-600 mb-2">Working Process</h2>
          <h3 className="text-4xl font-bold text-primary-blue mb-4">How Does It Work</h3>
          <p className="text-lg text-gray-600">Why Choose Us - Timeline</p>
        </div>

        {/* Working Steps Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-bright-green transform -translate-x-1/2 hidden lg:block"></div>
            
            {workingSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0
              const isVisible = visibleItems.has(`step-${index}`)
              
              return (
                <div
                  key={index}
                  id={`step-${index}`}
                  className={`animate-on-scroll relative flex items-center mb-12 lg:mb-20 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Content Card */}
                  <div 
                    className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div 
                      className={`bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500 transform transition-all duration-300 ${
                        hoveredItem === index ? 'scale-105 shadow-xl' : ''
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-bright-green rounded-full flex items-center justify-center text-white mr-4">
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-teal-600">Step {step.number}</span>
                          <h4 className="text-2xl font-bold text-primary-blue">{step.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-500 to-bright-green rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Spacer for mobile */}
                  <div className="lg:w-5/12 lg:block hidden"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-blue mb-4">Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              const isVisible = visibleItems.has(`value-${index}`)
              
              return (
                <div
                  key={index}
                  id={`value-${index}`}
                  className="animate-on-scroll group"
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.6s ease-out',
                    transitionDelay: `${index * 0.15}s`
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border-t-4 border-teal-500">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-bright-green rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent size={32} />
                    </div>
                    <div className="text-3xl font-bold text-teal-600 mb-2">{value.number}</div>
                    <h4 className="text-xl font-bold text-primary-blue mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-bright-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default WorkingProcess