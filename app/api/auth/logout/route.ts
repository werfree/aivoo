import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Clear user metadata (optional)
    const clerk = await clerkClient();
    await clerk.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: null, // Clear the role
      }
    }).catch(e => {
      console.error('Error clearing user metadata:', e);
      // Don't fail the logout if metadata clearing fails
    });

    // Return success with redirect URL
    return NextResponse.json({ 
      success: true, 
      message: 'User logged out successfully',
      redirectUrl: '/signout' // Frontend will handle the actual signout
    });

  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' }, 
      { status: 500 }
    );
  }
} 