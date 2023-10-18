import '../css/TodoList.css'

function TodoList ({
  error, loading, searchedTodos, totalTodos, searchText,
  onError, onLoading, onEmpty, onEmptySearchResults, render
}) {
  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {(!loading && !totalTodos) && onEmpty()}
      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}

      {searchedTodos.map(render)}
      <ul className='TodoList' />
    </section>
  )
}

export { TodoList }
