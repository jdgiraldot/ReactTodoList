import { useState, useEffect } from 'react';

export function useLocaleStorage(itemName, initialValue) {
  const getItem = () => {
    try {
      const itemsFromStorage = window.localStorage.getItem(itemName);
      return itemsFromStorage ? JSON.parse(itemsFromStorage) : initialValue;
    } catch (error) {
      console.error('Error fetching data from localStorage:', error);
      return initialValue;
    }
  };

  const [item, setItem] = useState(getItem);

  useEffect(() => {
    try {
      window.localStorage.setItem(itemName, JSON.stringify(item));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, [itemName, item]);

  return [item, setItem];
}

/*------------------- useLocaleStorage, sin usar Try / Catch ---------------------*/

/*
function useLocaleStorage(itemName, initialValue) {
    let parsedItem = () => {
        const itemsFromStorage = window.localStorage.getItem(itemName)
        return itemsFromStorage ? JSON.parse(itemsFromStorage) : initialValue
    }

    const [item, setItem] = useState(parsedItem)

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem)) // Persistencia de datos
        setItem(newItem)
    }

    return [item, saveItem]
}
*/

/*-------- Crear unos datos default desde la consola del navegador ---------*/

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tómar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

