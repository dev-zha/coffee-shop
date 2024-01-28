import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserIcon,
  ListBulletIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { APP_NAME } from '@/constants/constants';
import { useModal } from '@/hooks/useModal';
import MenuDrawer from './MenuDrawer';
import NavButton from './NavButton';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
  // Auth
  const { user } = useAuth();
  // Shopping Cart
  const { itemCount } = useShoppingCart();
  // Shopping Cart Modal
  const { showCartModal } = useModal();
  // Local State
  const [showDrawer, setShowDrawer] = useState(false);

  const handleCartClick = () => {
    showCartModal();
  };

  const handelDrawerOpen = () => {
    setShowDrawer(true);
  };
  const handelDrawerClose = () => {
    setShowDrawer(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-50 border-b z-10">
        <div className="max-w-screen-lg flex items-center justify-between mx-auto px-4 smd:px-0 py-3">
          <div className="block sm:hidden">
            <NavButton onClick={handelDrawerOpen} Icon={UserIcon} />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-1 focus:outline-none text-primary hover:opacity-70"
            >
              <img src="/images/app-logo.svg" className="h-7" alt="App Logo" />
              <span className="self-center text-lg font-semibold whitespace-nowrap">
                {APP_NAME}
              </span>
            </Link>
            <Link
              to="/orders"
              className="hidden sm:block text-gray-500 hover:text-primary font-semibold hover:underline"
            >
              Orders
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-4 w-auto">
            <Link
              to={user?.name ? '/profile' : '/login'}
              className="hidden sm:block text-gray-500 hover:text-primary font-semibold hover:underline"
            >
              {user?.name || 'Login'}
            </Link>

            <button
              onClick={handleCartClick}
              className="relative hover:bg-primary-50 text-black hover:text-primary-600 rounded-full p-2 ease-in"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="sr-only">Shopping Cart</span>
              {!!itemCount && (
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-primary-500 rounded-full top-0 end-0">
                  {itemCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
      <MenuDrawer show={showDrawer} onClose={handelDrawerClose} />
    </>
  );
}
