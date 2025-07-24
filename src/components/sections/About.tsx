"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb, Palette, Target, Zap, Settings, Code } from "lucide-react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-teal-500 rounded-full opacity-20 animate-bounce"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Creative illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg">
              {/* Main illustration container */}
              <div className="relative h-80 md:h-96 flex items-center justify-center">
                {/* Background geometric shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-50 animate-pulse"></div>
                </div>
                
                {/* Central design elements */}
                <div className="relative z-10 flex flex-col items-center space-y-6">
                  {/* Lightbulb icon */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    {/* Radiating lines */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-300 rounded-full animate-ping delay-300"></div>
                  </div>
                  
                  {/* Design tools */}
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Creative text */}
                  <div className="text-center">
                    <span className="text-lg font-semibold text-gray-700 bg-white px-4 py-2 rounded-full shadow-md">
                      CREATE
                    </span>
                  </div>
                </div>
                
                {/* Floating design elements */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-blue-400 rounded-lg opacity-70 animate-float"></div>
                <div className="absolute top-12 right-8 w-6 h-6 bg-green-400 rounded-full opacity-70 animate-float delay-150"></div>
                <div className="absolute bottom-8 left-12 w-10 h-10 bg-yellow-400 rounded-full opacity-70 animate-float delay-300"></div>
                <div className="absolute bottom-12 right-6 w-7 h-7 bg-purple-400 rounded-lg opacity-70 animate-float delay-450"></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Section label */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                ABOUT US
              </span>
            </div>
            
            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Commitment To{" "}
              <span className="text-transparent bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text">
                Quality And Innovation
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              PeakInfoSolution is a premier web development, digital marketing, and software solutions company dedicated to driving business success through cutting-edge technology and innovative strategies. With a team of highly skilled professionals, we deliver top-notch services in website development, mobile application development, search engine optimization (SEO), social media marketing (SMM), Paid media Marketing, Branding Process and influencer marketing (IM). Our commitment to excellence and result-driven approach has helped numerous businesses establish a strong online presence, enhance customer engagement, and achieve their digital transformation goals.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="flex items-center space-x-2">
                  <span>EXPLORE MORE</span>
                  <Zap className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}