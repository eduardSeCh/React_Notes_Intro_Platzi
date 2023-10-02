import React, { useState } from 'react'
import '../css/App.css'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { AppUI } from './AppUI'
/* const defaultTodos = [
  { text: 'preuba 101011', completed: false },
  { text: 'preuba 2', completed: true },
  { text: 'preuba 3', completed: false }
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */
/* localStorage.removeItem('TODOS_V1') */

function App () {
  const {
    items: todos, saveItem: saveTodos, loading, error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    newTodos
      .filter(todo => todo.text === text)
      .forEach(todo => {
        todo.completed = true
      })
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(index, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completeTodo={completeTodo}
      completedTodos={completedTodos}
      deleteTodo={deleteTodo}
      searchValue={searchValue}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
    />
  )
}

export default App
