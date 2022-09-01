import { useState, useEffect } from 'react';

const useLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)),
  );

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    }
  }, [value, localStorageKey]);

  const clearLocalStorage = () =>
    window.localStorage.removeItem(localStorageKey);

  return [value, setValue, clearLocalStorage];
};

export default useLocalStorage;
