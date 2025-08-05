'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaRobot, 
  FaCogs, 
  FaCode, 
  FaMobile, 
  FaChartLine, 
  FaPalette, 
  FaShieldAlt, 
  FaUsers,
  FaArrowRight
} from 'react-icons/fa'

const JobCategories = () => {
  const categories = [
    {
      icon: FaRobot,
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems and algorithms that learn and adapt',
      openPositions: 12,
      color: 'from-purple-500 to-pink-500',
      roles: ['AI Engineer', 'ML Engineer', 'Data Scientist', 'Research Scientist']
    },
    {
      icon: FaCogs,
      title: 'DevOps & Infrastructure',
      description: 'Scale and optimize our cloud infrastructure and deployment pipelines',
      openPositions: 8,
      color: 'from-blue-500 to-cyan-500',
      roles: ['DevOps Engineer', 'Cloud Architect', 'Site Reliability Engineer', 'Platform Engineer']
    },
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'Create end-to-end solutions with modern web technologies',
      openPositions: 15,
      color: 'from-green-500 to-teal-500',
      roles: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Software Engineer']
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications',
      openPositions: 6,
      color: 'from-orange-500 to-red-500',
      roles: ['iOS Developer', 'Android Developer', 'React Native Developer', 'Flutter Developer']
    },
    {
      icon: FaChartLine,
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights and business intelligence',
      openPositions: 7,
      color: 'from-indigo-500 to-purple-500',
      roles: ['Data Analyst', 'Business Intelligence', 'Data Engineer', 'Analytics Engineer']
    },
    {
      icon: FaPalette,
      title: 'Design & UX',
      description: 'Create beautiful and intuitive user experiences',
      openPositions: 4,
      color: 'from-pink-500 to-rose-500',
      roles: ['UX Designer', 'UI Designer', 'Product Designer', 'Design Systems']
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      description: 'Protect our systems and ensure regulatory compliance',
      openPositions: 5,
      color: 'from-gray-600 to-gray-800',
      roles: ['Security Engineer', 'Compliance Officer', 'Penetration Tester', 'Security Analyst']
    },
    {
      icon: FaUsers,
      title: 'Product & Management',
      description: 'Lead product strategy and drive business growth',
      openPositions: 3,
      color: 'from-yellow-500 to-orange-500',
      roles: ['Product Manager', 'Project Manager', 'Scrum Master', 'Business Analyst']
    }
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
    <section className="py-20 bg-gray-50">
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
            Explore Career Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your next career move across our diverse range of departments. 
            From cutting-edge AI to robust infrastructure, find where your passion meets purpose.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/jobs?department=${encodeURIComponent(category.title)}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full border border-gray-100 hover:border-transparent">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Open Positions */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary-600">
                      {category.openPositions} open positions
                    </span>
                    <FaArrowRight className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" size={14} />
                  </div>

                  {/* Sample Roles */}
                  <div className="space-y-1">
                    {category.roles.slice(0, 2).map((role, roleIndex) => (
                      <div key={roleIndex} className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1 inline-block mr-1">
                        {role}
                      </div>
                    ))}
                    {category.roles.length > 2 && (
                      <div className="text-xs text-gray-400 inline-block">
                        +{category.roles.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/jobs"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View All Positions
            <FaArrowRight className="ml-2" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default JobCategories