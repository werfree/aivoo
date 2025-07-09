// types/user.ts

import { z } from 'zod';
import { USER_ROLES } from "@/constant/constant";

export interface SyncUserRequest {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: USER_ROLES;
}

export interface SyncUserResponse {
  id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  Candidate?: object;
  HR?: object;
  role: USER_ROLES;
}

// Zod schemas for runtime validation
export const SyncUserRequestSchema = z.object({
  clerkId: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.enum([USER_ROLES.CANDIDATE, USER_ROLES.RECRUITER]),
});

export const SyncUserResponseSchema = z.object({
  id: z.string(),
  clerkId: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  Candidate: z.object({}).optional(),
  HR: z.object({}).optional(),
  role: z.enum([USER_ROLES.CANDIDATE, USER_ROLES.RECRUITER]),
});

// Type inference from Zod schemas
export type SyncUserRequestValidated = z.infer<typeof SyncUserRequestSchema>;
export type SyncUserResponseValidated = z.infer<typeof SyncUserResponseSchema>;
