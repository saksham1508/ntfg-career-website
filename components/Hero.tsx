'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-primary-500/20 rounded-full px-4 py-2 mb-6"
            >
              <FaRocket className="mr-2" />
              <span className="text-sm font-medium">Join the Innovation Revolution</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Shape the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl"
            >
              Join NextTechFusionGadgets and work on cutting-edge projects that define tomorrow. 
              We're looking for passionate innovators in AI, DevOps, Full Stack Development, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/jobs"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105"
              >
                Learn About Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-500/30"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-primary-200 text-sm">Open Positions</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400">200+</div>
                <div className="text-primary-200 text-sm">Team Members</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-primary-200 text-sm">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl"
              >
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-sm font-medium">AI Engineer</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 left-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl"
              >
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm font-medium">DevOps</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl"
              >
                <div className="text-2xl mb-2">💻</div>
                <div className="text-sm font-medium">Full Stack</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-0 left-5 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl"
              >
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm font-medium">Mobile Dev</div>
              </motion.div>

              {/* Central Illustration */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-60 h-60 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full flex items-center justify-center">
                  <FaRocket size={80} className="text-yellow-400" />
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero