import { RadioGroup } from '@headlessui/react';
import Title6 from '@/components/shared/typo/Title6';
import { classNames } from '@/utils/helper';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { paymentMethodOptions } from '@/constants/constants';

export default function PaymentMethodSwitch() {
  // Shopping Cart
  const { paymentMethod, updatePaymentMethod } = useShoppingCart();

  return (
    <div>
      <Title6 className="mb-3">Payment Method</Title6>
      <RadioGroup value={paymentMethod} onChange={updatePaymentMethod}>
        <RadioGroup.Label className="sr-only">Payment Method</RadioGroup.Label>
        <div className="space-y-2">
          {paymentMethodOptions.map((pm) => (
            <RadioGroup.Option
              key={pm.label}
              value={pm.value}
              className={({ active, checked }) =>
                classNames(
                  'flex p-2 border rounded-xl focus:outline-none cursor-pointer',
                  active ? 'focus:ring-2 focus:ring-primary-200' : '',
                  checked
                    ? 'bg-primary-100 text-primary font-semibold border-primary'
                    : 'bg-white text-gray-600 border-gray-300'
                )
              }
            >
              <div className="flex w-full items-center justify-between">
                <RadioGroup.Label as="p">{pm.label}</RadioGroup.Label>
                <img src={pm.icon} alt={pm.label} className="w-8 h-8 bg-gray-300 rounded" />
              </div>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
