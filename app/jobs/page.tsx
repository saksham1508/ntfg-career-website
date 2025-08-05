'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaClock, 
  FaDollarSign, 
  FaFilter,
  FaArrowRight,
  FaSpinner
} from 'react-icons/fa'

interface Job {
  _id: string
  title: string
  department: string
  location: string
  type: string
  level: string
  description: string
  skills: string[]
  salary?: {
    min: number
    max: number
    currency: string
  }
  postedDate: string
  featured: boolean
}

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    type: '',
    level: ''
  })
  const [showFilters, setShowFilters] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  })

  const departments = [
    'Engineering',
    'AI & Machine Learning',
    'DevOps & Infrastructure',
    'Mobile Development',
    'Product Management',
    'Design',
    'Data Science',
    'Quality Assurance',
    'Marketing',
    'Sales'
  ]

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship']
  const jobLevels = ['Entry', 'Mid', 'Senior', 'Lead']

  useEffect(() => {
    fetchJobs()
  }, [searchTerm, filters, pagination.page])

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(searchTerm && { search: searchTerm }),
        ...(filters.department && { department: filters.department }),
        ...(filters.location && { location: filters.location }),
        ...(filters.type && { type: filters.type }),
        ...(filters.level && { level: filters.level })
      })

      const response = await fetch(`/api/jobs?${params}`)
      const data = await response.json()

      if (data.success) {
        setJobs(data.data.jobs)
        setPagination(prev => ({
          ...prev,
          total: data.data.pagination.total,
          pages: data.data.pagination.pages
        }))
      }
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPagination(prev => ({ ...prev, page: 1 }))
    fetchJobs()
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const clearFilters = () => {
    setFilters({
      department: '',
      location: '',
      type: '',
      level: ''
    })
    setSearchTerm('')
    setPagination(prev => ({ ...prev, page: 1 }))
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover exciting opportunities at NextTechFusionGadgets
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FaFilter className="mr-2" />
                Filters
              </button>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select
                value={filters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Location"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />

              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={filters.level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Levels</option>
                {jobLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={clearFilters}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear All Filters
              </button>
              <span className="text-gray-600">
                {pagination.total} jobs found
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <FaSpinner className="animate-spin text-primary-600" size={32} />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      {job.featured && (
                        <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
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
                      {job.salary && (
                        <div className="flex items-center text-sm text-gray-600">
                          <FaDollarSign className="mr-2 text-gray-400" size={12} />
                          {formatSalary(job.salary)}
                        </div>
                      )}
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
                        href={`/jobs/${job._id}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium group-hover:translate-x-1 transition-all duration-200"
                      >
                        View Details
                        <FaArrowRight className="ml-1" size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
                    disabled={pagination.page === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setPagination(prev => ({ ...prev, page }))}
                      className={`px-4 py-2 border rounded-lg ${
                        page === pagination.page
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setPagination(prev => ({ ...prev, page: Math.min(pagination.pages, prev.page + 1) }))}
                    disabled={pagination.page === pagination.pages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default JobsPage