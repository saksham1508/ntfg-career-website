const mongoose = require('mongoose')

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ntfg-careers'

// Job schema (simplified for seeding)
const JobSchema = new mongoose.Schema({
  title: String,
  department: String,
  location: String,
  type: String,
  level: String,
  description: String,
  requirements: [String],
  responsibilities: [String],
  benefits: [String],
  skills: [String],
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  isActive: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  postedDate: { type: Date, default: Date.now },
  applicationDeadline: Date
}, { timestamps: true })

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema)

const sampleJobs = [
  {
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Senior',
    description: 'Lead the development of next-generation AI systems and machine learning models that power our core products. Work with cutting-edge technologies including deep learning, natural language processing, and computer vision to solve complex real-world problems.',
    requirements: [
      'Master\'s or PhD in Computer Science, AI, or related field',
      '5+ years of experience in machine learning and AI development',
      'Strong proficiency in Python, TensorFlow, and PyTorch',
      'Experience with large-scale distributed systems',
      'Published research in top-tier conferences is a plus'
    ],
    responsibilities: [
      'Design and implement advanced machine learning algorithms',
      'Lead AI research initiatives and prototype development',
      'Collaborate with cross-functional teams to integrate AI solutions',
      'Mentor junior engineers and contribute to technical strategy',
      'Stay current with latest AI research and industry trends'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited PTO and flexible work arrangements',
      'Professional development budget of $5,000 annually',
      'State-of-the-art equipment and tools'
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    salary: { min: 150000, max: 200000, currency: 'USD' },
    featured: true,
    applicationDeadline: new Date('2024-03-15')
  },
  {
    title: 'DevOps Engineer',
    department: 'DevOps & Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid',
    description: 'Build and maintain scalable cloud infrastructure, CI/CD pipelines, and monitoring systems. Help us scale our platform to serve millions of users worldwide with high availability and performance.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in DevOps or Site Reliability Engineering',
      'Strong experience with AWS, Docker, and Kubernetes',
      'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with monitoring and logging tools'
    ],
    responsibilities: [
      'Design and implement scalable cloud infrastructure',
      'Build and maintain CI/CD pipelines',
      'Monitor system performance and ensure high availability',
      'Automate deployment and operational processes',
      'Collaborate with development teams on best practices'
    ],
    benefits: [
      'Remote-first culture with flexible hours',
      'Health and wellness stipend',
      'Home office setup allowance',
      'Annual team retreats and conferences',
      'Stock options and performance bonuses'
    ],
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Monitoring', 'Linux'],
    salary: { min: 120000, max: 160000, currency: 'USD' },
    featured: true
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Mid',
    description: 'Develop end-to-end web applications using modern frameworks and technologies. Work on both frontend user interfaces and backend APIs to create seamless user experiences.',
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent experience',
      '3+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Understanding of RESTful APIs and GraphQL'
    ],
    responsibilities: [
      'Develop responsive web applications using React and TypeScript',
      'Build scalable backend services with Node.js',
      'Design and implement database schemas',
      'Write comprehensive tests and documentation',
      'Participate in code reviews and technical discussions'
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Flexible work schedule and hybrid options',
      'Learning and development opportunities',
      'Catered meals and snacks',
      'Gym membership reimbursement'
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Git'],
    salary: { min: 110000, max: 150000, currency: 'USD' },
    featured: true
  },
  {
    title: 'iOS Developer',
    department: 'Mobile Development',
    location: 'Austin, TX',
    type: 'Full-time',
    level: 'Senior',
    description: 'Create beautiful and performant iOS applications that delight millions of users. Work with the latest iOS technologies and contribute to our mobile-first strategy.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years of iOS development experience',
      'Strong proficiency in Swift and SwiftUI',
      'Experience with iOS SDK and Apple\'s development tools',
      'Published apps on the App Store'
    ],
    responsibilities: [
      'Develop native iOS applications using Swift and SwiftUI',
      'Implement complex UI/UX designs with attention to detail',
      'Integrate with backend APIs and third-party services',
      'Optimize app performance and user experience',
      'Collaborate with designers and product managers'
    ],
    benefits: [
      'MacBook Pro and iPhone for development',
      'WWDC attendance and iOS conference budget',
      'Flexible PTO and sabbatical options',
      'Health insurance and 401k matching',
      'Team building events and hackathons'
    ],
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'iOS SDK', 'Xcode', 'Git'],
    salary: { min: 130000, max: 170000, currency: 'USD' },
    featured: true
  },
  {
    title: 'Android Developer',
    department: 'Mobile Development',
    location: 'Seattle, WA',
    type: 'Full-time',
    level: 'Mid',
    description: 'Build native Android applications with modern architecture and best practices. Join our mobile team to create apps that users love and rely on daily.',
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent',
      '3+ years of Android development experience',
      'Strong knowledge of Kotlin and Android SDK',
      'Experience with Jetpack Compose and MVVM architecture',
      'Understanding of Material Design principles'
    ],
    responsibilities: [
      'Develop Android applications using Kotlin and Jetpack Compose',
      'Implement clean architecture patterns (MVVM, Repository)',
      'Work with RESTful APIs and local databases',
      'Write unit and integration tests',
      'Optimize app performance and battery usage'
    ],
    benefits: [
      'Latest Android devices for testing',
      'Google I/O and Android conference attendance',
      'Flexible work arrangements',
      'Comprehensive health benefits',
      'Stock purchase plan'
    ],
    skills: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'MVVM', 'Room', 'Retrofit', 'Git'],
    salary: { min: 115000, max: 155000, currency: 'USD' },
    featured: true
  },
  {
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Boston, MA',
    type: 'Full-time',
    level: 'Senior',
    description: 'Extract insights from complex datasets and build predictive models to drive business decisions. Work with large-scale data to uncover patterns and opportunities.',
    requirements: [
      'Master\'s or PhD in Statistics, Mathematics, or related field',
      '4+ years of experience in data science and analytics',
      'Strong proficiency in Python, R, and SQL',
      'Experience with machine learning libraries (scikit-learn, pandas)',
      'Knowledge of statistical analysis and hypothesis testing'
    ],
    responsibilities: [
      'Analyze large datasets to identify trends and insights',
      'Build predictive models and recommendation systems',
      'Create data visualizations and reports for stakeholders',
      'Collaborate with engineering teams on data infrastructure',
      'Present findings to executive leadership'
    ],
    benefits: [
      'Access to cutting-edge data tools and platforms',
      'Conference attendance and research publication support',
      'Flexible schedule and remote work options',
      'Comprehensive benefits package',
      'Innovation time for personal projects'
    ],
    skills: ['Python', 'R', 'SQL', 'Pandas', 'Scikit-learn', 'Tableau', 'Statistics'],
    salary: { min: 140000, max: 180000, currency: 'USD' },
    featured: true
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    level: 'Mid',
    description: 'Design intuitive and beautiful user experiences that solve real problems. Work closely with product and engineering teams to bring ideas to life.',
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '3+ years of UX design experience',
      'Proficiency in Figma, Sketch, and prototyping tools',
      'Strong portfolio demonstrating design process',
      'Experience with user research and usability testing'
    ],
    responsibilities: [
      'Create user-centered designs for web and mobile applications',
      'Conduct user research and usability testing',
      'Develop wireframes, prototypes, and design systems',
      'Collaborate with product managers and developers',
      'Present design concepts to stakeholders'
    ],
    benefits: [
      'Creative workspace with latest design tools',
      'Design conference and workshop attendance',
      'Flexible creative time and project ownership',
      'Health and wellness benefits',
      'Team design retreats and inspiration trips'
    ],
    skills: ['Figma', 'Sketch', 'Prototyping', 'User Research', 'Usability Testing', 'Design Systems'],
    salary: { min: 95000, max: 130000, currency: 'USD' },
    featured: false
  },
  {
    title: 'Product Manager',
    department: 'Product Management',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Senior',
    description: 'Drive product strategy and execution for our core platform. Work with cross-functional teams to deliver products that customers love.',
    requirements: [
      'Bachelor\'s degree in Business, Engineering, or related field',
      '5+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with agile development methodologies',
      'Excellent communication and leadership abilities'
    ],
    responsibilities: [
      'Define product roadmap and strategy',
      'Gather and prioritize product requirements',
      'Work with engineering and design teams on execution',
      'Analyze product metrics and user feedback',
      'Present to executives and stakeholders'
    ],
    benefits: [
      'Equity participation in company growth',
      'Product management training and certification',
      'Flexible work environment',
      'Comprehensive health benefits',
      'Annual product conference attendance'
    ],
    skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research', 'Roadmapping', 'Stakeholder Management'],
    salary: { min: 160000, max: 200000, currency: 'USD' },
    featured: false
  },
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    level: 'Entry',
    description: 'Build responsive and interactive user interfaces using modern web technologies. Perfect opportunity for a junior developer to grow their skills.',
    requirements: [
      'Bachelor\'s degree in Computer Science or bootcamp graduate',
      '1-2 years of frontend development experience',
      'Proficiency in HTML, CSS, and JavaScript',
      'Experience with React or Vue.js',
      'Understanding of responsive design principles'
    ],
    responsibilities: [
      'Develop user interfaces using React and modern CSS',
      'Implement responsive designs across devices',
      'Collaborate with designers on UI/UX implementation',
      'Write clean, maintainable code',
      'Participate in code reviews and team meetings'
    ],
    benefits: [
      'Mentorship from senior developers',
      'Learning and development budget',
      'Remote work flexibility',
      'Health insurance and benefits',
      'Career growth opportunities'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Git'],
    salary: { min: 75000, max: 95000, currency: 'USD' },
    featured: false
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Chicago, IL',
    type: 'Full-time',
    level: 'Mid',
    description: 'Build scalable backend services and APIs that power our applications. Work with microservices architecture and cloud technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of backend development experience',
      'Strong proficiency in Python, Java, or Go',
      'Experience with databases and caching systems',
      'Knowledge of microservices architecture'
    ],
    responsibilities: [
      'Design and implement RESTful APIs and microservices',
      'Optimize database queries and system performance',
      'Implement security best practices',
      'Write comprehensive tests and documentation',
      'Monitor and troubleshoot production systems'
    ],
    benefits: [
      'Competitive salary and stock options',
      'Professional development opportunities',
      'Flexible work schedule',
      'Health and dental insurance',
      'Team outings and events'
    ],
    skills: ['Python', 'Java', 'Go', 'PostgreSQL', 'Redis', 'Microservices', 'AWS'],
    salary: { min: 105000, max: 140000, currency: 'USD' },
    featured: false
  }
]

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing jobs
    await Job.deleteMany({})
    console.log('Cleared existing jobs')

    // Insert sample jobs
    await Job.insertMany(sampleJobs)
    console.log(`Inserted ${sampleJobs.length} sample jobs`)

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

seedDatabase()