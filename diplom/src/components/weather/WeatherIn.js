import React, { Component } from 'react'
import WeatherComp from '../weather-comp/WeatherComp'
import Loader from '../loader/Loader'
import Error from '../error/Error'
import WeatherGraph from '../weather-comp/WeatherGraph'
import weatherService from '../../services/weatherService'


import './WeatherIn.css'

export default class WeatherIn extends Component{
    weatherObj = new weatherService()
    state = { 
        items: [],
        loading: true,
        error: false
    }
    data = [
        {name: 'Page', uv: 4000, pv: 2000},
        {name: 'Page', uv: 3000, pv: 2000},
        {name: 'Page', uv: 2000, pv: 2000},
        {name: 'Page', uv: 2700, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 1800, pv: 2000},
        {name: 'Page', uv: 3400, pv: 2000}
    ]
    

    updateWeather() {
        this.weatherObj.getWeather(this.props.city)
            .then(res => {
                this.setState({items: res, loading: false })
                console.log(res)
            }) 
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
                <WeatherGraph data={this.data}/>
            </div>
        )
    } 
}