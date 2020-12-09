import {citys, id} from '../api-config/apiConfig.json'

export default class weatherService {

    async getResource(lat, lon) {
        
        const seven = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${id}`
        const result = await fetch(seven)
        
        if (!result.ok) {
            throw new Error(`Could not fetch ${seven}` +
            `, received ${result.status}`)
        }
        
        return await result.json()
    }

    async getWeather (city) {
        const {lat, lon} = citys[city]
        const res = await this.getResource(lat, lon)
        res.hourly.forEach(item => {
            let date = new Date (item.dt * 1000)
            console.log(date.getDate() + ' ' + date.getHours())
        })
        return res.daily.map(item => { return { data: item.dt, temp: this._transformWeather(item.temp)} })
    }    

    _transformWeather ({morn, day, night}) {
        return {
            morn,
            day,
            night
        }
    }
}