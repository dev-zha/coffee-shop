import ProductCardHorizontal from '@/components/shared/card/ProductCardHorizontal';
import { CoffeeProduct } from '@/types';
import CategoryTitle from './CategoryTitle';

interface ProductsByCategoryProps {
  title: string;
  coffees: CoffeeProduct[];
}
export default function ProductsByCategory({
  title,
  coffees,
}: ProductsByCategoryProps) {
  return (
    <div className="mt-6">
      <CategoryTitle>{title}</CategoryTitle>
      <div className="grid grid-cols gap-4">
        {coffees?.map((coffee) => (
          <ProductCardHorizontal key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
