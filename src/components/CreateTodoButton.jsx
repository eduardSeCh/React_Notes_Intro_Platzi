import React from 'react'
import '../css/CreateTodoButton.css'

function CreateTodoButton ({ openModal, setOpenModal }) {
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
