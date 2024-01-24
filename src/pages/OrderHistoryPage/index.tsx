import Title1 from '@/components/shared/typo/Title1';
import OrderList from './OrderList';

export default function OrderHistoryPage() {
  return (
    <div className="p-4">
      <Title1>Order History</Title1>
      <div className="mt-4">
        <OrderList />
      </div>
    </div>
  );
}
