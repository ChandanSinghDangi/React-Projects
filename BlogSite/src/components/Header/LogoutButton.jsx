
import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';


function LogoutButton({className}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const handleDelete = async () => {

   await authService.logoutAccount().then(() => {
    
    dispatch(logout());
    navigate('/')

   });

  }

  return (

    <div>

      <button onClick={handleDelete} className={className}>
        Logout
      </button>
      
    </div>

  )

}

export default LogoutButton