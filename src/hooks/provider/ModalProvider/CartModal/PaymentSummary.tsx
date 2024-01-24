import { useShoppingCart } from '@/hooks/useShoppingCart';
import Title6 from '@/components/shared/typo/Title6';
import PriceRow from '@/components/shared/PriceRow';

export default function PaymentSummary() {
  // Shopping Cart
  const { subTotal, deliFee } = useShoppingCart();

  return (
    <div>
      <Title6 className="mb-2">Payment Summary</Title6>
      <PriceRow lable="Sub Total" amount={subTotal} />
      {!!deliFee && <PriceRow lable="Delivery Fee" amount={deliFee} />}
    </div>
  );
}
