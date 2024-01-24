import { MAPBOX_ACCESS_TOKEN } from '@/constants/constants';
import { LatLng } from '../types';
import axios from 'axios';

export const getAddrFromCoordinate = async (
  coordinate: LatLng
): Promise<string> => {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinate.lng},${coordinate.lat}.json`,
      {
        params: {
          access_token: MAPBOX_ACCESS_TOKEN,
        },
      }
    );

    if (response.status === 200) {
      const addr = response.data?.features[0]?.place_name;
      return addr || '';
    } else {
      console.log('not ok');
      return '';
    }
  } catch (error) {
    console.error(error);
    return '';
  }

  // const response = await fetch(
  //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinate.lng},${coordinate.lat}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
  // )
  //   .then((res) => res)
  //   .catch((error) => error);

  // const json = await response.json();
  // if (response.status === 200) {
  //   const addr = json?.features[0]?.place_name;
  //   return addr || '';
  // } else {
  //   console.log('not ok');
  //   return '';
  // }
};
