import React, {useContext} from 'react'
// import {AuthContext} from '../../context/AuthContext'
import './UserAccount.scss'

export const UserAccount = () => {
    // const {userName} = useContext(AuthContext)

    return (
        <div className="user-account">
            <span className="user-label"> User </span> 
            <span className="user-data"> {JSON.parse(localStorage.getItem('userData')).userName} </span>
            <span className="user-label"> Block </span>
            <span className="user-data"> Block Name </span>
        </div>
    )
}