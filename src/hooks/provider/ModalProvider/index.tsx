import React, { ReactNode, useMemo, useState } from 'react';
import ModalContext from '@/hooks/context/ModalContext';
import CartModal from './CartModal';
import { CoffeeProduct, DeliveryOrder } from '@/types';
import ProductDetailModal from './ProductDetailModal';
import AddressModal from './AddressModal';
import CheckoutModal from './CheckoutModal';
import OrderStatusModal from './OrderStatusModal';

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<CoffeeProduct | null>(null);
  const [showAddress, setShowAddress] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderStatus, setOrderStatus] = useState<DeliveryOrder|null>(null);

  const showProductModal = (product: CoffeeProduct) => {
    setProduct(product);
  };

  const closeProductModal = () => {
    setProduct(null);
  };

  const showCartModal = () => {
    setShowCart(true);
  };

  const closeCartModal = () => {
    setShowCart(false);
  };

  const showAddressModal = () => {
    setShowAddress(true);
  };

  const closeAddressModal = () => {
    setShowAddress(false);
  };

  const showCheckoutModal = () => {
    setShowCheckout(true);
  };

  const closeCheckoutModal = () => {
    setShowCheckout(false);
  };

  const showOrderStatusModal = (order:DeliveryOrder|null) => {
    setOrderStatus(order);
  };

  const closeOrderStatusModal = () => {
    setOrderStatus(null);
  };

  const value = useMemo(
    () => ({
      showProductModal,
      showCartModal,
      closeCartModal,
      showAddressModal,
      closeAddressModal,
      showCheckoutModal,
      closeCheckoutModal,
      showOrderStatusModal,
      closeOrderStatusModal,
    }),
    []
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ProductDetailModal product={product} onClose={closeProductModal} />
      <CartModal show={showCart} onClose={closeCartModal} />
      <CheckoutModal show={showCheckout} onClose={closeCheckoutModal} />
      <AddressModal show={showAddress} onClose={closeAddressModal} />
      <OrderStatusModal
        order={orderStatus}
        onClose={closeOrderStatusModal}
      />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
