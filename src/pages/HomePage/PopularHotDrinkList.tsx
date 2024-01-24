import { useProduct } from '@/hooks/useProduct';
import PopularCategoryList from './PopularCategoryList';

export default function PopularHotDrinkList() {
  // Product Provider
  const { hotCoffees } = useProduct();

  return (
    <PopularCategoryList
      title="Popular Hot Drink"
      coffees={hotCoffees?.slice(0, 4)}
    />
  );
}
