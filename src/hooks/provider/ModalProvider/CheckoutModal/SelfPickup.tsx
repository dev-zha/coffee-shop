import Title6 from '@/components/shared/typo/Title6';

export default function SelfPickup() {
  return (
    <div>
      <Title6 className="mb-3">Delivery Address</Title6>
      <div className="flex items-center justify-between w-full h-32 bg-white border rounded-2xl overflow-hidden p-3">
        <div className="flex flex-col">
          <span className="text-gray-600 text-xl font-bold">Self Pick Up</span>
          <span className="text-gray-400">
            Show your order history at our store to pick up.
          </span>
        </div>
        <img src="/images/self-pickup.png" alt="Self Pickup" className="w-28" />
      </div>
    </div>
  );
}
