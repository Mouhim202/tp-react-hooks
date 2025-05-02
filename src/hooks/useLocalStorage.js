import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  let initial;
  try {
    const item = localStorage.getItem(key);
    initial = item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error("Erreur parsing localStorage", error);
    initial = initialValue;
  }

  const [value, setValue] = useState(initial);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Erreur lors de l’enregistrement dans le localStorage", error);
    }
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
