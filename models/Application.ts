import mongoose from 'mongoose'

export interface IApplication {
  _id?: string
  jobId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  status: 'pending' | 'reviewing' | 'interview' | 'accepted' | 'rejected'
  coverLetter?: string
  resume?: string
  additionalInfo?: string
  appliedDate: Date
  lastUpdated: Date
  notes?: string // Admin notes
  createdAt: Date
  updatedAt: Date
}

const ApplicationSchema = new mongoose.Schema<IApplication>({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: [true, 'Job ID is required']
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'interview', 'accepted', 'rejected'],
    default: 'pending'
  },
  coverLetter: {
    type: String,
    maxlength: [2000, 'Cover letter cannot exceed 2000 characters']
  },
  resume: {
    type: String, // URL to resume file
    trim: true
  },
  additionalInfo: {
    type: String,
    maxlength: [1000, 'Additional information cannot exceed 1000 characters']
  },
  appliedDate: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String, // Admin notes
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  }
}, {
  timestamps: true
})

// Ensure one application per user per job
ApplicationSchema.index({ jobId: 1, userId: 1 }, { unique: true })

// Create indexes for better query performance
ApplicationSchema.index({ userId: 1, status: 1 })
ApplicationSchema.index({ jobId: 1, status: 1 })
ApplicationSchema.index({ appliedDate: -1 })
ApplicationSchema.index({ status: 1, lastUpdated: -1 })

export default mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema)