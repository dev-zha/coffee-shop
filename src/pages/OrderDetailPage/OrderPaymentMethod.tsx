import Title6 from '@/components/shared/typo/Title6';
import { paymentMethodOptions } from '@/constants/constants';
import { PaymentMethod } from '@/types';

interface OrderPaymentMethodProps {
  method: PaymentMethod;
}
export default function OrderPaymentMethod({
  method,
}: OrderPaymentMethodProps) {
  const paymentMethod = paymentMethodOptions?.filter(
    (pm) => pm.value === method
  )[0];

  return (
    <div>
      <Title6 className="mb-3">Payment Method</Title6>
      <div className="flex p-2 bg-white text-primary font-semibold border border-primary rounded-xl">
        <div className="flex w-full items-center justify-between">
          <p>{paymentMethod.label}</p>
          <img
            src={paymentMethod.icon}
            alt={paymentMethod.label}
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
}
