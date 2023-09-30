import React, { useState } from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import './App.css'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

/* const defaultTodos = [
  { text: 'preuba 101011', completed: false },
  { text: 'preuba 2', completed: true },
  { text: 'preuba 3', completed: false }
] */

/* localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */
/* localStorage.removeItem('TODOS_V1') */
function App () {
  const localStorageTodos = window.localStorage.getItem('TODOS_V1')
  let parsedTodos

  if (!localStorageTodos) {
    window.localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  parsedTodos = JSON.parse(localStorageTodos)

  const [todos, setTodos] = useState(parsedTodos)
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

  const saveTodos = (newTodos) => {
    setTodos(newTodos)
    window.localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(
          todo => <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
                  />
        )}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
