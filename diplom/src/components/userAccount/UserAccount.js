import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'
import './UserAccount.css'

export const UserAccount = () => {
    const history = useHistory()
    const {logout, userName} = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        logout()
        history.push('/')
    }

    return (
        <div className="user-account">
            {console.log(JSON.parse(localStorage.getItem('userData')).userName)}
            <p> user: {JSON.parse(localStorage.getItem('userData')).userName} </p>
            <p> block: Block Name </p>
            <a href="/" onClick={logoutHandler} className="btn btn-outline-info" ><span className="glyphicon glyphicon-log-in"></span> Выход </a>
        </div>
    )
}