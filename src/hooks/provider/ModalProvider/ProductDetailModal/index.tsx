import { CoffeeProduct } from '@/types';
import BlankModal from '../BlankModal';
import Footer from './Footer';
import ProductSizeSwitch from './ProductSizeSwitch';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';

interface ProductDetailModalProps {
  product: CoffeeProduct | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  return (
    <BlankModal show={!!product} onClose={onClose}>
      {product && (
        <>
          <ProductImage product={product} onClose={onClose} />
          <div className="p-4 pb-8">
            <ProductInfo product={product} />
            <hr className="my-4" />
            <ProductSizeSwitch />
          </div>
          <Footer product={product} onClose={onClose} />
        </>
      )}
    </BlankModal>
  );
}
