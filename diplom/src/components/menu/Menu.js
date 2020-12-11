import React from 'react'
import { Link } from "react-router-dom"
import './Menu.scss'

export default function Menu() {
    return (
        <div className="menu-base">
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
                <li>
                    <Link className='butn-1' to='/sensors'> Sensors </Link>
                </li>
            </ul>
        </div>
    )
}