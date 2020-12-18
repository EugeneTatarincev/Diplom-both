import React, {useState} from 'react';
import {Navbar} from '../components/navbar/Navbar'
import Menu from '../components/menu/Menu'
import WeatherIn from '../components/weather/WeatherIn'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Greenhouse from '../components/greengouse/Greenhouse'
import Home from '../components/home/Home'
import Settings from '../components/settings/Settings'
import Sensors from '../components/sensors/Sensors'
import {UserAccount} from '../components/userAccount/UserAccount'
import 'materialize-css'

function Main () {
  const [city, setCity] = useState('Moscow')

  const onSelectSettings = (event) => {
    const { value } = event.target
    setCity(value)
  }

  
  return (
    <Router>
      <>
        <Navbar />

        <div className="main-flex">
          <Menu />

          <div className='pages-content'>
            <Route exact path='/' component={Home} />
            <Route path='/greenhouse' component={Greenhouse} />
            <Route path='/forecast' render={() => <WeatherIn city={city} />} />
            <Route path='/settings' render={() => <Settings onSelect={onSelectSettings} city={city} />} />
            <Route path='/sensors' component={Sensors} />
            <Route path='/userAccount' component={UserAccount} />
          </div>
        </div>
      </>
    </Router>
  )
  
}

export default Main;
