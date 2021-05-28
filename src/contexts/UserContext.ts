import React from 'react'

interface UserContextState {
  currentUser: any
  setUser: any
}
const UserContext = React.createContext<UserContextState>({
  currentUser: { username: '' },
  setUser: () => {}
})

export default UserContext
