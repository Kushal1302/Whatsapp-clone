import React from 'react'
import Messanger from './Components/Messanger'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AccountProvider from './context/AccountProvider'
const App = () => {
  return (
    
    <GoogleOAuthProvider clientId='503958675626-cprklduu5i2o53av8i9fb0g13d236dd9.apps.googleusercontent.com'>
      <AccountProvider>
      <Messanger/>
      </AccountProvider>
  </GoogleOAuthProvider>
    
  )
}

export default App
