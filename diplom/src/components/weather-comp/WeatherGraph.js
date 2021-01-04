import React from 'react'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend} from 'recharts'

export default function WeatherGraph ({ data }) {
    return (
        <LineChart
            width={1050}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" activeDot={{r: 8}} />
            <Line type="monotone" dataKey="pv" stroke="#387908" />
        </LineChart>
    )
}