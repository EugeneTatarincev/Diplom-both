import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

export const Navbar = () => {
  const {userName} = useContext(AuthContext)

  // const logoutHandler = event => {
  //   event.preventDefault()
  //   logout()
  // }

  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="navbar-header">
                <NavLink className="navbar-brand" to="/greenhouse">LOGO</NavLink>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to='/userAccount'> s {userName} </NavLink>
                </li>
                {/* <li><a href="/" onClick={logoutHandler}><span className="glyphicon glyphicon-log-in"></span> Выход {userName} </a></li> */}
            </ul>
        </div>
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
