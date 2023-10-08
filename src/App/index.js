import { TodoProvider } from '../TodoContext'
import '../css/App.css'
import { AppUI } from './AppUI'

function App () {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
