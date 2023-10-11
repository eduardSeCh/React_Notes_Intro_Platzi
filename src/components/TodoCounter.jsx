import '../css/TodoCounter.css'

function TodoCounter ({ completedTodos: completed, totalTodos: total }) {
  return (
    <h1 className='TodoCounter'>
      Haz completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  )
}

export { TodoCounter }
