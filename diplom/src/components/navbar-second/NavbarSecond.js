import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavbarSecond = () => {

  return (
    // <nav>
    //   <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
    //     <span className="brand-logo">LOGO</span>
    //     <ul id="nav-mobile" className="right hide-on-med-and-down">
    //       <li><NavLink to="/"> О нас </NavLink></li>
    //       <li><NavLink to="/auth"> Войти </NavLink></li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">LOGO</a>
            </div>
            
            <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/"> О нас </NavLink></li>
                <li><NavLink to="/auth"> Войти </NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

