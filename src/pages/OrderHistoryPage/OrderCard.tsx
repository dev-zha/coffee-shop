import { DeliveryOrder } from '@/types';
import { priceWithSign } from '@/utils/helper';
import { Link } from 'react-router-dom';

interface OrderCardProps {
  order: DeliveryOrder;
}

export default function OrderCard({ order }: OrderCardProps) {

  const orderItemsText = order?.items?.map((i)=>`${i.quantity}x ${i.productName}`)?.join(", ");
  return (
    <Link
      to={`/orders/${order.id}`}
      className="w-full flex gap-2 bg-white hover:bg-primary-50 p-1 rounded-lg"
    >
      <div className="w-16 h-16 bg-gray-300 rounded-lg overflow-hidden">
        <img
          src={order.image}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-1 justify-between">
        <div className="flex justify-between gap-2 font-semibold">
          <h6 className="text-gray-800 line-clamp-1">{`#${order.id}`}</h6>
          <p className="text-primary">{priceWithSign(order.totalPayment)}</p>
        </div>
        <span className="text-gray-400 text-xs font-semibold">
          {order.date}
        </span>
        <p className="text-gray-500 text-sm font-semibold line-clamp-3">
          {orderItemsText}
        </p>
      </div>
    </Link>
  );
}
