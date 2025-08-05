
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import LogoutButton from './Header/LogoutButton';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
function UserInfo() {

    const userData = useSelector((state) => state.auth.userData);
    // console.log('this is userData from userInfo :: ',userData);
    const dropdownRef = useRef(null);
    // console.log('this is userData name from userInfo :: ',userData.name);

    const [showList, setShowList] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        setShowList(preShow => !preShow);
    } 

    useEffect(() => {

        function handleClickOutside(e) {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowList(false)
            }
        }

        document.addEventListener('mousedown',handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        }

    }, [])

    return ( 

        <div className='group relative flex items-center border border-gray-200 
        rounded-md bg-gray-100 text-sm justify-center ml-4 p-1'
        ref={dropdownRef}
        >

            <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 496 512" 
            className="text-xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path 
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
            
            <button className='cursor-pointer px-1 ' type='button' onClick={handleSubmit}>
                {userData?.name || 'No Name'}
            </button>

            {showList && 
            <ul className=' py-2 flex flex-col gap-y-2 items-center 
                absolute top-9 right-2 sm:top-10 sm:left-5 xl:top-12 w-25 z-10 bg-gray-200 
                border border-gray-200 rounded-md'>
                <li className="px-2 py-2 bg-white rounded-lg 
                shadow-sm hover:shadow-md hover:scale-105 
                transform transition duration-200 cursor-pointer" onClick={() => navigate('my-profile')}>MyProfile</li>
                <li className="px-2 py-2 bg-white rounded-lg 
                shadow-sm hover:shadow-md hover:scale-105 
                transform transition duration-200 cursor-pointer" onClick={() => navigate('my-posts')}>MyPosts</li>
                <li className="px-2 py-2 bg-white rounded-lg 
                shadow-sm hover:shadow-md hover:scale-105 
                transform transition duration-200 cursor-pointer">
                    {
                        <LogoutButton />
                    }
                </li>
            </ul>
            }
        </div>
  )

}


export default UserInfo















