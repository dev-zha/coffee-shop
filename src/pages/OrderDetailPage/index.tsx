import { useParams } from 'react-router-dom';
import Title1 from '@/components/shared/typo/Title1';
import PageLoading from '@/components/shared/PageLoading';
import OrderSummary from './OrderSummary';
import OrderPaymentMethod from './OrderPaymentMethod';
import OrderInfos from './OrderInfos';
import useOrder from './useOrders';
import OrderQR from './OrderQR';

export default function OrderDetailPage() {
  // Params
  const { id } = useParams();
  const { data, isLoading } = useOrder(id);

  if (!isLoading && !data) {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="p-4 placeholder-neutral-800">
        <Title1>Order Details</Title1>
        {data && (
          <div className='w-full max-w-lg bg-white p-4 mt-4 border border-primary-200 rounded-2xl mx-auto'>
            <OrderQR />
            <OrderInfos order={data} />
            <hr className="my-4" />
            <OrderSummary orderItems={data.items} />
            <hr className="my-4" />
            <OrderPaymentMethod method={data.paymentMethod} />
          </div>
        )}
      </div>
      <PageLoading show={isLoading} />
    </>
  );
}
