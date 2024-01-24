import { useProduct } from '@/hooks/useProduct';
import ProductsByCategory from './ProductsByCategory';

export default function ColdDrinkList() {
  // Product Provider
  const { icedCoffees } = useProduct();

  return <ProductsByCategory title="Cold Drink" coffees={icedCoffees} />;
}
