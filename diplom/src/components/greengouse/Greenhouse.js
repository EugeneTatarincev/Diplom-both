import React, { Component } from 'react'
import GreenService from '../../services/greenService'
import GreenComp from '../gree-comp/GreenComp'
import Loader from '../loader/Loader'
import Error from '../error/Error'
import './Greenhouse.css'

export default class Greenhouse extends Component {
    greenObj = new GreenService()

    state = {
        data: [],
        loading: true,
        error: false
    }

    updateGreen() {
        this.greenObj.getResource()
            .then(res => {
                this.setState({data: res, loading: false })
                console.log(this.state.data)
            })
            .catch(err => this.setState({ loading: false,error: true }))
    }

    componentDidMount() {
        this.updateGreen()
    }

    render() {
        let {data, loading, error} = this.state
        const spinner = loading ? <Loader/> : null
        const errorMessage = error ? <Error /> : null
        return (
            <div className="greenhouse">
                {errorMessage}
                {spinner}
                <img src="greenForData.jpg"/>
                {/* {data.map((item, i) => <GreenComp key={i} temp={item.temp} press={item.press}/>)} */}
                <GreenComp data='20' text="Температура" buttonId ="first"/>
                <GreenComp data='10' text="Давление" buttonId ="second"/>
            </div>
        )
    }
}