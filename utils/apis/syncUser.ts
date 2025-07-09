// utils/syncUser.ts
import axios from 'axios';
import { 
  SyncUserRequest, 
  SyncUserResponse, 
  SyncUserRequestSchema,
  SyncUserResponseSchema 
} from './types/user';

export const syncUserWithBackend = async (
  payload: SyncUserRequest
): Promise<SyncUserResponse> => {
  // Validate request payload
  const validatedPayload = SyncUserRequestSchema.parse(payload);
  
  const response = await axios.post<SyncUserResponse>(
    '/api/auth/sync',
    validatedPayload
  );
  
  // Validate response data
  const validatedResponse = SyncUserResponseSchema.parse(response.data);
  
  return validatedResponse;
};
