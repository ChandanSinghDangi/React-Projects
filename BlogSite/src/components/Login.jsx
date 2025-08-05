
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import Input from './Input'
import Button from './Button'


function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    // const authStatus = useSelector(state => state.auth.status);
    // console.log('this is data from Login page :: ',authStatus);
    

    const login = async(data) => {
        console.log('this is loginAccount :: ',data);
        
        const session = await authService.loginAccount(data);
        if (session) {
            const userData = await authService.getCurrentUser();
            if(userData) {

                dispatch(authLogin(userData));
                // console.log('this is userData from Login Page :: ',userData);
                // console.log('this is data form Login page :: ',authStatus);
                navigate("/dashboard");
            }
        }
    }

  return (

    <div className='border p-2 xl:w-110 xl:h-130 bg-black/60 backdrop-blur-md rounded-2xl border-zinc-600 absolute w-90 h-100 sm:w-110 sm:h-130'>
        <div className=' text-center mb-1 mt-5 sm:mt-15'>
            <h2 className='sm:text-3xl text-lg font-semibold text-gray-300 sm:mb-4'>Sign In your Account</h2>
            <h4 className='text-gray-300'>Don't have an Account? <Link to='/signup'>Sign Up</Link></h4>
        </div>

       <div className='mt-5'>
            <form onSubmit={handleSubmit(login)} className='flex flex-col sm:gap-1 px-6 '>

                <Input 
                    label='Email : '
                    placeholder='Email Address'
                    type='email'
                    className='bg-white backdrop-blur-md max-w-4/4 pl-5 text-xl 
                    placeholder:text-gray-700 rounded-md p-3 outline-none 
                    sm:mt-2 mb-3 caret-black text-black'
                    {...register('email', {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                />
                <Input 
                    label='Password : '
                    placeholder='Password'
                    type= 'password'
                    className='bg-white backdrop-blur-md w-4/4 pl-5 text-xl 
                    placeholder:text-gray-700 rounded-md p-3 outline-none mt-2 caret-black'
                    {...register('password', {
                        required: true
                    })}
                />

                <Button 
                    children='LOGIN'
                    type='submit'
                    className='border border-gray-700 
                    bg-zinc-500 p-2
                    text-black text-xl mt-6 cursor-pointer hover:bg-zinc-600 font-semibold'
                />

            </form>
        </div>

    </div>
  )

}


export default Login


