import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function usePath() {
  const location = useLocation();
  return useMemo(() => {
    return location.pathname;
  }, [location.pathname]);
}
