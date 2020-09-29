import React, { Component } from 'react'
import WeatherComp from '../weather-comp/WeatherComp'
import Loader from '../loader/Loader'
import Error from '../error/Error'
import weatherService from '../../services/weatherService'


import './WeatherIn.css'

export default class WeatherIn extends Component{
    weatherObj = new weatherService()
    state = { 
        items: [],
        loading: true,
        error: false
    }
    

    updateWeather() {
        this.weatherObj.getWeather(this.props.city)
            .then(res => this.setState({items: res, loading: false })) 
            .catch(err => this.setState({ loading: false,error: true }))     
    }

    componentDidMount() {
        this.updateWeather()
    }

    render () {
        const {items, loading, error} = this.state
        const spinner = loading ? <Loader/> : null
        const errorMessage = error ? <Error /> : null
        return (
            <div className="weather">
                {errorMessage}
                {spinner}
                {items.map((item, i) => <WeatherComp key={i} temp={item.temp} data={item.data}/>)}
            </div>
        )
    } 
}