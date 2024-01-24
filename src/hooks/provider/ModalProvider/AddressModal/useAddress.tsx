import { useEffect, useState } from 'react';
import { LatLng } from '@/types';
import { getAddrFromCoordinate } from '@/service/mapBoxGeoCoding';

const useAddress = (coordinates: LatLng | null, initAddress: string) => {
  const [address, setAddress] = useState(initAddress);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getAddress = async () => {
      setLoading(true);
      const newAddr = await getAddrFromCoordinate({
        lat: coordinates!.lat,
        lng: coordinates!.lng,
      });
      setAddress(newAddr);
      setLoading(false);
    };

    if (coordinates !== null) {
      getAddress();
    }
  }, [coordinates]);

  return { address, setAddress, isLoading };
};

export default useAddress;
