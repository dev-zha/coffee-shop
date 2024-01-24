import { useEffect, useState } from 'react';
import { DeliveryOrder } from '@/types';
import { fakeTimer } from '@/utils/helper';
import { getOrderById } from '@/service/order';

export default function useOrder(id: string | undefined) {
  const [data, setData] = useState<DeliveryOrder | null>(null);
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoding(true);
      await fakeTimer(1000);
      const res = getOrderById(id!);
      if(res){
        setData(res);
      }
      setLoding(false);
    };

    if (id) {
      getData();
    }
  }, [id]);

  return { data, isLoading };
}
