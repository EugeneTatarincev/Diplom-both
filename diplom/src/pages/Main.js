import React, {Component} from 'react';
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

class Main extends Component {
  constructor() {
    super()

    this.state = {
      city: 'Moscow'
    }

    this.onSelect = this.onSelect.bind(this)
  }

  onSelect = (event) => {
    const { value } = event.target
    this.setState({
      city: value
    })
  }

  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Menu />

          <Route exact path='/' component={Home} />
          <Route path='/greenhouse' component={Greenhouse} />
          <Route path='/forecast' render={() => <WeatherIn city={this.state.city} />} />
          <Route path='/settings' render={() => <Settings onSelect={this.onSelect} city={this.state.city} />} />
          <Route path='/sensors' component={Sensors} />
          <Route path='/userAccount' component={UserAccount} />
        </>
      </Router>
    )
  }
}

export default Main;
