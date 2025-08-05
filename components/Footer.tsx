import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold">NextTechFusionGadgets</div>
                <div className="text-sm text-gray-400">Innovation at its finest</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We're a cutting-edge technology company focused on creating innovative solutions 
              that shape the future. Join our team and be part of something extraordinary.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" size={16} />
                <span className="text-gray-300">careers@nexttechfusion.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mr-3 mt-1" size={16} />
                <span className="text-gray-300">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94000<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NextTechFusionGadgets. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer