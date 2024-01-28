import PriceRow from '@/components/shared/PriceRow';
import Title6 from '@/components/shared/typo/Title6';
import { OrderItem } from '@/types';
import { getSumFromArr, priceWithSign } from '@/utils/helper';

interface OrderSummaryProps {
  orderItems: OrderItem[];
}

export default function OrderSummary({ orderItems }: OrderSummaryProps) {
  const subTotal = getSumFromArr(
    orderItems?.map((item) => item.price * item.quantity)
  );
  // const deliFee = deliOption === DeliOption.DELIVER ? defaultDeliFee : 0;
  const deliFee = 0;
  const totalPayment = subTotal + deliFee;

  return (
    <div>
      <Title6>Order Summary</Title6>
      <table className="w-full mt-2">
        <tbody className='space-y-2'>
          {orderItems?.map((item) => (
            <tr
              key={item.productId}
              className="flex items-center justify-between text-sm font-normal text-neutral-800"
            >
              <td className="text-left w-[2rem]">{`${item.quantity}x `}</td>
              <td className="text-left w-[calc(100%-9rem)] line-clamp-1">
                {item.productName}
              </td>
              <td className="text-right w-[7rem] overflow-hidden pl-2">
                {priceWithSign(item.price * item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="my-2" />
      <PriceRow lable="Sub Total" amount={subTotal} />
      <PriceRow lable="Delivery Fee" amount={deliFee} />
      <hr className="my-2" />
      <PriceRow lable="Total Payment" amount={totalPayment} />
    </div>
  );
}
