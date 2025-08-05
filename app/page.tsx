'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaUsers, FaLightbulb, FaGlobe } from 'react-icons/fa'
import Hero from '@/components/Hero'
import JobCategories from '@/components/JobCategories'
import WhyJoinUs from '@/components/WhyJoinUs'
import FeaturedJobs from '@/components/FeaturedJobs'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Job Categories Section */}
      <JobCategories />

      {/* Why Join Us Section */}
      <WhyJoinUs />

      {/* Featured Jobs Section */}
      <FeaturedJobs />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join NextTechFusionGadgets and be part of a team that's revolutionizing technology.
              Your next career adventure starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/jobs"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
              >
                View All Jobs
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}