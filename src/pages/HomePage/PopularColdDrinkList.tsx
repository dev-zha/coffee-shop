import { useProduct } from '@/hooks/useProduct';
import PopularCategoryList from './PopularCategoryList';

export default function PopularColdDrinkList() {
  // Product Provider
  const { icedCoffees } = useProduct();

  return (
    <PopularCategoryList
      title="Popular Cold Drink"
      coffees={icedCoffees?.slice(0, 4)}
    />
  );
}
