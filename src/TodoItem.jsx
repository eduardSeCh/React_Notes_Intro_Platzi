function TodoItem ({ text, completed }) {
  return (
    <li>
      <span className={` Icon Icon-check ${completed && 'Icon-complete--active'}`}>{completed ? '✅' : '☑️'}</span>
      <p className='TodoItem-p TodoItem-p--complete'>{text}</p>
      <span className='Icon Icon-delete'>😢</span>
    </li>
  )
}

export { TodoItem }
