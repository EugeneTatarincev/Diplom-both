import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('http://localhost:3001/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('http://localhost:3001/api/auth/login', 'POST', {...form})
      console.log(data)
      auth.login(data.token, data.userId, data.userName)
    } catch (e) {}
  }

  return (
    <section className="reg-back">
      <img src="background.png" className="back-img" />
      <div className="container reg-form">
        
        <div className="container text-center">
          <span className="card-title">Авторизация</span>
        </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Введите email"
              id="email"
              type="text"
              name="email"
              className="form-control"
              value={form.email}
              onChange={changeHandler}
            />
          
            <label htmlFor="email">Пароль</label>
            <input
              placeholder="Введите пароль"
              id="password"
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={changeHandler}
            />
          </div>

          <div className="container text-center">
            <button
              className="btn-reg"
              style={{marginRight: 10}}
              disabled={loading}
              onClick={loginHandler}
            >
              <b>Вход</b>
            </button>
            <button
              className="btn-reg"
              onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
      </div>
    </section>
    
  )
}