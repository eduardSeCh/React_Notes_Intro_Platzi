import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import '../css/TodoSearch.css'
function TodoSearch () {
  const { searchValue, setSearchValue } = useContext(TodoContext)
  return (
    <input
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      placeholder='Cortar a cebolliun'
    />
  )
}

export { TodoSearch }
