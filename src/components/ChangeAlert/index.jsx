import React from 'react'
import { withStorageListener } from './withStorageListener'

function ChangeAlert (show, toggleShow) {
  if (show) {
    return (
      <div>Hubo cambios</div>
    )
  }
}

const ChangueAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangueAlertWithStorageListener }
