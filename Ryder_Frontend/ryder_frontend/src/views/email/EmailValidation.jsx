import React from 'react'
import { Link } from 'react-router-dom'

export default function EmailValidation() {
  return (
    <section>
        <div className='text-center'>
            <h1 className='font-bold text-xl text-slate-700'>Check your mail</h1>
            <p className='leading-tight text-slate-700 my-5'>We sent a password reset link to your email. Please click the link to reset your password</p>
            <p className='leading-tight text-slate-700 my-5'>Didn’t receive the email? <span className='text-orange-500'><button>Click to Resend link</button></span></p>
            <div>
                <Link to={"/guest/login"} className='bg-orange-500 px-10 py-3 rounded-md text-white'>
                    Back to Login
                </Link>
            </div>
        </div>
    </section>
  )
}
