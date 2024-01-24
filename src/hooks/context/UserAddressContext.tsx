import { createContext } from 'react';
import { UserAddress } from '@/types';

export type UserAddressContextType = {
  address: UserAddress | null;
  updateAddress: (newAddress: UserAddress) => void;
  removeAddress: () => void;
};

const UserAddressContext = createContext<UserAddressContextType | null>(null);

export default UserAddressContext;
