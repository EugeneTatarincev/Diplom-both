import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
import './UserAccount.css'

export const UserAccount = () => {
    const {userName} = useContext(AuthContext)

    return (
        <div className="user-account">
            {console.log(JSON.parse(localStorage.getItem('userData')).userName)}
            <p> user: {JSON.parse(localStorage.getItem('userData')).userName} </p>
            <p> block: Block Name </p>
        </div>
    )
}