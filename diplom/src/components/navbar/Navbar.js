import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import './Navbar.scss'

export const Navbar = () => {
  const history = useHistory()
  const {logout, userName} = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    logout()
    history.push('/')
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-right">
        {/* <div className="container-fluid"> */}
            {/* <div className="navbar-header">
                <NavLink className="navbar-brand" to="/greenhouse"> LOGO </NavLink>
            </div> */}
            <ul className="nav navbar-nav">
                <li>
                  <NavLink to='/userAccount'> {userName} </NavLink>
                </li>
                <li>
                  <a href="/" onClick={logoutHandler}><span className="glyphicon glyphicon-log-in"></span> Выход </a>
                </li>
            </ul>
        {/* </div> */}
    </nav>
  )
}






















// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <div className="navbar">
//             <ul>
//                 <li>
//                     <FontAwesomeIcon icon={ faHome } color="white" />
//                 </li>
//                 <li>
//                     <Link to='/'> Home </Link>
//                 </li>
//             </ul>
//         </div>
//     )
// }
