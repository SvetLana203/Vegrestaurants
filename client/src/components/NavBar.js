import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Vegrestaurants</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/listplaces">List Places</NavLink>
        <NavLink to="/create">Add a place</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
