import { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '@/hooks/useAuth';
import { useUserAddress } from '@/hooks/useUserAddress';
import { removeAllOrders } from '@/service/order';
import ConfirmDialog from '@/components/shared/dialog/ConfirmDialog';

export default function LogoutBtn() {
  // Auth Provider
  const { logout: logoutFromApp } = useAuth();
  // Address Provider
  const { removeAddress } = useUserAddress();
  // Confirm Dialog
  const [showLogoutCD, setShowLogoutCD] = useState(false);

  const showLogoutConfirmDialog = () => {
    setShowLogoutCD(true);
  };

  const handleLogoutConfirm = () => {
    // Close Dialog
    setShowLogoutCD(false);
    // Call Google Logout Fuction
    googleLogout();
    // Clear LocalStorage Data
    logoutFromApp();
    removeAddress();
    removeAllOrders();
  };

  return (
    <>
      <button
        onClick={showLogoutConfirmDialog}
        className="absolute top-4 right-4 w-10 h-10 bg-white text-gray-500 hover:text-gray-700 rounded-full p-2"
      >
        <ArrowRightStartOnRectangleIcon />
      </button>
      <ConfirmDialog
        show={showLogoutCD}
        title="Confirm Logout"
        leftBtnClick={() => setShowLogoutCD(false)}
        rightBtnClick={handleLogoutConfirm}
      >
        Are you sure you want to Logout?
      </ConfirmDialog>
    </>
  );
}
