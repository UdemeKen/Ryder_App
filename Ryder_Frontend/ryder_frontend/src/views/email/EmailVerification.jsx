import React from 'react'

export default function EmailVerification() {
  return (
    <section>
        <div className='text-center'>
            <h1 className='font-bold text-xl text-slate-700'>Verify your email</h1>
            <p className='leading-tight text-slate-700 my-5'>Hi there, use the link below to verify your email and start enjoying Ryder</p>
            <div>
                <button className='bg-orange-500 px-10 py-3 rounded-md text-white'>
                    Verify Email
                </button>
            </div>
        </div>
    </section>
  )
}
