import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  ListBulletIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import BlankDrawer from './BlankDrawer';
import MenuItem from './MenuItem';
import { useAuth } from '@/hooks/useAuth';
import { APP_NAME } from '@/constants/constants';
import { googleLogout } from '@react-oauth/google';
import { useUserAddress } from '@/hooks/useUserAddress';
import { removeAllOrders } from '@/service/order';
import ConfirmDialog from '@/components/shared/dialog/ConfirmDialog';
import { useState } from 'react';

interface MenuDrawerProps {
  show: boolean;
  onClose: () => void;
}

export default function MenuDrawer({ show, onClose }: MenuDrawerProps) {
  // Auth Provider
  const { user, logout: logoutFromApp } = useAuth();
  // Address Provider
  const { removeAddress } = useUserAddress();
  // Confirm Dialog
  const [showLogoutCD, setShowLogoutCD] = useState(false);

  const handelBtnClick = () => {
    onClose();
  };

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
    // Click Handler from Parent Component
    handelBtnClick();
  };

  return (
    <>
      <BlankDrawer show={show} onClose={onClose}>
        <div className="p-4 pt-8">
          <div className="flex flex-col items-center">
            <img
              src={user?.image || '/images/app-logo.svg'}
              alt={user?.name || 'App Logo'}
              className="w-20 h-20 bg-gray-300 rounded-full object-cover"
            />
            <span className="text-primary text-lg font-semibold line-clamp-2 mt-2">
              {user?.name || APP_NAME}
            </span>
          </div>
          <hr className="my-4" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2.5 end-2.5 w-8 h-8 inline-flex items-center justify-center bg-transparent hover:bg-gray-200 text-gray-400 hover:text-gray-900 rounded-lg"
          >
            <XMarkIcon className="w-5 h-5 stroke-2" />
          </button>
          <div>
            <ul className="space-y-2 font-medium">
              {user ? (
                <>
                  <MenuItem
                    title="Order History"
                    Icon={ListBulletIcon}
                    link="/orders"
                    onClick={handelBtnClick}
                  />
                  <MenuItem
                    title="Profile"
                    Icon={UserIcon}
                    link="/profile"
                    onClick={handelBtnClick}
                  />
                  <MenuItem
                    title="Logout"
                    Icon={ArrowRightStartOnRectangleIcon}
                    onClick={showLogoutConfirmDialog}
                  />
                </>
              ) : (
                <>
                  <MenuItem
                    title="Login"
                    Icon={ArrowRightEndOnRectangleIcon}
                    link="/login"
                    onClick={handelBtnClick}
                  />
                </>
              )}
            </ul>
          </div>
        </div>
      </BlankDrawer>
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
