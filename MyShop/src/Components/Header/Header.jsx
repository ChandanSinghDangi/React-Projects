

import React from 'react'
import AddCart from '../MainContent/AddCart'


function Header() {


 

  return (

    <>
   
      <div className='p-2 flex flex-col gap-1 bg-[#c7bebe]'>

        <h2 className=' p-1  font-semibold'>MyShop</h2>

        <div className='flex flex-col md:flex-row gap-y-2 md:gap-1.5'>
          <input type="text" className='border w-3/5 rounded-md bg-white px-2 py-0.5 caret-black' placeholder='Search'/>

          <div className='flex gap-2'>

            <button className='border border-[#c7bebe] px-4 rounded-lg cursor-pointer
             bg-white transition-transform duration-200 hover:scale-105 md:p-2 md:px-3'>Search</button>

            <button className='border border-[#c7bebe] px-5 rounded-lg cursor-pointer
             bg-white transition-transform duration-200 hover:scale-105 h-10'>Login</button>


          </div>

        </div>

      </div>

      



  
    </>

  )


}


export default Header












