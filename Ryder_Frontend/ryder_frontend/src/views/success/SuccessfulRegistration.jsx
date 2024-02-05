import React from 'react'
import { Link } from 'react-router-dom'

export default function SuccessfulRegistration() {
  return (
    <section className='flex justify-center'>
        <div className='flex justify-center bg-slate-200 w-1/2 my-20 py-10 rounded-lg'>
            <div className='w-2/3'>
                <h1 className='capitalize text-center font-bold text-xl text-green-700'>congratulations!!!</h1>
                <p className='text-center leading-tight text-slate-700 text-lg font-semibold my-5'>Your account has been successfully created</p>
                <div className='flex justify-center mt-16'>
                    <Link to={"/guest/login"} className='bg-slate-300 px-4 py-1 rounded text-slate-800 hover:text-amber-500 transform duration-300 ease-in-out font-semibold text-sm'>
                        Click to Login
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
