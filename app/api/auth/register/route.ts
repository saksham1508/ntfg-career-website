import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import jwt from 'jsonwebtoken'

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const { name, email, password } = await request.json()

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists with this email' },
        { status: 400 }
      )
    }

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password
    })

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )

    // Remove password from response
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile: user.profile,
      createdAt: user.createdAt
    }

    return NextResponse.json({
      success: true,
      data: {
        user: userResponse,
        token
      }
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error registering user:', error)
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json(
        { success: false, error: errors.join(', ') },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to register user' },
      { status: 500 }
    )
  }
}