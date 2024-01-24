import { RadioGroup } from '@headlessui/react';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { classNames } from '@/utils/helper';
import { deliOptions } from '@/constants/constants';

export default function DeliOptionSwitch() {
  // Shopping Cart
  const { deliOption, updateDeliOption } = useShoppingCart();

  return (
    <RadioGroup value={deliOption} onChange={updateDeliOption}>
      <RadioGroup.Label className="sr-only">Delivery Option</RadioGroup.Label>
      <div className="flex w-fit h-fit items-start justify-center p-1 gap-0 bg-neutral-200 rounded-2xl mx-auto">
        {deliOptions.map((option) => (
          <RadioGroup.Option
            key={option.label}
            value={option.value}
            className={({ checked }) =>
              classNames(
                'w-32 h-fit inline-flex items-center justify-center font-semibold px-3.5 py-1.5 rounded-xl ease-in duration-200 cursor-pointer',
                checked ? 'bg-primary text-white' : 'text-gray-600'
              )
            }
          >
            {option.label}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
