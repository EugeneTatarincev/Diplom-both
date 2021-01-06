import React, { Component, useState, useEffect } from 'react'
import WeatherComp from '../weather-comp/WeatherComp'
import Loader from '../loader/Loader'
import Error from '../error/Error'
import WeatherGraph from '../weather-comp/WeatherGraph'
import weatherService from '../../services/weatherService'


import './WeatherIn.css'

export default function WeatherIn ({city}){
    const weatherObj = new weatherService()
    const [state, setState] = useState({ 
        items: [],
        loading: true,
        error: false,
    })

    const [width, setWidth] = useState('')


    // Просто для примера как выглядит погодный график
    // data = [
    //     {name: '1', mor: 4000, day: 2000},
    //     {name: '2', mor: 3000, day: 2000},
    //     {name: '3', mor: 2000, day: 2000},
    //     {name: '4', mor: 2700, day: 2000},
    //     {name: '5', mor: 1800, day: 2000},
    // ]
    

    function updateWeather() {
        weatherObj.getWeather(city)
            .then(res => {
                setState({items: res, loading: false })
                console.log(res)
            }) 
            .catch(err => setState({ loading: false,error: true }))     
    }

    useEffect(() => { 
        updateWeather()
    }, [])

    useEffect(() => { 
        setWidth(window.innerWidth)
    }, [window.innerWidth])

    const {items, loading, error} = state
    const spinner = loading ? <Loader/> : null
    const errorMessage = error ? <Error /> : null
   
    return (
        <div className="weather">
            {errorMessage}
            {spinner}
            {width > 1000 ? !spinner && <WeatherGraph data={items}/> : items.map((item, i) => <WeatherComp key={i} temp={item.temp} data={item.data}/>)}
            {/* {items.map((item, i) => <WeatherComp key={i} temp={item.temp} data={item.data}/>)}
            {!spinner && <WeatherGraph data={items}/>} */}
        </div>
    )
    
}