import { useState, useEffect } from 'react'

function useLocalStorage (itemName, initialValue) {
  const [items, setItems] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(itemName)
        let parsedItems

        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = initialValue
          setItems(parsedItems)
        } else {
          parsedItems = JSON.parse(localStorageItem)
          setItems(parsedItems)
        }

        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
        console.log('Error: ', error)
      }
    }, 1250)
  }, [])

  const saveItem = (newItems) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }

  return { items, saveItem, loading, error }
}

export { useLocalStorage }
