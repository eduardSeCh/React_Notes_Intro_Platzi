import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import '../css/TodoCounter.css'

function TodoCounter () {
  const { completedTodos: completed, totalTodos: total } = useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      Haz completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  )
}

export { TodoCounter }
