import React, { useState, useContext } from 'react'
import UserContext from '@/contexts/UserContext'
import { Link, useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const { currentUser, setUser } = useContext(UserContext)
  const history = useHistory()
  const handleRegister = () => {
    setUser({
      username
    })
    history.push('/login')
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title text-red-800">微前端-注册</h1>
        <div className="login-form">
          <div className="login-form-group">
            <label>用户名：</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <label>密码：</label>
            <input type="password" />
          </div>
          <div className="login-form-action">
            <button className="action-login" onClick={handleRegister}>
              注册
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
