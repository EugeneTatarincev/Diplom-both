import React from 'react'
import {months} from './Months'
import './WeatherComp.scss'

export default function WeatherComp ({temp : {утро, день, ночь}, data}) {

    let date = new Date (data * 1000)
    return (
        <div className="weather-comp">
            
            <div className="weather-block">
                <span className="weather-day"> {date.getDate()} </span>
                <span className="weather-date"> {months[date.getMonth()]} </span>
            </div>

            <div className="weather-block">
                <span className="weather-label"> утро </span>
                <span className="weather-data"> {утро} </span> 
            </div>
        
            <div className="weather-block">
                <span className="weather-label"> день </span>
                <span className="weather-data"> {день} </span> 
            </div>

            <div className="weather-block">
                <span className="weather-label"> ночь </span>
                <span className="weather-data"> {ночь} </span>
            </div>
        </div>
    )
}