import React from 'react'
import './WeatherComp.css'

export default function WeatherComp ({temp : {morn, day, night}, data}) {

    let date = new Date (data * 1000)
    return (
        <div className="weather-comp">
            <span> Date: {date.getDate()} </span>
            <span> Morning: {morn} </span>
            <span> Day: {day} </span>
            <span> Night: {night} </span>
        </div>
    )
}