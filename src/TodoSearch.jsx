import './css/TodoSearch.css'
function TodoSearch ({ searchValue, setSearchValue }) {
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
