import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { APP_NAME } from '@/constants/constants';
import { useModal } from '@/hooks/useModal';
import MenuDrawer from './MenuDrawer';

export default function Navbar() {
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
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
          <button
            onClick={handelDrawerOpen}
            className="rounded-full text-black hover:text-primary-600 p-2 ease-in"
          >
            <UserIcon className="w-6 h-6" />
          </button>
          <Link
            to="/"
            className="flex items-center space-x-1 focus:outline-none"
          >
            <img src="/images/app-logo.svg" className="h-7" alt="App Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap">
              {APP_NAME}
            </span>
          </Link>
          <div className="flex flex-row items-center space-x-4 w-auto">
            <button
              onClick={handleCartClick}
              className="relative text-black hover:text-primary-600 rounded-full p-2 ease-in"
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
