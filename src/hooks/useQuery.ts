import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useQuery() {
  const [searchParams] = useSearchParams();
  return useMemo(() => {
    return Object.fromEntries(Array.from(searchParams.entries()));
  }, [searchParams]);
}
