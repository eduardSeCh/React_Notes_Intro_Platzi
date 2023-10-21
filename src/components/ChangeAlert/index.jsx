import React from 'react'
import { withStorageListener } from './withStorageListener'

function ChangeAlert ({ show, toggleShow }) {
  if (show) {
    console.log(show)
    return (
      <div>
        <p>Hubo cambios!!!</p>
        <button onClick={() => toggleShow(!show)}>regrescar</button>
      </div>
    )
  } else {
    return null
  }
}

const ChangueAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangueAlertWithStorageListener }
