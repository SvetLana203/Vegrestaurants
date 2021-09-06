import React from 'react'

const SearchPlace = (props) => {
  return (
    <form className="search1" onSubmit={(e) => props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search"
        onChange={props.onChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchPlace
