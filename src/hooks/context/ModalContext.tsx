import { createContext } from 'react';
import { CoffeeProduct, DeliveryOrder } from '@/types';

interface ModalContextProps {
  // Product Detail
  showProductModal: (product: CoffeeProduct) => void;
  // Address
  showAddressModal: () => void;
  closeAddressModal: () => void;
  // Shopping Cart
  showCartModal: () => void;
  closeCartModal: () => void;
  // Checkout
  showCheckoutModal: () => void;
  closeCheckoutModal: () => void;
  // Order Status
  showOrderStatusModal: (order: DeliveryOrder | null) => void;
  closeOrderStatusModal: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export default ModalContext;
