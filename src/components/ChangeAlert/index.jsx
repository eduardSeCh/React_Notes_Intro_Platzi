import React from 'react'
import { withStorageListener } from './withStorageListener'

function ChangeAlert ({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios!!!</p>
        <button onClick={() => toggleShow(!show)}>refrescar</button>
      </div>
    )
  } else {
    return null
  }
}

const ChangueAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangueAlertWithStorageListener }
