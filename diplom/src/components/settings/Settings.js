import React from 'react'
import './Settings.css'

export default function Settings ({onSelect, city}) {
    return (
        <div className="select">
            <select onChange={onSelect} value={city}> 
                <option value="">Выберите город</option>
                <option value="Moscow">Москва</option>
                <option value="Voronezh">Воронеж</option>
                <option value="Piter">Питер</option>
            </select>
        </div>
    )
}