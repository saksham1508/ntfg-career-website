'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaUsers, FaGlobe, FaLightbulb, FaHeart, FaAward } from 'react-icons/fa'

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Employees Worldwide' },
    { number: '50+', label: 'Countries Served' },
    { number: '10M+', label: 'Users Globally' },
    { number: '15+', label: 'Years of Innovation' }
  ]

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and methodologies to stay ahead of the curve.',
      color: 'text-blue-500'
    },
    {
      icon: FaUsers,
      title: 'People-Centric',
      description: 'Our people are our greatest asset. We invest in their growth, well-being, and success because they drive our innovation.',
      color: 'text-green-500'
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'We create solutions that make a positive difference in people\'s lives around the world, fostering connection and progress.',
      color: 'text-purple-500'
    },
    {
      icon: FaLightbulb,
      title: 'Continuous Learning',
      description: 'We embrace curiosity and encourage continuous learning, ensuring our team stays at the forefront of technological advancement.',
      color: 'text-yellow-500'
    },
    {
      icon: FaHeart,
      title: 'Passion-Driven',
      description: 'We\'re passionate about what we do, and this enthusiasm drives us to create exceptional products and experiences.',
      color: 'text-red-500'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service and team collaboration.',
      color: 'text-indigo-500'
    }
  ]

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'NextTechFusionGadgets was founded with a vision to revolutionize technology and create innovative solutions.'
    },
    {
      year: '2012',
      title: 'First Major Product Launch',
      description: 'Launched our flagship product that gained recognition in the tech industry and established our market presence.'
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded operations internationally, opening offices in Europe and Asia to serve a global customer base.'
    },
    {
      year: '2018',
      title: 'AI Innovation Lab',
      description: 'Established our AI Innovation Lab, focusing on machine learning and artificial intelligence research.'
    },
    {
      year: '2021',
      title: 'Sustainable Tech Initiative',
      description: 'Launched our commitment to sustainable technology and carbon-neutral operations by 2025.'
    },
    {
      year: '2024',
      title: 'Next Generation Platform',
      description: 'Unveiled our next-generation platform that integrates AI, IoT, and cloud technologies seamlessly.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About NextTechFusionGadgets
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              We're a forward-thinking technology company dedicated to creating innovative solutions 
              that shape the future. Our mission is to bridge the gap between cutting-edge technology 
              and real-world applications that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To empower businesses and individuals through innovative technology solutions 
                that simplify complex challenges and unlock new possibilities. We believe 
                technology should be accessible, intuitive, and transformative.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every day, we work towards creating a more connected, efficient, and 
                sustainable world through the power of technology and human ingenuity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the global leader in technology innovation, recognized for our 
                commitment to excellence, sustainability, and positive impact on society. 
                We envision a future where our solutions enable unprecedented collaboration 
                and progress.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're building tomorrow's technology today, with a focus on creating 
                solutions that are not just advanced, but also ethical and inclusive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do, from how we build products to how we treat our team and customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                  <value.icon className={`${value.color}`} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global technology leader, here are the key milestones in our journey.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of a team that's shaping the future of technology. 
              Explore our open positions and start your journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/jobs"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage