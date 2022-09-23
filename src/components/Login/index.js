import React from 'react'
import './index.css'

const Login = () => {

  return (
    <form action="" class="postcard">
      <div class="form-row">
        <label for="name">имя</label><input type="text" id="name" required />
      </div>
      <div class="form-row">
        <label for="password">пароль</label><input type="password" id="password" required />
      </div>
      <div class="form-row">
        <input type="submit" value="Войти" />
      </div>
    </form>
  )
}

export default Login
