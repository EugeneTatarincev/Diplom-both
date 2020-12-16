import React, { useState } from 'react'
import './GreenComp.scss'


export default function WeatherComp ({data, text, itemId}) {

    return (
        <div className="green-item" id={itemId}>
            <p className="green-data" name="green-data"> {data} </p>
            <label htmlFor="green-data"> {text} </label>
        </div>
    )
}