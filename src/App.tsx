import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import UserContext from '@/contexts/UserContext'
import './global.css'

const App: React.FC = () => {
  const [user, setUser] = useState({ username: '' })
  return (
    <UserContext.Provider value={{ currentUser: user, setUser }}>
      <BrowserRouter
        basename={window.__POWERED_BY_QIANKUN__ ? '/passport' : '/'}
      >
        <Switch>
          <Route exact path="/">
            <Redirect
              to={{
                pathname: '/login'
              }}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
