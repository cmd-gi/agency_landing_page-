'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-blue via-teal to-primary-blue overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-20 w-16 h-16 bg-bright-green rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-40 right-32 w-12 h-12 bg-yellow rounded-square rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1 }}
          className="absolute bottom-40 left-32 w-20 h-20 bg-red rounded-full"
        />
        
        {/* Floating UI Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute top-32 right-20 bg-white rounded-lg p-3 shadow-card"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bright-green rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">5.0 Rating</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="absolute bottom-60 right-16 bg-white rounded-lg p-3 shadow-card"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">200+ Clients</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="absolute top-60 left-16 bg-white rounded-lg p-3 shadow-card"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Award Winner</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Delta&apos;s First Branding Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Delta&apos;s First{' '}
              <span className="text-bright-green">Branding Agency</span>
              <br />
              Building More Than{' '}
              <span className="text-yellow">Two Decades</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We create exceptional digital experiences that drive business growth through innovative web development, digital marketing, and cutting-edge solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button className="inline-flex items-center gap-2 bg-bright-green hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 border border-white/20">
                View Portfolio
              </button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Animated Illustration */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Main Illustration */}
              <div className="relative w-full max-w-lg mx-auto">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
                >
                  <div className="aspect-square bg-gradient-to-br from-bright-green to-teal rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Social Media Icons around the illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-bright-green rounded-full flex items-center justify-center shadow-lg"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow rounded-full flex items-center justify-center shadow-lg"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 2.1 }}
                  className="absolute top-1/2 -right-6 w-10 h-10 bg-red rounded-full flex items-center justify-center shadow-lg"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 2.4 }}
                  className="absolute top-1/2 -left-6 w-10 h-10 bg-teal rounded-full flex items-center justify-center shadow-lg"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating UI Elements around the illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="absolute -top-8 left-0 bg-white rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-bright-green rounded-full"></div>
                <span className="text-xs text-gray-600">Online</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.8 }}
              className="absolute bottom-0 right-0 bg-white rounded-lg p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-teal">2k+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}