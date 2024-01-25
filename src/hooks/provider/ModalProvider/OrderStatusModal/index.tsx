import BaseModal from '@/components/shared/modal/BaseModal';
import { DeliveryOrder } from '@/types';
import StickyModalHeader from '../StickyModalHeader';
import FlexContainer from '../FlexContainer';
import FullHeightContainer from '../FullHeightContainer';
import Buttons from './Buttons';
import StatusImage from './StatusImage';

interface OrderStatusModalProps {
  order: DeliveryOrder | null;
  onClose: () => void;
}

export default function OrderStatusModal({
  order,
  onClose,
}: OrderStatusModalProps) {
  return (
    <BaseModal show={!!order} onClose={() => {}} fullScreen>
      {order && (
        <FlexContainer>
          <StickyModalHeader title="Order Status" onClose={onClose} />
          <FullHeightContainer>
            <div className="h-full flex flex-col items-center text-center justify-center">
              <StatusImage />
              <h1 className="text-2xl font-semibold mt-3">Order Successful!</h1>
              <p>Your order has been successfully placed.</p>
              <div className="text-primary-400 mt-3">
                <div>
                  <strong>Order ID:</strong> {order.id}
                </div>
                <div>
                  <strong>Order Time:</strong> {order.date}
                </div>
              </div>
              <p className="mt-4">
                Thank you for shopping with us! If you have any questions,
                please contact our customer support.
              </p>
              <Buttons onBtnClick={onClose} />
            </div>
          </FullHeightContainer>
        </FlexContainer>
      )}
    </BaseModal>
  );
}
