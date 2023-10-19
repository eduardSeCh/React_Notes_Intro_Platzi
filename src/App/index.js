import { useTodos } from '../hooks/useTodos'
import '../css/App.css'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoItem } from '../components/TodoItem'
import { TodosLoading } from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import { TodosEmpty } from '../components/TodosEmpty'
import { TodoForm } from '../components/TodoForm'
import { TodoHeader } from '../components/TodoHeader'
import { Modal } from '../Modal'
import { ChangueAlertWithStorageListener } from '../components/ChangeAlert'

function App () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos()
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <TodosEmpty />}
        onEmptySearchResults={(searchtext) => <p>No hay resultados para {searchtext}</p>}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </Modal>}
      <ChangueAlertWithStorageListener />
    </>

  )
}
/* function App () {
  const [state] = useState('Estado compartido 🤭')
  return (
    <>
      <TodoHeader>
        <TodoCounter state={state} />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </>
  )
}
function TodoHeader ({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}
function TodoList ({ children }) {
  return (
    <section className='TodoList-container'>
      {children}
    </section>
  )
}
function TodoCounter () {
  return <p>TodoCounter</p>
}
function TodoSearch () {
  return <p>TodoSearch</p>
}
function TodoItem ({ state }) {
  return <p>TodoItem: {state}</p>
} */

export default App
