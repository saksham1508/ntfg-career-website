import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Job from '@/models/Job'
import mongoose from 'mongoose'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()

    const { id } = params

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid job ID' },
        { status: 400 }
      )
    }

    const job = await Job.findById(id).lean()

    if (!job) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: job
    })
  } catch (error) {
    console.error('Error fetching job:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch job' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()

    const { id } = params
    const body = await request.json()

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid job ID' },
        { status: 400 }
      )
    }

    const job = await Job.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).lean()

    if (!job) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: job
    })
  } catch (error: any) {
    console.error('Error updating job:', error)
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json(
        { success: false, error: errors.join(', ') },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to update job' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()

    const { id } = params

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid job ID' },
        { status: 400 }
      )
    }

    const job = await Job.findByIdAndDelete(id)

    if (!job) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Job deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting job:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete job' },
      { status: 500 }
    )
  }
}