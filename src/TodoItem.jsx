import './css/TodoItem.css'

function TodoItem ({ text, completed }) {
  return (
    <li className='TodoItem'>
      <span className={` Icon Icon-check ${completed && 'Icon-complete--active'}`}>{completed ? '✅' : '☑️'}</span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span className='Icon Icon-delete'>😢</span>
    </li>
  )
}

export { TodoItem }
