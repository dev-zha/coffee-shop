import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
