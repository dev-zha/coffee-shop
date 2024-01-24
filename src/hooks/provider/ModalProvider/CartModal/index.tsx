import DeliOptionSwitch from './DeliOptionSwitch';
import Footer from './Footer';
import PaymentSummary from './PaymentSummary';
import OrderItemList from './OrderItemList';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import EmptyCart from './EmptyCart';
import BlankModal from '../BlankModal';
import StickyModalHeader from '../StickyModalHeader';
import FullHeightContainer from '../FullHeightContainer';
import FlexContainer from '../FlexContainer';
interface CartModalProps {
  show: boolean;
  onClose: () => void;
}

export default function CartModal({ show, onClose }: CartModalProps) {
  // Shopping Cart
  const { itemCount } = useShoppingCart();

  return (
    <BlankModal show={show} onClose={() => {}} fullScreen>
      <FlexContainer>
        <StickyModalHeader title="Shopping Cart" onClose={onClose} />
        {itemCount > 0 ? (
          <>
            <FullHeightContainer>
              <DeliOptionSwitch />
              <OrderItemList />
              <hr className="my-2" />
              <PaymentSummary />
            </FullHeightContainer>
            <Footer />
          </>
        ) : (
          <EmptyCart />
        )}
      </FlexContainer>
    </BlankModal>
  );
}
