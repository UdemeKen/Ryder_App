import React, { useState } from 'react'
import { FormView, FormViewHide } from 'grommet-icons';

export default function ResetPassword() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

  return (
    <section>
        <div className=''>
            <h3 className='text-lg font-bold text-slate-600'>Reset Password</h3>
            <form>
                <div className='flex flex-col justify-normal space-y-2 mt-3 relative'>
                    <label className='block text-sm font-medium text-slate-800 capitalize'>new password</label>
                    <input 
                        id='new password'
                        name='new password'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete='off'
                        placeholder='Enter your password'
                        required
                        className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-800 text-sm sm:leading-6'
                    />
                    <span className='absolute flex inset-y-0 top-7 right-0 pr-2'>
                        {showPassword ? <FormView onClick={handleShowPassword} /> : <FormViewHide onClick={handleShowPassword} />}
                    </span>
                </div>
                <div className='flex flex-col justify-normal space-y-2 mt-3 relative'>
                    <label className='block text-sm font-medium text-slate-800 capitalize'>confirm password</label>
                    <input 
                        id='confirm password'
                        name='confirm password'
                        type={showConfirmPassword ? 'text' : 'password'}
                        autoComplete='off'
                        placeholder='Enter your password'
                        required
                        className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-800 text-sm sm:leading-6'
                    />
                    <span className='absolute flex inset-y-0 top-7 right-0 pr-2'>
                        {showConfirmPassword ? <FormView onClick={handleShowConfirmPassword} /> : <FormViewHide onClick={handleShowConfirmPassword} />}
                    </span>
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
        </div>
    </section>
  )
}
