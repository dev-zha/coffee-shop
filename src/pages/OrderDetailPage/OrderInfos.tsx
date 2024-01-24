import LabelValueRow from '@/components/shared/LabelValueRow';
import { DeliOption, DeliveryOrder } from '@/types';

interface OrderInfosProps {
  order: DeliveryOrder;
}
export default function OrderInfos({ order }: OrderInfosProps) {
  return (
    <div className="mt-4">
      <LabelValueRow lable="Order ID" value={`#${order.id}`} />
      <LabelValueRow lable="Order Date" value={order.date} />
      { order.deliOption === DeliOption.DELIVER ? (
        <LabelValueRow lable="Delivery Address" value={order.customer.address} />
        ) : (
          <LabelValueRow lable="Delivery Type" value="Self Pick-up" />
      )}
    </div>
  );
}
