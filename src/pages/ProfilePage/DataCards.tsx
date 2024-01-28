import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import DataCard from './DataCard';
import { getOrderCount } from '@/service/order';

export default function DataCards() {
  const userOrderCount = getOrderCount();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
      <DataCard label="Order Count" value={userOrderCount} Icon={ShoppingBagIcon} />
      <DataCard label="Favorite Items" value={1024} Icon={HeartIcon} />
    </div>
  );
}
