'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaDollarSign, 
  FaArrowLeft,
  FaShare,
  FaBookmark,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa'
import { toast } from 'react-toastify'

interface Job {
  _id: string
  title: string
  department: string
  location: string
  type: string
  level: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  skills: string[]
  salary?: {
    min: number
    max: number
    currency: string
  }
  postedDate: string
  applicationDeadline?: string
  featured: boolean
}

const JobDetailPage = () => {
  const params = useParams()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [applicationData, setApplicationData] = useState({
    coverLetter: '',
    resume: '',
    additionalInfo: ''
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (params.id) {
      fetchJob(params.id as string)
    }
  }, [params.id])

  const fetchJob = async (id: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/jobs/${id}`)
      const data = await response.json()

      if (data.success) {
        setJob(data.data)
      } else {
        toast.error('Job not found')
      }
    } catch (error) {
      console.error('Error fetching job:', error)
      toast.error('Failed to load job details')
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Check if user is logged in (you would implement this based on your auth system)
      const token = localStorage.getItem('token')
      if (!token) {
        toast.error('Please login to apply for jobs')
        return
      }

      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          jobId: job?._id,
          ...applicationData
        })
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Application submitted successfully!')
        setShowApplicationModal(false)
        setApplicationData({
          coverLetter: '',
          resume: '',
          additionalInfo: ''
        })
      } else {
        toast.error(data.error || 'Failed to submit application')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast.error('Failed to submit application')
    } finally {
      setSubmitting(false)
    }
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

  const shareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: `Check out this job opportunity: ${job?.title} at NextTechFusionGadgets`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Job link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <FaSpinner className="animate-spin text-primary-600" size={32} />
      </div>
    )
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <FaExclamationCircle className="text-gray-400 mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/jobs"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Browse All Jobs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/jobs"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <FaArrowLeft className="mr-2" size={16} />
              Back to Jobs
            </Link>
            <div className="flex space-x-2">
              <button
                onClick={shareJob}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FaShare size={16} />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <FaBookmark size={16} />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 mr-4">
                    {job.title}
                  </h1>
                  {job.featured && (
                    <div className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <p className="text-xl text-primary-600 font-medium mb-4">
                  {job.department}
                </p>

                <div className="flex flex-wrap gap-6 text-gray-600">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-gray-400" size={16} />
                    {job.type} • {job.level}
                  </div>
                  {job.salary && (
                    <div className="flex items-center">
                      <FaDollarSign className="mr-2 text-gray-400" size={16} />
                      {formatSalary(job.salary)}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setShowApplicationModal(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Job Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Posted</span>
                  <p className="font-medium">{getTimeAgo(job.postedDate)}</p>
                </div>
                {job.applicationDeadline && (
                  <div>
                    <span className="text-sm text-gray-500">Application Deadline</span>
                    <p className="font-medium">
                      {new Date(job.applicationDeadline).toLocaleDateString()}
                    </p>
                  </div>
                )}
                <div>
                  <span className="text-sm text-gray-500">Employment Type</span>
                  <p className="font-medium">{job.type}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Experience Level</span>
                  <p className="font-medium">{job.level}</p>
                </div>
              </div>
            </motion.div>

            {/* Apply Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button
                onClick={() => setShowApplicationModal(true)}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Apply for This Position
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply for {job.title}</h2>
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleApply} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume URL
                  </label>
                  <input
                    type="url"
                    value={applicationData.resume}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, resume: e.target.value }))}
                    placeholder="https://example.com/your-resume.pdf"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    value={applicationData.additionalInfo}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    placeholder="Any additional information you'd like to share..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationModal(false)}
                    className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin mr-2" size={16} />
                        Submitting...
                      </div>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default JobDetailPage