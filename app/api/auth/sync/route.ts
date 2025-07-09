// app/api/auth/sync/route.ts
import { USER_ROLES } from '@/constant/constant';
import prisma from '@/lib/prisma';
import { createUserToken } from '@/utils/jwt';
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
  const { clerkId, email, firstName, lastName, role }:{
    clerkId: string;
    email: string;
    firstName: string;
    lastName: string;
    role: USER_ROLES;
  } = body;

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

  // Destructure to exclude relations from initial spread
  const { HR, Candidate, ...userWithoutRelations } = user;
  const response = NextResponse.json({ 
    ...userWithoutRelations, 
    role: primaryRole,
    ...(HR && { HR }),
    ...(Candidate && { Candidate })
  });

  // Set HTTP-only cookies with user data
  const userToken = createUserToken({
    userId: user.id,
    clerkId: user.clerkId,
    role: role,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  });
  response.cookies.set("user-token", userToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });


  return response;
}
