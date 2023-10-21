import React, { useState } from 'react'

function withStorageListener (WrappedComponent) {
  return function WrappedComponentWithLocalStorageListener (props) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('hubo cambios en TODOS_V1')
        setStorageChange(!storageChange)
      }
    })

    const toggleShow = () => {
      setStorageChange(!storageChange)
      props.sincronize()
    }

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}

export { withStorageListener }
