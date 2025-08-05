
import React from 'react'


function Footer() {


  return (
    <>
      <div className='px-3'>

        <div className='border-t border-gray-300 mt-5 sm:flex 
        sm:justify-between max-w-280 mx-auto py-5'>
          <section className='p-1'>
            <ul className='flex gap-3 text-sm text-gray-600'>
              <li>About</li>
              <li>Contect</li>
              <li>Privacy</li>
              <li>Policy</li>
            </ul>
          </section>
            
          <section className=' p-1'>
            <ul className='flex gap-3 text-sm text-gray-600'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Discord</li>
              <li>LinkedIn</li>
            </ul>
          </section>
        </div>
        
      </div>

      <section className='border border-gray-300 text-center text-gray-800 
        text-sm py-5 bg-gray-400 max-w-full'>

        <p>

          &copy; {new Date().getFullYear()} <span className="font-semibold "> THE BLOG </span>All rights reserved.

        </p>

      </section>
   </>

  )

}


export default Footer


