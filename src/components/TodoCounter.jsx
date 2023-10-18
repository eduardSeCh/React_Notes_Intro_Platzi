import '../css/TodoCounter.css'

function TodoCounter ({ completedTodos: completed, totalTodos: total, loading }) {
  return (
    <h1 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>
      Haz completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  )
}

export { TodoCounter }
