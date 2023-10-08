import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoForm.css'
function TodoForm () {
  const { addTodo, openModal, setOpenModal } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    if (newTodoValue !== '') {
      addTodo(newTodoValue)
      setOpenModal(!openModal)
    }
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO ✔️</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder='Tu  TODO' />
      <div className='TodoForm-button--container'>
        <button
          type='submit'
          className='TodoForm-button button--add'
        >
          Añadir
        </button>
        <button
          onClick={() => setOpenModal(!openModal)}
          type='submit'
          className='TodoForm-button button--cancel'
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
