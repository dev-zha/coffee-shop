import { useContext } from 'react';
import UserAddressContext from './context/UserAddressContext';

export const useUserAddress = () => {
  const context = useContext(UserAddressContext);
  if (!context) {
    throw new Error('useUserAddress must be used within a UserAddressContext');
  }
  return context;
};
