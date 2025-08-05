import mongoose from 'mongoose'

export interface IJob {
  _id?: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  level: 'Entry' | 'Mid' | 'Senior' | 'Lead'
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  salary?: {
    min: number
    max: number
    currency: string
  }
  skills: string[]
  isActive: boolean
  featured: boolean
  postedDate: Date
  applicationDeadline?: Date
  createdAt: Date
  updatedAt: Date
}

const JobSchema = new mongoose.Schema<IJob>({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [100, 'Job title cannot exceed 100 characters']
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    enum: [
      'Engineering',
      'AI & Machine Learning',
      'DevOps & Infrastructure',
      'Mobile Development',
      'Product Management',
      'Design',
      'Data Science',
      'Quality Assurance',
      'Marketing',
      'Sales',
      'Human Resources',
      'Finance'
    ]
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Job type is required'],
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship']
  },
  level: {
    type: String,
    required: [true, 'Job level is required'],
    enum: ['Entry', 'Mid', 'Senior', 'Lead']
  },
  description: {
    type: String,
    required: [true, 'Job description is required'],
    minlength: [50, 'Job description must be at least 50 characters']
  },
  requirements: [{
    type: String,
    required: true
  }],
  responsibilities: [{
    type: String,
    required: true
  }],
  benefits: [{
    type: String
  }],
  salary: {
    min: {
      type: Number,
      min: 0
    },
    max: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  skills: [{
    type: String,
    required: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  applicationDeadline: {
    type: Date
  }
}, {
  timestamps: true
})

// Create indexes for better query performance
JobSchema.index({ department: 1, isActive: 1 })
JobSchema.index({ location: 1, isActive: 1 })
JobSchema.index({ type: 1, isActive: 1 })
JobSchema.index({ level: 1, isActive: 1 })
JobSchema.index({ featured: 1, isActive: 1 })
JobSchema.index({ postedDate: -1 })

export default mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema)