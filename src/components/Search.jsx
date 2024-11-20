import React, { useState } from 'react'

function Search({ onSearch }) {
  
  const [query, setQuery] = useState('')
  const handleInputChange = (e) => setQuery(e.target.value)// mengambil input 

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
    setQuery('')
  }

  return (
    <>
      <form onSubmit={handleSearch} className='d-flex'>
        <input
        type="text" 
        className='form-control' 
        placeholder='Search'
        onChange={handleInputChange}
        value={query} />
        <button className='quicksand-700 btn btn-outline-secondary' type='submit'>Search</button>
      </form>
    </>
  )
}

export default Search
