import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  useEffect(() => {
    if (localStorage.getItem("username") !== null && localStorage.getItem("password") !== null) {
      navigate('/dashboard')
    }
  })

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const clickMasuk = () => {
    if (username && password !== null) {
      localStorage.setItem('username', JSON.stringify(username))
      localStorage.setItem('password', JSON.stringify(password))
      navigate('/dashboard')
    }else {
      alert('input username dan password dahlu, lalu klik login')
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <p>HALAMAN LOGIN</p>
      <p>
        <input type='text' placeholder='masukan username' onChange={changeUsername} />
        <input type='password' placeholder='masukan password' onChange={changePassword} />
        <button
          onClick={clickMasuk}
        >
          LOGIN
        </button>
      </p>
    </div>
  )
}

export default Login