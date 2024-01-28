import { v4 as uuidv4 } from 'uuid';
import { DeliveryOrder } from '@/types';
import { getCoffeeById } from './product';

const keyName = 'coffee-shop-orders';

const sortByDate = (list: DeliveryOrder[]): DeliveryOrder[] => {
  return list.sort((a, b) => {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();
    return bDate - aDate;
  });
};

export function getOrderList(): DeliveryOrder[] {
  try {
    const value = window.localStorage.getItem(keyName);
    if (value) {
      const orders = JSON.parse(value) as DeliveryOrder[];
      const sortedList = sortByDate(orders);

      return sortedList;
    }
    return [];
  } catch (err) {
    console.log('Error:: getOrderList :', err);
    return [];
  }
}

export function getOrderById(id: string): DeliveryOrder | null {
  try {
    const orders = getOrderList();

    const order = orders?.filter((o) => o.id === id)?.[0];
    return order?.id ? order : null;
  } catch (err) {
    console.log('Error:: getOrderById :', err);
    return null;
  }
}

export function getOrderCount(): number {
  try {
    const orders = getOrderList();
    return orders?.length || 0;
  } catch (err) {
    console.log('Error:: getOrderCount :', err);
    return 0;
  }
}

const shortRandomUUID = (): string => {
  const uuid = uuidv4();
  return uuid.split('-').join('').substring(0, 8);
};

const makeFakeOrder = (newOrder: TAddOrder): DeliveryOrder => {
  // Id
  const id = shortRandomUUID();
  // Date
  const currentDate = new Date();
  const date = currentDate.toLocaleString('en-US');
  // Image
  const firstItem = newOrder.items[0];
  const image = getCoffeeById(firstItem.productId).image;

  return {
    ...newOrder,
    id,
    date,
    image,
  };
};

export type TAddOrder = Omit<DeliveryOrder, 'id' | 'date' | 'image'>;

export function addOrder(newOrder: TAddOrder): DeliveryOrder | null {
  try {
    const oldOrders = getOrderList();
    const order = makeFakeOrder(newOrder);
    const mergeData: DeliveryOrder[] = [...oldOrders, order];

    window.localStorage.setItem(keyName, JSON.stringify(mergeData));

    return order;
  } catch (err) {
    console.log('Error:: addOrder :', err);

    return null;
  }
}

export function removeAllOrders(): void {
  try {
    window.localStorage.removeItem(keyName);
  } catch (err) {
    console.log('Error:: removeAllOrders :', err);
  }
}
