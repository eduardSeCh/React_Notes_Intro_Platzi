import React from 'react'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoItem } from '../components/TodoItem'
import { TodosLoading } from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import { TodosEmpty } from '../components/TodosEmpty'
import { TodoContext } from '../TodoContext'
import { TodoForm } from '../components/TodoForm'
import { Modal } from '../Modal'

function AppUI () {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {(
          {
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
          }) => (
            <>
              <TodoList>
                {loading &&
                  <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                  </>}
                {error && <TodosError />}
                {!loading && searchedTodos.length === 0 &&
                  <TodosEmpty />}

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
              {openModal &&
                <Modal>
                  <TodoForm />
                </Modal>}
            </>

        )}
      </TodoContext.Consumer>

    </>
  )
}

export { AppUI }
