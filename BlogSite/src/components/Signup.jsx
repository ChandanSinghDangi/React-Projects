

import React from 'react'
import Input from './Input'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from './Button'


function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();


    const SignupAccount = async (data) => {

        try {
            console.log('this is data : ',data);
            
            const userData = await authService.createAccount(data);
            console.log('this is createAccount data in Signup page : ',userData);
            console.log('this is createAccount data : ');
            
            if(userData) {
                const userInfo = await authService.getCurrentUser();
                if(userInfo) {
                    console.log('this is userInfo : ',userInfo);
                    
                    dispatch(login(userInfo));
                    navigate('/dashboard')
                }
            } 
        } catch (e) {
            console.log('this is signup error :',e );
        }
    }

  return (

    <div className='border p-2  xl:w-110 xl:h-130 bg-black/60 backdrop-blur-md 
    rounded-2xl border-zinc-600 absolute w-90 h-120 sm:w-110 sm:h-130'>
        <div className=' text-center mt-5'>
            <h2 className='sm:text-3xl text-lg font-semibold text-gray-300 sm:mb-2'>Sign Up to create Account</h2>
            <h4 className='text-gray-300'>Already have an account? <Link to='/login'>Sign In</Link></h4>
        </div>

        <div className='mt-4 p-1'>
            <form onSubmit={handleSubmit(SignupAccount)} className='flex flex-col gap-2 px-6 '>

                <Input 
                    label="Username : "
                    placeholder='Username'
                    name='username '
                    type='name'
                    className='bg-white backdrop-blur-md w-4/4 pl-5 text-xl 
                    placeholder:text-gray-700 rounded-md p-3 outline-none 
                    sm:mt-2 mb-1 caret-white text-black'
                    {...register('name', {
                        required: true
                    })}
                />
                <Input 
                    label='Email : '
                    placeholder='Email Address'
                    type='email'
                    className='bg-white backdrop-blur-md w-4/4 pl-5 text-xl 
                    placeholder:text-gray-700 rounded-md p-3 outline-none 
                    sm:mt-2 mb-1 caret-white text-black'
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
                    placeholder='Passoword'
                    type= 'password'
                    className='bg-white backdrop-blur-md w-4/4 pl-5 text-xl 
                    placeholder:text-gray-700 rounded-md p-3 outline-none 
                    sm:mt-2 caret-white text-black'
                    {...register('password', {
                        required: true
                    })}
                />
                <p className="text-[10px] text-white/70">
                    *Minimum password should be 8 characters
                </p>



                <Button 
                    type='submit'
                    children='SIGN UP'
                    className='border border-gray-700 
                    bg-zinc-500 p-2
                    text-black text-xl cursor-pointer hover:bg-zinc-600'
                />

            </form>
        </div>

    </div>
  )
}

export default Signup








