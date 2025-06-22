// utils/syncUser.ts
import axios from 'axios';
import { SyncUserRequest, SyncUserResponse } from './types/user';

export const syncUserWithBackend = async (
  payload: SyncUserRequest
): Promise<SyncUserResponse> => {
  const response = await axios.post<SyncUserResponse>(
    '/api/auth/sync',
    payload
  );
  return response.data;
};
