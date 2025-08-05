'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setLoading(false)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['careers@nexttechfusion.com', 'info@nexttechfusion.com'],
      color: 'text-blue-500'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'text-green-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'Tech Valley, CA 94000', 'United States'],
      color: 'text-red-500'
    }
  ]

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Tech Valley, CA 94000',
      phone: '+1 (555) 123-4567',
      email: 'sf@nexttechfusion.com'
    },
    {
      city: 'New York',
      address: '456 Tech Street, Manhattan, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@nexttechfusion.com'
    },
    {
      city: 'London',
      address: '789 Innovation Lane, London, UK EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'london@nexttechfusion.com'
    },
    {
      city: 'Singapore',
      address: '321 Tech Hub, Singapore 018989',
      phone: '+65 6123 4567',
      email: 'singapore@nexttechfusion.com'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Have questions about our career opportunities or want to learn more about NextTechFusionGadgets? 
              We'd love to hear from you. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="career-inquiry">Career Inquiry</option>
                      <option value="general-question">General Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="media-inquiry">Media Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin mr-2" size={16} />
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0`}>
                        <info.icon className={`${info.color}`} size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-primary-700">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices around the world, we're always close to our clients and talent. 
              Visit us at any of our locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">{office.address}</p>
                  <p className="text-sm">{office.phone}</p>
                  <p className="text-sm">{office.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about careers at NextTechFusionGadgets.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is the hiring process like?",
                answer: "Our hiring process typically includes an initial screening, technical assessment, team interviews, and final decision. The entire process usually takes 2-3 weeks."
              },
              {
                question: "Do you offer remote work opportunities?",
                answer: "Yes! We offer flexible work arrangements including fully remote, hybrid, and on-site positions depending on the role and team requirements."
              },
              {
                question: "What benefits do you provide?",
                answer: "We offer comprehensive benefits including health insurance, retirement plans, unlimited PTO, professional development budget, and many other perks."
              },
              {
                question: "How can I prepare for the technical interview?",
                answer: "We'll provide specific guidance based on the role, but generally focus on problem-solving, system design, and relevant technical skills for your position."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage