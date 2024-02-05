import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <section className='flex justify-center'>
        <div className='flex justify-center bg-slate-200 w-1/2 my-20 py-10 rounded-lg'>
            <div className='w-2/3'>
                <h1 className='capitalize text-center font-bold text-xl text-slate-700'>forgot password</h1>
                <p className='text-center leading-tight text-slate-700 my-5'>Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
                <form className='mx-4'>
                    <div className='flex flex-col justify-normal space-y-2 mt-3'>
                        <label className='block text-sm font-medium text-slate-800 capitalize'>email</label>
                        <input 
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='off'
                            placeholder='Enter your email'
                            required
                            className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 text-sm sm:leading-6 bg-transparent'
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='flex justify-center w-full my-5 px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded hover:bg-orange-700 transform duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
                <div className='flex justify-center mt-16'>
                    <Link to={"/guest/login"} className='bg-slate-300 px-4 py-1 rounded text-slate-800 font-semibold'>
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
