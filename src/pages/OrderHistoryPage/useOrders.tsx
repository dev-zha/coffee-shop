import { useEffect, useState } from 'react';
import { DeliveryOrder } from '@/types';
import { fakeTimer } from '@/utils/helper';
import { getOrderList } from '@/service/order';

export default function useOrders() {
  const [data, setData] = useState<DeliveryOrder[]>([]);
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoding(true);
      await fakeTimer(1000);
      const res = getOrderList();
      setData(res);
      setLoding(false);
    };
    getData();
  }, []);

  return { data, isLoading };
}
