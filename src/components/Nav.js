import React from 'react'

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <h3>vacationTracker</h3>
      </div>
        <nav className="nav-links">
        <ul>
          <li>
              <a href="/">Login</a>
          </li>
          <li>
              <a href="/">Sign Up</a>
          </li>
      </ul>
        </nav>
    </div>
  )
}

export default Nav
