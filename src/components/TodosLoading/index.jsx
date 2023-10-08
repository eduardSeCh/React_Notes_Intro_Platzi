import '../css/TodosLoading.css'
function TodosLoading () {
  return (
    <div className='loadingTodo-container'>
      <span className='loadingTodo-completeIcon' />
      <p className='loadingTodo-text' />
      <span className='loadingTodo-deleteIcon' />
    </div>
  )
}

export { TodosLoading }
