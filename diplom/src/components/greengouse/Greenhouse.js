import React, { useEffect, useState } from 'react'
import GreenService from '../../services/greenService'
import GreenComp from '../gree-comp/GreenComp'
import Loader from '../loader/Loader'
import Error from '../error/Error'
import './Greenhouse.scss'

export default function Greenhouse ({data}) {
    const types = {
        'temp': "Температура воздуха",
        'press': "Давление",
        'co2': "CO2",
        'huma': "Влажность воздуха",
        'hums': "Влажность почвы",
        'lit': "Освещение"
    }

    return (
        <div className="greenhouse">
            {/* {errorMessage}
            {spinner} */}
            <img src="background.png"/>
            { data.map( ({type, data}, i) => <GreenComp data={data} text={types[type]} itemId={"item-" + i}/>)}
        </div>
    )
}