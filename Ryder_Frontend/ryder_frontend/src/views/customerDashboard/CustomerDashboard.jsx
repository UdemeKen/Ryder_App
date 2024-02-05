import React from 'react'
import Overview_Icon from '../../assets/icons/overview_icon.png';
import ShoppingBag_Icon from '../../assets/icons/shoppingbag_icon.png';
import Message_Icon from '../../assets/icons/message_icon.png';
import EmailIcon from '../../assets/icons/email_icon.png';
import PhoneIcon from '../../assets/icons/phone_icon.png';
import LocationIcon from '../../assets/icons/location_icon.png';
import { Link, useNavigate } from 'react-router-dom';

export default function CustomerDashboard() {
    // const paymentData = JSON.parse(localStorage.getItem('PAYMENT_RESPONSE')) || [];

  return (
    <div className='bg-slate-100'>
        <section className='flex flex-col justify-center items-center'>
            <div className='flex justify-normal items-center space-x-2 w-5/6 my-6 capitalize'>
                <img 
                    src={Overview_Icon}
                    alt='overview-icon'
                    className='w-8 h-8'
                />
                <h2 className='text-2xl font-semibold'>overview</h2>
            </div>
            <div className='flex flex-col justify-normal space-y-5 mx-4 sm:space-y-0 sm:grid sm:grid-rows-3 sm:grid-flow-col sm:gap-4 sm:mb-16 sm:w-5/6'>
                <div className='shadow-md shadow-gray-400 bg-white rounded-2xl w-full'>
                    <div className='flex justify-between border-b-2 p-4'>
                        <h3 className='capitalize font-semibold text-sm sm:text-base'>total orders</h3>
                        <Link to={""} className='text-orange-500 font-semibold text-sm bg-orange-100 rounded px-2 sm:px-4 py-2'>
                            Make a Request
                        </Link>
                    </div>
                    <div className='flex justify-between items-center mx-5 my-5 sm:my-10'>
                        <div className='flex flex-col justify-normal space-y-2 capitalize'>
                            <h1 className='text-4xl font-bold'>200</h1>
                            <p className='font-semibold'>orders completed</p>
                        </div>
                        <div className='bg-slate-200 p-2 rounded-full'>
                            <img 
                                src={ShoppingBag_Icon}
                                alt='shoppingbag-icon'
                                className='w-8 h-8'
                            />
                        </div>
                    </div>
                </div>
                <div className='row-span-2 shadow-md shadow-gray-400 bg-white rounded-2xl w-full'>
                    <div className='flex justify-between border-b-2  p-4'>
                        <h3 className='capitalize font-semibold'>my orders</h3>
                        <Link to={""} className='text-orange-500 font-semibold rounded'>
                            See all
                        </Link>
                    </div>
                    <div className='flex flex-col justify-normal space-y-4 mx-4 py-5 sm:my-4'>
                        <div className='grid grid-cols-2 gap-1'>
                            <p className='capitalize font-semibold'>today, <span className='font-normal'>4:15PM</span></p>
                            <div className='flex justify-end text-right capitalize text-orange-500'>
                                <p className='bg-orange-100 rounded-xl px-3 sm:w-1/3'>pending</p>
                            </div>
                            <p className='capitalize font-semibold'>order no - <span className='font-normal'>1836897632</span></p>
                            <p className='text-right'>₦2,200.00</p>
                        </div>
                        <div className='grid grid-cols-2 gap-1'>
                            <p className='capitalize font-semibold'>today, <span className='font-normal'>4:15PM</span></p>
                            <div className='flex justify-end text-right capitalize text-orange-500'>
                                <p className='bg-orange-100 rounded-xl px-3 sm:w-1/3'>pending</p>
                            </div>
                            <p className='capitalize font-semibold'>order no - <span className='font-normal'>1836897632</span></p>
                            <p className='text-right'>₦2,200.00</p>
                        </div>
                        <div className='grid grid-cols-2 gap-1'>
                            <p className='capitalize font-semibold'>today, <span className='font-normal'>4:15PM</span></p>
                            <div className='flex justify-end text-right capitalize text-orange-500'>
                                <p className='bg-orange-100 rounded-xl px-3 sm:w-1/3'>pending</p>
                            </div>
                            <p className='capitalize font-semibold'>order no - <span className='font-normal'>1836897632</span></p>
                            <p className='text-right'>₦2,200.00</p>
                        </div>
                        <div className='grid grid-cols-2 gap-1'>
                            <p className='capitalize font-semibold'>today, <span className='font-normal'>4:15PM</span></p>
                            <div className='flex justify-end text-right capitalize text-orange-500'>
                                <p className='bg-orange-100 rounded-xl px-3 sm:w-1/3'>pending</p>
                            </div>
                            <p className='capitalize font-semibold'>order no - <span className='font-normal'>1836897632</span></p>
                            <p className='text-right'>₦2,200.00</p>
                        </div>
                        <div className='grid grid-cols-2 gap-1'>
                            <p className='capitalize font-semibold'>today, <span className='font-normal'>4:15PM</span></p>
                            <div className='flex justify-end text-right capitalize text-orange-500'>
                                <p className='bg-orange-100 rounded-xl px-3 sm:w-1/3 '>pending</p>
                            </div>
                            <p className='capitalize font-semibold'>order no - <span className='font-normal'>1836897632</span></p>
                            <p className='text-right'>₦2,200.00</p>
                        </div>
                    </div>
                </div>
                <div className='row-span-2 shadow-md shadow-gray-400 bg-white rounded-2xl w-full'>
                    <div className='flex justify-between border-b-2 p-4'>
                        <h3 className='capitalize font-semibold'>messages</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center py-10 sm:py-5 sm:mt-32'>
                        <img 
                            src={Message_Icon}
                            alt='overview-icon'
                            className='w-20 h-20'
                        />
                        <p className='capitalize text-xl font-semibold my-2'>no messages</p>
                        <p className='text-center'>You currently do not have any message</p>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-400 bg-white rounded-2xl'>
                    <div className='flex justify-between border-b-2 p-4'>
                        <h3 className='capitalize font-semibold'>contact us</h3>
                    </div>
                    <div className='px-4'>
                        <p className='text-2xl font-semibold mt-5'>Get in touch</p>
                        <p className='text-slate-300'>Any questions or remarks? Send us a message</p>
                        <div className='flex flex-col justify-normal space-y-2 my-8'>
                            <div className='flex justify-normal items-center space-x-2'>
                                <img 
                                    src={EmailIcon}
                                    alt='email-icon'
                                    className='w-5 h-5'
                                />
                                <p>udemekendrick@gmail.com</p>
                            </div>
                            <div className='flex justify-normal items-center space-x-2'>
                                <img 
                                    src={PhoneIcon}
                                    alt='phone-icon'
                                    className='w-5 h-5'
                                />
                                <p>08099776655, 07099664422</p>
                            </div>
                            <div className='flex justify-normal items-center space-x-2'>
                                <img 
                                    src={LocationIcon}
                                    alt='location-icon'
                                    className='w-5 h-5'
                                />
                                <p>25, Adetola street, Ikoyi, Lagos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
