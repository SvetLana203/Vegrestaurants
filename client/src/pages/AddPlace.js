import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const AddPlace = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/places`, props.form)
    props.clearForm()
    props.history.push('/listplaces')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={props.form.title}
        placeholder="title"
        onChange={props.handleChange}
      ></input>
      <input
        name="url"
        value={props.form.url}
        placeholder="image"
        onChange={props.handleChange}
      ></input>
      <input
        name="location"
        value={props.form.location}
        placeholder="location"
        onChange={props.handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddPlace
