import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
// import App from './App'

function App (props) {
  return (
    <h1>¡{props.saludo}, {props.name}!</h1>
  )
}

function withSaludo (WrappedComponente) {
  return function WrappedComponenetWithSaludo (saludo) {
    return function componenteDeVerdad (props) {
      return (
        <>
          <WrappedComponente {...props} saludo={saludo} />
          <p>Estamos usando al WrappedComponente</p>
        </>
      )
    }
  }
}

const AppWithWhatever = withSaludo(App)('winassssss')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppWithWhatever saludo='hey' name='Juanita' />)
