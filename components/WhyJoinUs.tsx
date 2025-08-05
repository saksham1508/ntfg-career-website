'use client'

import { motion } from 'framer-motion'
import { 
  FaRocket, 
  FaUsers, 
  FaLightbulb, 
  FaGlobe, 
  FaHeart, 
  FaGraduationCap,
  FaDollarSign,
  FaClock
} from 'react-icons/fa'

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: FaRocket,
      title: 'Innovation First',
      description: 'Work on cutting-edge projects that push the boundaries of technology and shape the future.',
      color: 'text-blue-500'
    },
    {
      icon: FaUsers,
      title: 'Collaborative Culture',
      description: 'Join a diverse team of passionate professionals who support each other\'s growth and success.',
      color: 'text-green-500'
    },
    {
      icon: FaLightbulb,
      title: 'Creative Freedom',
      description: 'Express your creativity and bring your ideas to life in an environment that values innovation.',
      color: 'text-yellow-500'
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'Make a difference on a global scale with products and services used by millions worldwide.',
      color: 'text-purple-500'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Access to training, conferences, and educational resources to keep your skills sharp.',
      color: 'text-indigo-500'
    },
    {
      icon: FaDollarSign,
      title: 'Competitive Package',
      description: 'Attractive salary, equity options, and comprehensive benefits package.',
      color: 'text-green-600'
    },
    {
      icon: FaClock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote options, and unlimited PTO to maintain healthy balance.',
      color: 'text-orange-500'
    },
    {
      icon: FaHeart,
      title: 'Wellness Focus',
      description: 'Health insurance, mental health support, gym memberships, and wellness programs.',
      color: 'text-red-500'
    }
  ]

  const stats = [
    { number: '95%', label: 'Employee Satisfaction' },
    { number: '4.8/5', label: 'Glassdoor Rating' },
    { number: '2.5x', label: 'Faster Career Growth' },
    { number: '100%', label: 'Remote Flexibility' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose NextTechFusionGadgets?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just building products; we're building careers, fostering innovation, 
            and creating an environment where exceptional talent thrives.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-primary-50 transition-colors duration-300`}>
                <benefit.icon className={`${benefit.color} group-hover:scale-110 transition-transform duration-300`} size={24} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl text-primary-600 mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-6 leading-relaxed">
              NextTechFusionGadgets isn't just a workplace—it's a launchpad for innovation. 
              The collaborative environment, cutting-edge projects, and supportive leadership 
              have accelerated my career beyond what I thought possible.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                S
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-gray-600 text-sm">Senior AI Engineer</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">We constantly push boundaries and embrace new technologies to solve complex problems.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600">We believe the best solutions come from diverse perspectives working together.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600">We strive for excellence in everything we do, from code quality to customer experience.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyJoinUs