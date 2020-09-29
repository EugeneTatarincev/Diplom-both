import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'

export const NavbarSecond = () => {

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">LOGO</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/"> О нас </NavLink></li>
          <li><NavLink to="/auth"> Войти </NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

