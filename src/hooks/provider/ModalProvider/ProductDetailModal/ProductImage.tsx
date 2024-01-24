import { XMarkIcon } from '@heroicons/react/24/outline';
import { CoffeeProduct } from '@/types';

interface ProductImageProps {
  product: CoffeeProduct;
  onClose: () => void;
}

export default function ProductImage({ product, onClose }: ProductImageProps) {
  return (
    <div className="relative w-full h-56 bg-gray-300">
      <img
        src={product?.image}
        alt={product?.displayName}
        className="w-full h-full object-cover"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 bg-white hover:bg-primary-50 text-primary rounded-full"
      >
        <XMarkIcon className="h-5 w-5 stroke-2" />
      </button>
    </div>
  );
}
