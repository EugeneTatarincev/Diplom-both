import {citys, id} from '../api-config/apiConfig.json'

export default class weatherService {

    async getResource(lat, lon) {
        // const { lat, lon } = this.citys.Moscow
        const seven = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${id}`
        const result = await fetch(seven)
        
        if (!result.ok) {
            throw new Error(`Could not fetch ${seven}` +
            `, received ${result.status}`)
        }
        
        return await result.json()
    }

    async getWeather (city='Moscow') {
        const {lat, lon} = citys[city]
        const res = await this.getResource(lat, lon)
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