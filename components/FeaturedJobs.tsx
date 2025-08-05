'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaArrowRight, FaStar } from 'react-icons/fa'

const FeaturedJobs = () => {
  // Mock featured jobs data
  const featuredJobs = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA',
      type: 'Full-time',
      level: 'Senior',
      salary: { min: 150000, max: 200000, currency: 'USD' },
      description: 'Lead the development of next-generation AI systems and machine learning models that power our core products.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
      postedDate: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'DevOps Engineer',
      department: 'DevOps & Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      level: 'Mid',
      salary: { min: 120000, max: 160000, currency: 'USD' },
      description: 'Build and maintain scalable cloud infrastructure, CI/CD pipelines, and monitoring systems.',
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      postedDate: '2024-01-14',
      featured: true
    },
    {
      id: '3',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      level: 'Mid',
      salary: { min: 110000, max: 150000, currency: 'USD' },
      description: 'Develop end-to-end web applications using modern frameworks and technologies.',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
      postedDate: '2024-01-13',
      featured: true
    },
    {
      id: '4',
      title: 'iOS Developer',
      department: 'Mobile Development',
      location: 'Austin, TX',
      type: 'Full-time',
      level: 'Senior',
      salary: { min: 130000, max: 170000, currency: 'USD' },
      description: 'Create beautiful and performant iOS applications that delight millions of users.',
      skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'iOS SDK'],
      postedDate: '2024-01-12',
      featured: true
    },
    {
      id: '5',
      title: 'Android Developer',
      department: 'Mobile Development',
      location: 'Seattle, WA',
      type: 'Full-time',
      level: 'Mid',
      salary: { min: 115000, max: 155000, currency: 'USD' },
      description: 'Build native Android applications with modern architecture and best practices.',
      skills: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'MVVM', 'Room'],
      postedDate: '2024-01-11',
      featured: true
    },
    {
      id: '6',
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Boston, MA',
      type: 'Full-time',
      level: 'Senior',
      salary: { min: 140000, max: 180000, currency: 'USD' },
      description: 'Extract insights from complex datasets and build predictive models to drive business decisions.',
      skills: ['Python', 'R', 'SQL', 'Pandas', 'Scikit-learn'],
      postedDate: '2024-01-10',
      featured: true
    }
  ]

  const formatSalary = (salary: { min: number; max: number; currency: string }) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: salary.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 14) return '1 week ago'
    return `${Math.floor(diffDays / 7)} weeks ago`
  }

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
          <div className="inline-flex items-center bg-primary-100 text-primary-800 rounded-full px-4 py-2 mb-4">
            <FaStar className="mr-2" size={16} />
            <span className="text-sm font-medium">Featured Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hot Jobs Right Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss out on these exciting opportunities. Our most sought-after positions 
            are waiting for the right talent to join our innovative team.
          </p>
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 h-full border border-gray-100 hover:border-primary-200">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-200">
                      {job.title}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium">
                      {job.department}
                    </p>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" size={12} />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaClock className="mr-2 text-gray-400" size={12} />
                    {job.type} • {job.level}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaDollarSign className="mr-2 text-gray-400" size={12} />
                    {formatSalary(job.salary)}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {job.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {job.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    {getTimeAgo(job.postedDate)}
                  </span>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    View Details
                    <FaArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/jobs"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Explore All Positions
            <FaArrowRight className="ml-2" size={16} />
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            Can't find the perfect role? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Get in touch</Link> and let's talk about creating one for you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedJobs