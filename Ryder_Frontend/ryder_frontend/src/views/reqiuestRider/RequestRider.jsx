import React from 'react'
import Arrow_Back_Icon from '../../assets/icons/arrow-back_icon.png';
import { Link } from 'react-router-dom';

export default function RequestRider() {
  return (
    <section className='flex justify-center w-full h-full'>
        <div className='bg-slate-100 w-1/2 h-full p-4 my-10'>
            <div className='flex justify-between border-b-2 border-b-black capitalize py-2'>
                <Link to={"/customerdashboard"} className='flex justify-center items-center'>
                    <img 
                        src={Arrow_Back_Icon}
                        alt='arrow-back-icon'
                        className='w-5 h-5'
                    />
                    <p className='text-sm font-semibold'>back</p>
                </Link>
                <h2 className='text-center font-bold text-lg'>request rider</h2>
                <p className='text-slate-200'>.</p>
            </div>
            <div className='my-4 mx-16'>
                <form>
                    <div className='flex flex-col justify-normal space-y-2 mt-3'>
                        <label className='block text-sm font-medium text-slate-800'>Pick up Location</label>
                        <input 
                            id='pickup'
                            name='pickup'
                            type='text'
                            autoComplete='on'
                            placeholder='Enter pick up location'
                            required
                            className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-800 text-sm sm:leading-6 bg-transparent'
                        />
                    </div>
                    <div className='flex flex-col justify-normal space-y-2 mt-3'>
                        <label className='block text-sm font-medium text-slate-800'>Drop off Location</label>
                        <input 
                            id='dropoff'
                            name='dropoff'
                            type='text'
                            autoComplete='on'
                            placeholder='Enter drop off location'
                            required
                            className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-800 text-sm sm:leading-6 bg-transparent'
                        />
                    </div>
                    <div className='flex flex-col justify-normal space-y-2 mt-3'>
                        <label className='block text-sm font-medium text-slate-800'>Drop off Phone Number</label>
                        <input 
                            id='phonenumber'
                            name='phonenumber'
                            type='text'
                            autoComplete='on'
                            placeholder='Enter drop off phone number'
                            required
                            className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-800 text-sm sm:leading-6 bg-transparent'
                        />
                    </div>
                    <div className='flex flex-col justify-normal space-y-2 mt-3'>
                        <label className='block text-sm font-medium text-slate-800'>Offer (NGN)</label>
                        <input 
                            id='phonenumber'
                            name='phonenumber'
                            type='text'
                            autoComplete='on'
                            placeholder='Enter offer amount'
                            required
                            className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-800 text-sm sm:leading-6 bg-transparent'
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            // disabled={buttonDisabled}
                            className='flex justify-center w-full my-5 px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded hover:bg-orange-700 transform duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                        >
                            Order Ride
                        {/* {!loading && <p>Login</p>}
                        {loading && 
                        <div className='flex flex-row justify-center space-x-2'>
                            <div>
                                <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                <div>
                                <span class="font-medium"> Processing... </span>
                            </div>
                        </div>
                        } */}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
