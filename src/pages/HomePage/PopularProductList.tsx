import ProductCardBgImage from '@/components/shared/card/ProductCardBgImage';
import CategoryTitle from './CategoryTitle';
import { useProduct } from '@/hooks/useProduct';

export default function PopularProductList() {
  // Product Provider
  const { hotCoffees } = useProduct();

  return (
    <div className="mt-6">
      <CategoryTitle>Popular Drink</CategoryTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {hotCoffees?.slice(0, 4)?.map((coffee) => (
          <ProductCardBgImage key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
