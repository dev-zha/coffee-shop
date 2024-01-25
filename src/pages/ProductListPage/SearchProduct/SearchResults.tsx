import ProductCardSmall from '@/components/shared/card/ProductCardSmall';
import { CoffeeProduct } from '@/types';

interface SearchResultsProps {
  coffees: CoffeeProduct[];
}

export default function SearchResults({ coffees }: SearchResultsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {coffees?.map((coffee) => (
        <ProductCardSmall key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}
