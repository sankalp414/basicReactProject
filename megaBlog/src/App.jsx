

import { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import { Footer, Header } from './components'

function App() {
 const [loading,setLoading]= useState(true);
 const dispatch = useDispatch()

 useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout({logout}))
    }
  })
  .finally(()=>setLoading(false))
 },[])



  return !loading?(
      <div className='min-h-screen flex flex-group flex-wrap content-between bg-grey-400 '>
        <div className='w-full h-screen'>
          <Header/>
          <main>
            {/* <Outlet/> */}
          </main>
          <Footer/>
        </div>
      </div>
  ):null
}

export default App
