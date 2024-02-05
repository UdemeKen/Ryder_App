import React from 'react'
import { Outlet } from 'react-router-dom'
import Email_Icon from '../assets/icons/email-Icon.png';


export default function EmailLayout() {
  return (
    <section className='flex justify-center'>
        <div className='flex justify-center bg-slate-200 w-1/2 my-20 py-10 rounded-lg'>
            <div className='w-2/3'>
                <div className='flex justify-center w-full mb-5'>
                    <img 
                        src={Email_Icon}
                        alt='email-icon'
                        className='w-12 h-10'
                    />
                </div>
                <Outlet />
            </div>
        </div>
    </section>
  )
}
