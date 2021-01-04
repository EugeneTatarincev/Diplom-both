import React, { useState, useContext, useEffect} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'
import {useMessage} from '../../hooks/message.hook'
import './Settings.css'
import { Modal } from '../modal/Modal'

export default function Settings ({onSelect, city, block}) {
    const [data, setData] = useState('')
    const [isSeen, setSeen] = useState(false)
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {request, error, clearError} = useHttp()

    function changeData(event) {
        const { value } = event.target
        setData(value)
    }

    function modalAppear () {
        setSeen(true)
    }

    function crossClicked () {
        setSeen(false)
    }

    async function sendData (e) {
        if (e.keyCode === 13) {
            try {
                const res = await request('http://localhost:3001/api/data/generate', 'POST', {data}, {
                  Authorization: `Bearer ${auth.token}`
                })
                console.log(res)
                setData('')
              } catch (e) {
                  console.log(e.message)
              }
        }
    }

    useEffect(() => {
        message(error)
        clearError()
      }, [error, message, clearError])

    return (
        <>
        <div className="settings">
            <label htmlFor="city-select"> Выберите город </label>
            <div className="select" name='city-select'>
                <select onChange={onSelect} value={city}> 
                    <option value="" disabled>Выберите город</option>
                    <option value="Moscow">Москва</option>
                    <option value="Voronezh">Воронеж</option>
                    <option value="Piter">Питер</option>
                </select>
            </div>

            <div className="block-set">
                <label htmlFor="block-id">Айди блока управления</label>
                <input className="block-id form-control" type="text" name="block-id" value={data} onChange={changeData} onKeyDown={sendData}/>
                {/* <button className="btn btn-outline-secondary" onClick={sendData}> Send </button> */}
                <button className="m-toggle" onClick={modalAppear}> Изменить параметры теплицы </button>
            </div>
        </div>
        <Modal isSeen={isSeen} crossClicked={crossClicked} block={block}/>
        </>
    )
}