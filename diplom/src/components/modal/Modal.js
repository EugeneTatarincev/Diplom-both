import React, {useState, useContext, useEffect} from 'react'
import classNames from 'classnames'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'
import './Modal.scss'

export const Modal = ({isSeen, crossClicked, block}) => {
    const {request, error, clearError} = useHttp()
    const {token} = useContext(AuthContext)
    const [temp, setTemp] = useState({
        block,
        type: 'temp',
        dataIn: ''
    })
    const [hums, setHums] = useState({
        block,
        type: 'hums',
        dataIn: ''
    })
    const [lit, setLit] = useState({
        block,
        type: 'lit',
        dataIn: ''
    })

    const dataHandle = (e) => {
        const {value, name} = e.target
        if (name === 'temp') { setTemp({...temp, dataIn: value}) }
        else if (name === 'hums') { setHums({...hums, dataIn: value}) }
        else if (name === 'lit') { setLit({...lit, dataIn: value}) }
    }

    const handleClick = async (e) => {
        let data = {}
        const {name} = e.target
        if (name === 'temp') { data = temp } 
        else if (name === 'hums') { data = hums }
        else if (name === 'lit') { data = lit }

        try {
            const res = await request('http://localhost:3001/api/data/change', 'POST', {data}, {
                Authorization: `Bearer ${token}`
            })
            console.log(res)
            data.dataIn = ''
            clearError()
        } catch (e) {
            console.log(error)
        }
    }

    const modalClasses = classNames(
        "m-overlay",
        { "modal-seen" : isSeen }
    )

    // useEffect(() => {
    //     return () => {
    //         clearError()
    //     }
    // }, [error])

    return (
        <div className={ modalClasses }>
            <div className="m-window">
                <h2> Измененние параметров теплицы </h2>
                <button name="cross" id="cross" onClick={crossClicked}> &times; </button>
                <div>
                    <label> Температура </label>
                    <input type="number" onChange={dataHandle} name="temp" value={temp.dataIn} />
                    <button onClick={handleClick} name="temp" > Отправить </button>
                </div>

                <div>
                    <label> Влажность почвы </label>
                    <input type="number" onChange={dataHandle} name="hums" value={hums.dataIn} />
                    <button onClick={handleClick} name="hums" > Отправить </button>
                </div>

                <div>
                    <label> Освещенность </label>
                    <input type="number" onChange={dataHandle} name="lit" value={lit.dataIn} />
                    <button onClick={handleClick} name="lit" > Отправить </button>
                </div>

                {<p className="m-error"> {error} </p>}
            </div>
        </div>
    )
}