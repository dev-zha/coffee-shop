import ProductCardHorizontal from '@/components/shared/card/ProductCardHorizontal';
import { CoffeeProduct } from '@/types';
import CategoryTitle from './CategoryTitle';

interface PopularCategoryListProps {
  title: string;
  coffees: CoffeeProduct[];
}
export default function PopularCategoryList({
  title,
  coffees,
}: PopularCategoryListProps) {
  return (
    <div className="mt-6">
      <CategoryTitle>{title}</CategoryTitle>
      <div className="grid grid-cols gap-4">
        {coffees?.slice(0, 4)?.map((coffee) => (
          <ProductCardHorizontal key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
