import React, { ReactNode, useEffect, useMemo } from 'react';
import { CoffeeProduct, CoffeeType } from '@/types';
import { getAllCoffee } from '@/service/product';
import ProductContext from '../context/ProductContext';

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [coffees, setCoffees] = React.useState<CoffeeProduct[]>([]);
  const icedCoffees: CoffeeProduct[] = coffees?.filter(
    (c) => c.type === CoffeeType.Iced
  );
  const hotCoffees: CoffeeProduct[] = coffees?.filter(
    (c) => c.type === CoffeeType.Hot
  );

  // Get Coffee List
  useEffect(() => {
    const fetchCoffeeList = () => {
      const data = getAllCoffee();
      setCoffees(data);
    };

    fetchCoffeeList();
  }, []);

  const value = useMemo(
    () => ({
      coffees,
      icedCoffees,
      hotCoffees,
    }),
    [coffees]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
