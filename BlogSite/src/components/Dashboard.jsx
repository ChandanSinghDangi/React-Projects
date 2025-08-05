
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import { useSelector } from 'react-redux'
import Footer from './Footer/Footer'


function Dashboard() {

  // const userData = useSelector(state => state.auth.status);
  // console.log('this is userData : ',userData);
  

  return (

    <div className=''>

      <header className=''>
        
        <Header />

      </header>

      <main>

        <Outlet />

      </main>

      <footer className='mt-5'>

        <Footer />
        
      </footer>
      
    </div>

  )

}


export default Dashboard




