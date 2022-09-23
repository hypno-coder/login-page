import React, { useState } from 'react'
import './index.css'

const Login = () => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  return (
    <form action="" class="postcard">
      <div class="form-row">
        <label for="name">имя</label>
        <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" id="name" required />
      </div>
      <div class="form-row">
        <label for="password">пароль</label>
        <input value={pass} onChange={(e) => setPass(e.currentTarget.value)} type="password" id="password" required />
      </div>
      <div class="form-row">
        <input onClick={() => alert(`${name} / ${pass}`)} type="submit" value="Войти" />
      </div>
    </form>
  )
}

export default Login
