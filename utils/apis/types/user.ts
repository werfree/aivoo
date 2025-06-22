// types/user.ts

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
}
