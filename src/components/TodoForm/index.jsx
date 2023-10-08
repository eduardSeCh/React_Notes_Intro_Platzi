import React from 'react'
import './TodoForm.css'
function TodoForm () {
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
    }}
    >
      <label>Escribe tu nuevo TODO ✔️</label>
      <textarea placeholder='Tu  TODO' name='' id='' cols='30' rows='10' />
      <div className='TodoForm-button--container'>
        <button
          type='button'
          className='TodoForm-button button--add'
        >
          Añadir
        </button>
        <button
          type='submit'
          className='TodoForm-button button--cancel'
        >Cancelar
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
