import React, { useState, useContext} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'
import './Settings.css'

export default function Settings ({onSelect, city}) {
    const [data, setData] = useState('')
    const auth = useContext(AuthContext)
    const {request} = useHttp()

    function changeData(event) {
        const { value } = event.target
        setData(value)
    }

    async function sendData () {
        try {
            const res = await request('http://localhost:3001/api/data/generate', 'POST', {data}, {
              Authorization: `Bearer ${auth.token}`
            })
            console.log(res)
          } catch (e) {}
    }

    return (
        <div className="settings">
            <label htmlFor="city-select"> Выберите город </label>
            <div className="select" name='city-select'>
                <select onChange={onSelect} value={city}> 
                    <option value="" disabled>Выберите город</option>
                    <option value="Moscow">Москва</option>
                    <option value="Voronezh">Воронеж</option>
                    <option value="Piter">Питер</option>
                </select>
            </div>

            <div className="block-set">
                <label htmlFor="block-id">Айди блока управления</label>
                <input className="block-id form-control" type="text" name="block-id" onChange={changeData}/>
                <button className="btn btn-outline-secondary" onClick={sendData}> Send </button>
            </div>
        </div>
    )
}