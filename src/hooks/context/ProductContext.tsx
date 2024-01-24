import { createContext } from 'react';
import { CoffeeProduct } from '@/types';

interface ProductContextProps {
  coffees: CoffeeProduct[];
  icedCoffees: CoffeeProduct[];
  hotCoffees: CoffeeProduct[];
}

const ProductContext = createContext<ProductContextProps | null>(null);

export default ProductContext;
