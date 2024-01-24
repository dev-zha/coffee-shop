import { useState } from 'react';

export const useLocalStorage = <T>(keyName: string, defaultValue: T | null) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value) as T;
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T | null) => {
    try {
      if (newValue) {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } else {
        window.localStorage.removeItem(keyName);
      }
    } catch (err) {
      //
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue] as const;
};
