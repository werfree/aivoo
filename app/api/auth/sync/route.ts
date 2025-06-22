// app/api/auth/sync/route.ts
import { USER_ROLES } from '@/constant/constant';
import prisma from '@/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('Syncing user with backend...',process.env.DATABASE_URL);
  const session = await auth(); // Clerk auth context
  const sessionId = session.sessionId;

  if (!sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { clerkId, email, firstName, lastName, role } = body;

  if (!clerkId || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const user = await prisma.user.upsert({
    where: { clerkId },
    update:{},
    create:{
        clerkId,
        email,
        firstName,
        lastName,
        Candidate: role===USER_ROLES.CANDIDATE ? { create: {
        } } : undefined,
        HR: role===USER_ROLES.RECRUITER ? { create: { companyName: '' } } : undefined,
      },
    include: { Candidate: true, HR: true },
  });

  // Determine primary role
  const primaryRole = role;

  // Store temporary session data (removed on session end)
  const clerk = await 
  clerkClient();
  clerk.users.updateUserMetadata(session.userId, {
        privateMetadata:{
            userId: user.id,
            role: primaryRole,
        }
    }
  ).catch(e=>{
    console.error('Error updating user metadata:', e?.errors[0])
  });

  return NextResponse.json({ ...user, role: primaryRole });
}
