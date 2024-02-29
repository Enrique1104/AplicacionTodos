import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try {
        let parcedItem;
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parcedItem = initialValue;
        } else {
          parcedItem = JSON.parse(localStorageItem);
          setItem(parcedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },200)
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return {item, saveItem,loading,error};
}

export { useLocalStorage };