import { useState, useEffect } from 'react'

/* const defaultTodos = [
  { text: 'preuba 101011', completed: false },
  { text: 'preuba 2', completed: true },
  { text: 'preuba 3', completed: false }
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */
/* localStorage.removeItem('TODOS_V1') */

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
    }, 2000)
  }, [])

  const saveItem = (newItems) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }

  return { items, saveItem, loading, error }
}

export { useLocalStorage }
