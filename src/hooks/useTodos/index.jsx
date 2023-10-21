import { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'

function useTodos () {
  const {
    items: todos, saveItem: saveTodos, loading, error,
    sincronizeItems: sincronizedTodos
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    }
  )

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

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

  return {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    addTodo,
    openModal,
    setOpenModal,
    sincronizedTodos
  }
}

export { useTodos }
