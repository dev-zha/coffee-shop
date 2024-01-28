import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmDialog from '@/components/shared/dialog/ConfirmDialog';
import BaseModal from '@/components/shared/modal/BaseModal';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { Customer, DeliOption, OrderItem } from '@/types';
import PageLoading from '@/components/shared/PageLoading';
import SelfPickup from './SelfPickup';
import Footer from './Footer';
import DeliveryAddress from './DeliveryAddress';
import PaymentMethodSwitch from './PaymentMethodSwitch';
import OrderSummary from './OrderSummary';
import StickyModalHeader from '../StickyModalHeader';
import FlexContainer from '../FlexContainer';
import FullHeightContainer from '../FullHeightContainer';
import { fakeTimer } from '@/utils/helper';
import { useModal } from '@/hooks/useModal';
import { TAddOrder, addOrder } from '@/service/order';
import { useAuth } from '@/hooks/useAuth';
import { useUserAddress } from '@/hooks/useUserAddress';

interface CheckoutModalProps {
  show: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ show, onClose }: CheckoutModalProps) {
  // Navigator
  const navigate = useNavigate();
  // Auth Prodiver
  const { user } = useAuth();
  // Address Prodiver
  const { address } = useUserAddress();
  // Shopping Cart Provider
  const {
    items: cartItems,
    deliOption,
    totalPayment,
    paymentMethod,
    clearCart,
  } = useShoppingCart();
  // Modal Provider
  const { closeCartModal, showOrderStatusModal, showAddressModal } = useModal();
  // Local State
  const [loading, setLoading] = useState(false);
  const [showLoginCD, setShowLoginCD] = useState(false);
  const [showAddrCD, setShowAddrCD] = useState(false);

  const getOrderData = (): TAddOrder => {
    const customer: Customer = {
      id: user!.id,
      name: user!.name,
      address: address!.fullAddress,
      coordinates: address!.coordinates,
    };
    const orderItems: OrderItem[] = cartItems?.map((ci) => {
      return {
        productId: ci.product.id,
        productName: ci.product.displayName,
        quantity: ci.quantity,
        price: ci.product.price * ci.quantity,
      };
    });
    return {
      customer,
      items: orderItems,
      deliOption,
      paymentMethod,
      totalPayment: totalPayment,
    };
  };

  const showGoLoginDialog = () => {
    setShowLoginCD(true);
  };

  const handleGoToLogin = () => {
    setShowLoginCD(false);
    onClose();
    closeCartModal();
    navigate('/login');
  };

  const makeOrder = async () => {
    setLoading(true);
    await fakeTimer(2000);
    const newOrder = getOrderData();

    const res = addOrder(newOrder);
    setLoading(false);
    // Clear Cart Data
    clearCart();
    // Close Cart and Checkout Modal
    onClose();
    closeCartModal();
    // Open Order Status
    showOrderStatusModal(res);
  };

  const handleOrderClick = () => {
    if (!user) {
      showGoLoginDialog();
      return;
    }
    if (deliOption === DeliOption.DELIVER && !address) {
      setShowAddrCD(true);
      return;
    }
    makeOrder();
  };

  const handleAddAddress = () => {
    setShowAddrCD(false);
    showAddressModal();
  };

  return (
    <>
      <BaseModal show={show} onClose={() => {}} fullScreen>
        <FlexContainer>
          <StickyModalHeader title="Checkout Order" onClose={onClose} />
          <FullHeightContainer>
            {deliOption === DeliOption.DELIVER ? (
              <DeliveryAddress />
            ) : (
              <SelfPickup />
            )}
            <hr className="my-4" />
            <PaymentMethodSwitch />
            <hr className="my-4" />
            <OrderSummary />
          </FullHeightContainer>
          <Footer onOrderClick={handleOrderClick} />
        </FlexContainer>
        <PageLoading show={loading} />
      </BaseModal>
      <ConfirmDialog
        show={showLoginCD}
        title="Account Required"
        leftBtnClick={() => setShowLoginCD(false)}
        rightBtnClick={handleGoToLogin}
      >
        To proceed with this action, please log in to your account.
      </ConfirmDialog>
      <ConfirmDialog
        show={showAddrCD}
        title="Address Required"
        leftBtnClick={() => setShowAddrCD(false)}
        rightBtnClick={handleAddAddress}
      >
        To proceed with this action, please add your address to deliver orders.
      </ConfirmDialog>
    </>
  );
}
