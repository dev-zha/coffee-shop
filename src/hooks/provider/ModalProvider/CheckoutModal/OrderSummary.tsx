import { useShoppingCart } from '@/hooks/useShoppingCart';
import Title6 from '@/components/shared/typo/Title6';
import PriceRow from '@/components/shared/PriceRow';
import { priceWithSign } from '@/utils/helper';

export default function OrderSummary() {
  // Shopping Cart
  const { items, subTotal, deliFee } = useShoppingCart();

  return (
    <div>
      <Title6>Order Summary</Title6>
      <table className="w-full mt-2">
        <tbody className='space-y-2'>
          {items?.map((item) => (
            <tr
              key={item.product.id}
              className="flex items-center justify-between text-sm font-normal text-neutral-800"
            >
              <td className="text-left w-[2rem]">{`${item.quantity}x `}</td>
              <td className="text-left w-[calc(100%-9rem)] line-clamp-1">
                {item.product.displayName}
              </td>
              <td className="text-right w-[7rem] overflow-hidden pl-2">
                {priceWithSign(item.product.price * item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="my-2" />
      <PriceRow lable="Sub Total" amount={subTotal} />
      <PriceRow lable="Delivery Fee" amount={deliFee} />
    </div>
  );
}
