
import React, { useState, useEffect } from "react"
import authService from "./appwrite/auth"
import { useDispatch } from "react-redux";
import { login } from './store/authSlice'
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "./store/authSlice";
import LogoutButton from "./components/Header/LogoutButton";


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    authService.getCurrentUser().then((userData) => {

      if (userData) {
        dispatch(login(userData))
        // console.log('this is userData from App file :: ',userData);
        navigate('/dashboard')

      } else {
        dispatch(logout())
        // console.log('You are not yet loggedIn :: ');
        navigate('/')
      }
    }).finally(() => setLoading(false))
    
  }, [])


  return !loading ? <main className="bg-zinc-400 min-h-screen p-2 
    flex flex-col justify-center items-center gap-2 relative">


      <h2 className="text-5xl font-bold text-zinc-700 tracking-wide 
        transition hover:scale-105 duration-300 hover:text-zinc-600 mb-3">
        THE BLOG
      </h2>

      <button
          onClick={() => navigate('/signup') }
          className="flex items-center gap-2 px-2 py-1.5 text-sm 
          font-medium text-gray-700 bg-zinc-200 border border-gray-300 
          rounded-md shadow-sm hover:bg-zinc-100 hover:border-zinc-300 
          transition duration-200 hover:scale-103 hover:cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A7 7 0 0112 15a7 7 0 
              016.879 2.804M15 11a3 3 
              0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Signup
      </button>

      <div className="flex items-center gap-1 text-xs
       text-zinc-500 group transition duration-300 
       hover:scale-105 hover:text-black
       hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
        <span className="w-20 h-px bg-zinc-500 transition-all 
        duration-300 group-hover:bg-black 
        group-hover:shadow-[0_0_8px_rgba(255,255,255,0.7)] " />
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-current transition duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          x<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        
        <span className="w-20 h-px bg-zinc-500 transition-all 
         duration-300 group-hover:bg-black 
         group-hover:shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
      </div>

      <button
        onClick={() => navigate('/login') }
        className="flex items-center gap-2 px-3 py-1.5 text-sm 
        font-medium text-gray-700 bg-zinc-200 border border-gray-300 
        rounded-md shadow-sm hover:bg-zinc-100 hover:border-zinc-300 
        transition duration-200 hover:scale-103 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c-1.105 0-2 .895-2 2v2a2 2 
          0 104 0v-2c0-1.105-.895-2-2-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 11V7a5 5 0 00-10 0v4"
        />
        <rect
          x="5"
          y="11"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        </svg>
        Login
      </button>

      <Outlet />

    {/* <LogoutButton /> */}

  </main> : null

}
  
export default App
























