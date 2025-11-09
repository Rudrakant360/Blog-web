import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-3">
      <ul className="list-none flex justify-end space-x-8 pr-10">
        <li>
          <NavLink
            to="/"
            className="text-black font-medium hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createpost"
            className="text-black font-medium hover:text-gray-600 transition-colors duration-200"
          >
            Create Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className="text-black font-medium hover:text-gray-600 transition-colors duration-200"
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
