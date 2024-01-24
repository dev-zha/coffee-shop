import BlankModal from '../BlankModal';
import StickyModalHeader from '../StickyModalHeader';
import FlexContainer from '../FlexContainer';
import FullHeightContainer from '../FullHeightContainer';
import Buttons from './Buttons';
import StatusImage from './StatusImage';
import { DeliveryOrder } from '@/types';

interface OrderStatusModalProps {
  order: DeliveryOrder | null;
  onClose: () => void;
}

export default function OrderStatusModal({
  order,
  onClose,
}: OrderStatusModalProps) {
  return (
    <BlankModal show={!!order} onClose={() => {}} fullScreen>
      {order && (
        <FlexContainer>
          <StickyModalHeader title="Order Status" onClose={onClose} />
          <FullHeightContainer>
            <div className="h-full flex flex-col items-center text-center justify-center">
              <StatusImage />
              <h1 className="text-2xl font-semibold mb-4 mt-4">
                Order Successful!
              </h1>
              <p>Your order has been successfully placed.</p>
              <div className="mt-4">
                <strong>Order ID:</strong> {order.id}
              </div>
              <div className="mt-2">
                <strong>Order Time:</strong> {order.date}
              </div>
              <p className="mt-8">
                Thank you for shopping with us! If you have any questions,
                please contact our customer support.
              </p>
              <Buttons onBtnClick={onClose} />
            </div>
          </FullHeightContainer>
        </FlexContainer>
      )}
    </BlankModal>
  );
}
