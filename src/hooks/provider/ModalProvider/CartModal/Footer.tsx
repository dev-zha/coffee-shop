import { useShoppingCart } from '@/hooks/useShoppingCart';
import ButtonFilled from '@/components/shared/button/ButtonFilled';
import { priceWithSign } from '@/utils/helper';
import { useModal } from '@/hooks/useModal';
import StickyModalFooter from '../StickyModalFooter';

export default function Footer() {
  // Shopping Cart
  const { totalPayment } = useShoppingCart();
  // Modal Provider
  const { showCheckoutModal } = useModal();

  const handleNextClick = () => {
    showCheckoutModal();
  };

  return (
    <StickyModalFooter>
      <div className="flex justify-between gap-16">
        <div className="flex flex-col text-left">
          <p className="inline-block text-gray-500 text-sm font-normal ">
            Total
          </p>
          <p className="inline-block text-gray-800 font-semibold">
            {priceWithSign(totalPayment)}
          </p>
        </div>
        <ButtonFilled className="w-full" onClick={handleNextClick}>
          Next
        </ButtonFilled>
      </div>
    </StickyModalFooter>
  );
}
