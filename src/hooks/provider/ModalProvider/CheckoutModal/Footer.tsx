import { useShoppingCart } from '@/hooks/useShoppingCart';
import ButtonFilled from '@/components/shared/button/ButtonFilled';
import PriceRow from '@/components/shared/PriceRow';
import StickyModalFooter from '../StickyModalFooter';
import { DeliOption } from '@/types';
import { useUserAddress } from '@/hooks/useUserAddress';

interface FooterProps {
  onOrderClick: () => void;
}
export default function Footer({ onOrderClick }: FooterProps) {
  // Shopping Cart
  const { address } = useUserAddress();
  // Shopping Cart
  const { totalPayment, deliOption } = useShoppingCart();
  const btnDisable = deliOption === DeliOption.DELIVER && !address;

  return (
    <StickyModalFooter>
      <PriceRow lable="Total Payment" amount={totalPayment} />
      <ButtonFilled
        className="w-full mt-2"
        onClick={onOrderClick}
        disabled={btnDisable}
      >
        Order Now
      </ButtonFilled>
    </StickyModalFooter>
  );
}
