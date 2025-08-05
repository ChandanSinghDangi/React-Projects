

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'



function ProtectedPage({children}) {

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        NProgress.start();

        if(!authStatus) {
            navigate('/login')
            NProgress.done();

        } else {
            setLoading(false);
            NProgress.done();
        }

        return () => {
            NProgress.done();
        };

    },[authStatus, navigate])

  return !loading ? <> {children} </> : <h2 className='text-center text-3xl font-semibold'>Loading...</h2>

}


export default ProtectedPage

























