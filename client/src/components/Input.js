import React from 'react'

function Input(props) {
  return (
    <div>
      <input
        type="text"
        name="place"
        onChange={props.handleChange}
        value={props.value}
        placeholder="Input place"
      />
    </div>
  )
}

export default Input
