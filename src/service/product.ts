import { CoffeeProduct } from '@/types';
import coffeeData from '@/data/product.json';

export function getAllCoffee(): CoffeeProduct[] {
  return coffeeData as CoffeeProduct[];
}

export function getCoffeeById(id: string): CoffeeProduct {
  const coffees = getAllCoffee();

  return coffees?.filter((c) => c.id === id)[0];
}
