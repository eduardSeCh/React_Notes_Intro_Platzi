import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import '../css/CreateTodoButton.css'

function CreateTodoButton () {
  const { openModal, setOpenModal } = useContext(TodoContext)

  const abrirModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <button
      className='CreateTodoButton'
      onClick={(event) => abrirModal()}
    >
      +
    </button>
  )
}

export { CreateTodoButton }
