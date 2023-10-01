import { useState } from 'react'

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = window.localStorage.getItem(itemName)
  let parsedItems

  if (!localStorageItem) {
    window.localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItems = initialValue
  } else {
    parsedItems = JSON.parse(localStorageItem)
  }

  const [items, setItems] = useState(parsedItems)

  const saveItem = (newItems) => {
    setItems(newItems)
    window.localStorage.setItem(itemName, JSON.stringify(newItems))
  }

  return [items, saveItem]
}

export { useLocalStorage }
