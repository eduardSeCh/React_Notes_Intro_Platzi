import '../css/TodoSearch.css'
function TodoSearch ({ searchValue, setSearchValue, loading }) {
  return (
    <input
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      disabled={loading}
      placeholder='Cortar a cebolliun'
    />
  )
}

export { TodoSearch }
