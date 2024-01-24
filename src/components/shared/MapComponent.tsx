import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import { MAPBOX_ACCESS_TOKEN, defaultCoordinate } from '@/constants/constants';
import { LatLng } from '@/types';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useUserAddress } from '@/hooks/useUserAddress';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

interface MapComponentProps {
  onCoordChange?: (value: LatLng) => void;
  interactive?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({
  onCoordChange,
  interactive = true,
}) => {
  // Auth Provider
  const { address } = useUserAddress();
  // Map
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  useEffect(() => {
    if (map.current) {
      return;
    } // initialize map only once

    const initLoc = address?.coordinates || defaultCoordinate;
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [initLoc.lng, initLoc.lat],
      zoom: 14,
      interactive,
    });

    if(interactive){
      map.current.on('move', async () => {
        if (map.current && onCoordChange) {
          onCoordChange({
            lat: map.current.getCenter().lat,
            lng: map.current.getCenter().lng,
          });
        }
      });
    }

  });

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex text-primary items-center justify-center">
        <MapPinIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default MapComponent;
