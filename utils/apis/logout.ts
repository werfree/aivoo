import axios from 'axios';

export interface LogoutResponse {
  success: boolean;
  message: string;
  redirectUrl: string;
}

export const logoutUser = async (): Promise<LogoutResponse> => {
  try {
    const response = await axios.post<LogoutResponse>('/api/auth/logout');
    return response.data;
  } catch (error) {
    console.error('Error calling logout API:', error);
    throw new Error('Failed to logout');
  }
}; 