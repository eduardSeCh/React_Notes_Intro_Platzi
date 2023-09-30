import { BsFillFileXFill } from 'react-icons/bs'
import './css/TodoItem.css'

function TodoItem ({ text, completed, onComplete, onDelete }) {
  return (
    <li className='TodoItem'>
      {/* <CompleteIcon /> */}
      <span
        className={` Icon Icon-check ${completed && 'Icon-complete--active'}`}
        onClick={onComplete}
      >
        {completed ? '✅' : '☑️'}
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      {/* <DeleteIcon /> */}
      <span
        className='Icon Icon-delete'
        onClick={onDelete}
      >
        <BsFillFileXFill />
      </span>
    </li>
  )
}

export { TodoItem }
