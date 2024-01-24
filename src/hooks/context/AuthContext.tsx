import { createContext } from 'react';
import { AuthUser } from '@/types';

export type AuthContextType = {
  user: AuthUser | null;
  login: (data: AuthUser, redirectUrl: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
