import React from 'react'
import {months} from './Months'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend} from 'recharts'

export default function WeatherGraph ({ data }) {
    const dataLine = data.map(({data, temp}) => {
        let date = new Date (data * 1000)
        return {
            name: date.getDate() + " " + months[date.getMonth()],
            ...temp
        }
    })

    return (
        <LineChart
            width={1050}
            height={300}
            data={dataLine}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="утро" stroke="#F6DD00" />
            <Line type="monotone" dataKey="день" stroke="#387908" />
            <Line type="monotone" dataKey="ночь" stroke="#29428E" />
        </LineChart>
    )
}