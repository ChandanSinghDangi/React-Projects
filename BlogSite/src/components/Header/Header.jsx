
import React from'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import UserInfo from '../UserInfo';
// import UserInfo from '../UserInfo';



function Header() {

 
  const navigate = useNavigate();
    
  const authStatus = useSelector(state => state.auth.status);
  // console.log('this is authStatus from Header file :: ', authStatus);
  
  
  const navItems = [

    {
      name: 'Home',
      slug: '',
      active: authStatus
    },
    {
      name: 'Blog',
      slug: 'blog',
      active: authStatus
    },
    {
      name: 'NewSletter',
      slug: 'newsletter',
      active: authStatus
    }
  ]

  return (

    <nav className=' sm:flex justify-evenly items-center p-2  px-5 xl:font-semibold 
      xl:text-lg xl:justify-around'>

      <h2 className='p-2 xl:ml-0 h-13 text-center font-semibold xl:text-xl group relative'>BLOG
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black 
          transition-all duration-300 group-hover:w-full"></span>
      </h2>

      <ul className='grid grid-cols-4 text-xs sm:text-sm lg:text-md gap-2 
        border border-gray-300 p-2 rounded-lg '>

        {navItems.map((item)=> (

          <li key={item.slug} className=' flex justify-center items-end '>

            {item.active? <button onClick={() => navigate(item.slug)} className='group relative cursor-pointer'>

                { item.slug.toLowerCase() === 'newsletter' && <svg xmlns="http://www.w3.org/  2000/svg" 
                  className="w-4 h-4 m-auto " 
                  fill="none" viewBox="0 0 24 24" 
                  stroke="black" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                  d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                }
                {item.name}
                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black 
                   transition-all duration-300 group-hover:w-full"></span>
              </button> 
              : null
            }           
          </li>
        ))}

        <UserInfo />

      </ul>

    </nav>
  )
}

export default Header





























