import React from 'react'
import { Link } from "react-router-dom"
import './Menu.scss'

export default function Menu() {
    return (
        <ul className="menu">
            <li>
                <Link className='butn-1' to='/greenhouse'> Greenhouse </Link>
            </li>
            <li>
                <Link className='butn-1' to='/forecast'> Forecast </Link>
            </li>
            <li>
                <Link className='butn-1' to='/settings'> Settings </Link>
            </li>
        </ul>
    )
}