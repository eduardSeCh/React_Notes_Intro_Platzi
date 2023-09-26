import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import './App.css'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const defaultTodos = [
  { text: 'preuba 1', completed: false },
  { text: 'preuba 2', completed: false },
  { text: 'preuba 3', completed: false },
  { text: 'preuba 4', completed: false }
]

function App () {
  return (
    <>
      <TodoCounter completed={16} total={56} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(
          todo => <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
                  />
        )}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
