import React, { useState } from 'react'
import './Greenconp.css'


export default function WeatherComp ({data, text, buttonId}) {
    const [isClicked, setClicked] = useState(false)

    return (
        // <div className="weather-comp">
        //     <span>Temperature: {temp}</span>
        //     <button className="btn btn-danger">Изменить температуру</button>
        //     <span>Pressure: {press}</span>
        //     <button className="btn btn-dark">Изменить давление</button>
        // </div>
        <div className="green-item">
            {isClicked ? <div className="pop-up"> <h1 className="display-4"> {data}</h1> </div> : null}
            <button className="btn btn-outline-warning" id={buttonId} onClick={() => setClicked(!isClicked)}> { text } </button>
        </div>
    )
}