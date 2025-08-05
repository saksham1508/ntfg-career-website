import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser {
  _id?: string
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
  profile?: {
    phone?: string
    location?: string
    resume?: string
    skills?: string[]
    experience?: string
    education?: string
    linkedIn?: string
    github?: string
    portfolio?: string
  }
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  profile: {
    phone: {
      type: String,
      trim: true
    },
    location: {
      type: String,
      trim: true
    },
    resume: {
      type: String, // URL to resume file
      trim: true
    },
    skills: [{
      type: String,
      trim: true
    }],
    experience: {
      type: String,
      trim: true
    },
    education: {
      type: String,
      trim: true
    },
    linkedIn: {
      type: String,
      trim: true
    },
    github: {
      type: String,
      trim: true
    },
    portfolio: {
      type: String,
      trim: true
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next()
  }
  
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Compare password method
UserSchema.methods.comparePassword = async function(enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Create indexes
UserSchema.index({ email: 1 })
UserSchema.index({ role: 1 })

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)