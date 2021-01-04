import React, {useCallback, useContext, useEffect, useState} from 'react'
import SensItem from '../sens-item/SensItem'
import {AuthContext} from '../../context/AuthContext'
import {useHttp} from '../../hooks/http.hook'
import './Sensors.css'

export default function Sensors({onSelect, data, block}) {
    const [blocks, setBlocks] = useState([])
    const {request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchBlocks = useCallback(async () => {
        try{
            const fetched = await request('http://localhost:3001/api/data/block', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setBlocks(fetched)
        }
        catch (e) {}
    },[token, request])

    useEffect(() => {
        fetchBlocks()
      }, [fetchBlocks])

    return (
        <div className="sensors-mutual">
            <div className="select">
                <select onChange={onSelect} value={block}> 
                    <option value="" disabled>Выберите блок</option>
                    {blocks.map(({id_cb}) => <option value={ id_cb } key={id_cb}> { id_cb } </option> )}
                </select>
            </div>

            <div className='sensors-table'>
                <table>
                    <thead>
                        <tr>
                            <td> Название </td>
                            <td> Тип </td>
                            <td> Данные </td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => <SensItem name={item.name} type={item.type} data={item.data} key={item.type} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}