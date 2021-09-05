import React from 'react'

const Search = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search"
        onChange={(e) => props.onChange(e)}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
