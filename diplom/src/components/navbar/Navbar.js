import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <FontAwesomeIcon icon={ faHome } color="white" />
                </li>
                <li>
                    <Link to='/'> Home </Link>
                </li>
            </ul>
        </div>
    )
}
