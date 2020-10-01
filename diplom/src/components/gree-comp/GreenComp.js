import React from 'react'


export default function WeatherComp ({temp, press}) {

    return (
        <div className="weather-comp">
            <span>Temperature: {temp}</span>
            <button className="btn btn-danger">Изменить температуру</button>
            <span>Pressure: {press}</span>
            <button className="btn btn-dark">Изменить давление</button>
        </div>
    )
}