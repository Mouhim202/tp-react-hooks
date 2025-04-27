import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
 
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  // Met à jour le localStorage 
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue)); // Sauvegarde la nouvelle valeur dans le LocalStorage
  };

  return [value, setStoredValue]; // Retourne la valeur et la fonction de mise à jour
};

export default useLocalStorage;
