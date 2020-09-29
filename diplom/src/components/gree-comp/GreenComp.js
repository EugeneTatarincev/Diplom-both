import React from 'react'


export default function WeatherComp ({temp, press}) {

    return (
        <div className="weather-comp">
            <span>Temperature: {temp}</span>
            <span>Pressure: {press}</span>
        </div>
    )
}