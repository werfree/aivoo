import { NextResponse } from 'next/server';

// This is an example of how your backend might trigger a logout
export async function POST() {
  try {
    // Your backend logic here...
    // For example: invalidate sessions, clear tokens, etc.
    
    // Then redirect the user to the signout page
    return NextResponse.json({
      success: true,
      message: 'Backend logout successful',
      redirectUrl: '/signout'
    });
    
  } catch (error) {
    console.error('Backend logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout from backend' }, 
      { status: 500 }
    );
  }
} 