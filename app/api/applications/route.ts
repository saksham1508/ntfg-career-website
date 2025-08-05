import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Application from '@/models/Application'
import Job from '@/models/Job'
import User from '@/models/User'
import jwt from 'jsonwebtoken'

// Helper function to verify JWT token
function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as any
  } catch (error) {
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const decoded = verifyToken(request)
    if (!decoded) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const jobId = searchParams.get('jobId')

    // Build query
    const query: any = {}

    // If not admin, only show user's own applications
    if (decoded.role !== 'admin') {
      query.userId = decoded.userId
    }

    if (status) {
      query.status = status
    }

    if (jobId) {
      query.jobId = jobId
    }

    // Calculate pagination
    const skip = (page - 1) * limit

    // Get applications with populated job and user data
    const applications = await Application.find(query)
      .populate('jobId', 'title department location type level')
      .populate('userId', 'name email')
      .sort({ appliedDate: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    // Get total count for pagination
    const total = await Application.countDocuments(query)

    return NextResponse.json({
      success: true,
      data: {
        applications,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    })
  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const decoded = verifyToken(request)
    if (!decoded) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { jobId, coverLetter, resume, additionalInfo } = await request.json()

    // Validate required fields
    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // Check if job exists and is active
    const job = await Job.findById(jobId)
    if (!job || !job.isActive) {
      return NextResponse.json(
        { success: false, error: 'Job not found or inactive' },
        { status: 404 }
      )
    }

    // Check if user already applied for this job
    const existingApplication = await Application.findOne({
      jobId,
      userId: decoded.userId
    })

    if (existingApplication) {
      return NextResponse.json(
        { success: false, error: 'You have already applied for this job' },
        { status: 400 }
      )
    }

    // Create application
    const application = await Application.create({
      jobId,
      userId: decoded.userId,
      coverLetter,
      resume,
      additionalInfo
    })

    // Populate the created application
    const populatedApplication = await Application.findById(application._id)
      .populate('jobId', 'title department location type level')
      .populate('userId', 'name email')
      .lean()

    return NextResponse.json({
      success: true,
      data: populatedApplication
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating application:', error)
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json(
        { success: false, error: errors.join(', ') },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to create application' },
      { status: 500 }
    )
  }
}