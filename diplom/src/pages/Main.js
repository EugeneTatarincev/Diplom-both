import React, {useState, useCallback, useContext} from 'react';
import {Navbar} from '../components/navbar/Navbar'
import Menu from '../components/menu/Menu'
import WeatherIn from '../components/weather/WeatherIn'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Greenhouse from '../components/greengouse/Greenhouse'
import Home from '../components/home/Home'
import Settings from '../components/settings/Settings'
import Sensors from '../components/sensors/Sensors'
import {UserAccount} from '../components/userAccount/UserAccount'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import 'materialize-css'

function Main () {
  const {request} = useHttp()
  const {token} = useContext(AuthContext)
  const [city, setCity] = useState('Moscow')
  const [data, setData] = useState([])
  const [block, setBlock] = useState('')

  const onSelectSettings = (event) => {
    const { value } = event.target
    setCity(value)
  }

  const onSelectSensors = useCallback(async (event) => {
    try{
        const {value} = event.target
        const fetched = await request('http://localhost:3001/api/data', 'POST', {data: value}, {
            Authorization: `Bearer ${token}`
        })
        console.log(fetched)
        setData([...data, ...fetched])
        setBlock(value)
    }
    catch (e) {}
  },[token, request])

  
  return (
    <Router>
      <>
        <Navbar />

        <div className="main-flex">
          <Menu />

          <div className='pages-content'>
            <Route exact path='/' component={Home} />
            <Route path='/greenhouse' component={() => <Greenhouse data={data} /> } />
            <Route path='/forecast' render={() => <WeatherIn city={city} />} />
            <Route path='/settings' render={() => <Settings onSelect={onSelectSettings} city={city} block={block} />} />
            <Route path='/sensors' component={() => <Sensors onSelect={onSelectSensors} data={data} block={block} /> } />
            <Route path='/userAccount' component={() => <UserAccount block={block} /> } />
          </div>
        </div>
      </>
    </Router>
  )
  
}

export default Main;
