import React from "react"
import {NavLink} from "react-router-dom"

const Menu = () => {
  return (
    <nav className="container pt-3">
      <NavLink exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses">Courses</NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Menu
