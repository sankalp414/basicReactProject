import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='bg-green-500 text-white'>I am the best</h1>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
