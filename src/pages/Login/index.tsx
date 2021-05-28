import React, { useState, useEffect, useContext } from 'react'
import UserContext from '@/contexts/UserContext'
import { Link } from 'react-router-dom'
import { singleton } from '@/singleton'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const { currentUser, setUser } = useContext(UserContext)

  const handleLogin = () => {
    if (!username) {
      alert('请输入用户名')
      return
    }
    singleton.setGlobalState({
      currentUser: { username }
    })
    history.pushState({}, '', '/dashboard/vue/welcome')
  }

  useEffect(() => {
    setUsername(currentUser.username)
  }, [currentUser.username])

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title text-green-800">微前端-登录</h1>
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
            <button className="action-login" onClick={handleLogin}>
              登录
            </button>
            <span>
              <Link to="/register">注册</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
