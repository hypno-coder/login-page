import React, { useState } from 'react'
import axios from 'axios'
import './index.css'

const Login = () => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const authFetchHandler = async () => {
    const url = 'http://neurodoc.online/api/api/authenticate'
    axios.post(url, {
      "username": "testuser@tt.ru",
      "password": "TPipZn2h",
    }).then(resp => {
      console.log("Success ========>", resp)
    }).catch(error => {
      console.log("Success ========>", error);
    })
  }

  return (
    <form action="" className="postcard">
      <div className="form-row">
        <label htmlFor="name">имя</label>
        <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" id="name" required />
      </div>
      <div className="form-row">
        <label htmlFor="password">пароль</label>
        <input value={pass} onChange={(e) => setPass(e.currentTarget.value)} type="password" id="password" required />
      </div>
      <div className="form-row">
        <input onClick={authFetchHandler} type="submit" value="Войти" />
      </div>
    </form>
  )
}

export default Login
