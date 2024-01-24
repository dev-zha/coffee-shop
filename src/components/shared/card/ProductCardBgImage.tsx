import { priceWithSign } from '@/utils/helper';
import { useModal } from '@/hooks/useModal';
import { ProductCardProps } from './type';

export default function ProductCardBgImage({ coffee }: ProductCardProps) {
  // Modal Provider
  const { showProductModal } = useModal();

  const handleClick = () => {
    showProductModal(coffee);
  };
  return (
    <button
      onClick={handleClick}
      className="group relative w-full h-48 bg-gray-200 rounded-2xl overflow-hidden"
    >
      <img
        src={coffee.image}
        alt={coffee.displayName}
        className="w-full h-full object-cover bg-gray-300 scale-100 group-hover:scale-110 ease-in duration-200"
      />
      <div className="absolute top-0 left-0 right-0 p-3 pb-10 bg-gradient-to-b from-black/60">
        <span className="text-left text-xl font-semibold text-white line-clamp-2">
          {coffee.displayName}
        </span>
      </div>
      <div className="absolute bottom-0 right-0 p-3">
        <span className="bg-white text-sm text-black font-semibold border rounded-xl px-1.5 py-0.5">
          {priceWithSign(coffee.price)}
        </span>
      </div>
    </button>
  );
}
