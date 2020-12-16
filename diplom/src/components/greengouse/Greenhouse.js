import React, { useEffect, useState } from 'react'
import GreenService from '../../services/greenService'
import GreenComp from '../gree-comp/GreenComp'
import Loader from '../loader/Loader'
import Error from '../error/Error'
import './Greenhouse.scss'

export default function Greenhouse () {
    // const greenObj = new GreenService()


    // const updateGreen = () => {
    //     greenObj.getResource()
    //         .then(res => {
    //             this.setState({data: res, loading: false })
    //         })
    //         .catch(err => this.setState({ loading: false, error: true }))
    // }

    // useEffect(() => {
    //     updateGreen()
    // }, [updateGreen]) 

    // const spinner = loading ? <Loader/> : null
    // const errorMessage = error ? <Error /> : null


    return (
        <div className="greenhouse">
            {/* {errorMessage}
            {spinner} */}
            <img src="background.png"/>
            {/* {data.map((item, i) => <GreenComp key={i} temp={item.temp} press={item.press}/>)} */}
            <GreenComp data='0' text="CO2" itemId="item-one"/>
            <GreenComp data='0' text="Влажность почвы" itemId="item-two" />
            <GreenComp data='0' text="Освещение" itemId="item-three" />
            <GreenComp data='0' text="Влажность воздуха" itemId="item-four" />
            <GreenComp data='0' text="Температура воздуха" itemId="item-five" />
            <GreenComp data='0' text="Давление" itemId="item-six" />
        </div>
    )
}