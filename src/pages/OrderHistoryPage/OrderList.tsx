import PageLoading from '@/components/shared/PageLoading';
import { classNames } from '@/utils/helper';
import OrderCard from './OrderCard';
import useOrders from './useOrders';
import EmptyOrder from './EmptyOrder';

export default function OrderList() {
  const { data, isLoading } = useOrders();
  const orderCount = data.length;

  return (
    <>
      {!isLoading && (
        <div className="w-full">
          {orderCount > 0 ? (
            <ul>
              {data?.map((order, index) => (
                <li
                  key={index}
                  className={classNames(
                    'py-2',
                    index !== orderCount - 1
                      ? 'border-b border-primary-200'
                      : ''
                  )}
                >
                  <OrderCard order={order} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyOrder />
          )}
        </div>
      )}
      <PageLoading show={isLoading} />
    </>
  );
}
