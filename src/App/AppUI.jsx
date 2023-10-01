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
  setSearchValue
}) {
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

export { AppUI }
