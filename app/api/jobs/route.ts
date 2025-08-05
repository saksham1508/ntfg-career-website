import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Job from '@/models/Job'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const department = searchParams.get('department')
    const location = searchParams.get('location')
    const type = searchParams.get('type')
    const level = searchParams.get('level')
    const search = searchParams.get('search')
    const featured = searchParams.get('featured')

    // Build query
    const query: any = { isActive: true }

    if (department) {
      query.department = department
    }

    if (location) {
      query.location = { $regex: location, $options: 'i' }
    }

    if (type) {
      query.type = type
    }

    if (level) {
      query.level = level
    }

    if (featured === 'true') {
      query.featured = true
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { skills: { $in: [new RegExp(search, 'i')] } }
      ]
    }

    // Calculate pagination
    const skip = (page - 1) * limit

    // Get jobs with pagination
    const jobs = await Job.find(query)
      .sort({ featured: -1, postedDate: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    // Get total count for pagination
    const total = await Job.countDocuments(query)

    return NextResponse.json({
      success: true,
      data: {
        jobs,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'department', 'location', 'type', 'level', 'description', 'requirements', 'responsibilities', 'skills']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    const job = await Job.create(body)

    return NextResponse.json({
      success: true,
      data: job
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating job:', error)
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json(
        { success: false, error: errors.join(', ') },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to create job' },
      { status: 500 }
    )
  }
}