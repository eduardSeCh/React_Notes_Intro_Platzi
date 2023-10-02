import React from 'react'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoItem } from '../components/TodoItem'

function AppUI ({
  completeTodo,
  completedTodos,
  deleteTodo,
  searchValue,
  totalTodos,
  searchedTodos,
  setSearchValue,
  loading,
  error
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Error al cargar Todos 😥...</p>}
        {!loading && searchedTodos.length === 0 &&
          <p>¡Crea tu primer TODO! 🤠</p>}

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

export { AppUI }
