import { NextRequest, NextResponse } from 'next/server';
import { hashPassword, generateToken } from '@/lib/auth';

// Mock database - replace with actual database calls
const users: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user exists
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user (mock)
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password: hashedPassword,
      role: 'BUYER',
      createdAt: new Date(),
    };

    users.push(user);

    // Generate token
    const token = generateToken(user.id, user.email);

    return NextResponse.json(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Registration failed' },
      { status: 500 }
    );
  }
}
