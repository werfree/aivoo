import jwt from 'jsonwebtoken';
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-fallback-secret-key-change-in-production';

export interface UserTokenData {
  userId: string;
  clerkId: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const createUserToken = (userData: UserTokenData): string => {
  return jwt.sign(userData, JWT_SECRET, {
    expiresIn: '7d', // 7 days
    issuer: 'aivoo-app',
    audience: 'aivoo-users'
  });
};

export const verifyUserToken = async (token: string): Promise<UserTokenData | null> => {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET), {
      issuer: 'aivoo-app',
      audience: 'aivoo-users',
    });
    return payload as unknown as UserTokenData;
  } catch (err) {
    console.error('JWT verification failed:', err);
    return null;
  }
};

export const decodeUserToken = (token: string): UserTokenData | null => {
  try {
    // Decode without verification (for debugging only)
    const decoded = jwt.decode(token) as UserTokenData;
    return decoded;
  } catch (error) {
    console.error('JWT decode failed:', error);
    return null;
  }
}; 