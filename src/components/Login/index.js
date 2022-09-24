import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import authRequest from '../requests/authRequest'

const Login = () => {
  const [authInfo, setAuthInfo] = useState({
    name: "",
    pass: "",
  })
  const authFetchHandler = () => {
    authRequest(authInfo.name, authInfo.pass)
  }

  return (
    <form action="" className="postcard">
      <div className="form-row">
        <label htmlFor="name">имя</label>
        <input
          value={authInfo.name}
          onChange={(e) => setAuthInfo({ ...authInfo, name: e.target.value })}
          type="text"
          id="name"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="password">пароль</label>
        <input
          value={authInfo.pass}
          onChange={(e) => setAuthInfo({ ...authInfo, pass: e.target.value })}
          type="password"
          id="password"
          required
        />
      </div>
      <div className="form-row">
        <input onClick={authFetchHandler} type="submit" value="Войти" />
      </div>
      <ToastContainer autoClose={2000} />
    </form>
  )
}

export default Login
