import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../useLocalStorage';
import { UserAddress } from '@/types';
import UserAddressContext from '../context/UserAddressContext';

const keyName = 'coffee-shop-auth-user-address';

type UserAddressProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const UserAddressProvider = ({ children }: UserAddressProviderProps) => {
  const [address, setAddress] = useLocalStorage<UserAddress>(keyName, null);
  // Router
  const navigate = useNavigate();

  const updateAddress = useCallback(
    async (newAddr: UserAddress) => {
      setAddress(newAddr);
    },
    [navigate, setAddress]
  );

  const removeAddress = useCallback(() => {
    setAddress(null);
  }, [navigate, setAddress]);

  const value = useMemo(
    () => ({
      address,
      updateAddress,
      removeAddress,
    }),
    [address]
  );

  return (
    <UserAddressContext.Provider value={value}>
      {children}
    </UserAddressContext.Provider>
  );
};

export default UserAddressProvider;
