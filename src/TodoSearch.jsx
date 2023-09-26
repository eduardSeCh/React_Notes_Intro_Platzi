import React, { useState } from 'react'
import './css/TodoSearch.css'
function TodoSearch () {
  const [searchValue, setSearchValue] = useState('')

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
