import React from 'react'
import BackgroudImage from '../assets/images/backgroundimage_guestpage.png';
import RyderLogo from '../assets/images/Logo.png';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

export default function GuestLayout() {

  const { userToken } = useStateContext();

    if(userToken){
        return <Navigate to={"/default/customerdashboard"} />
    }

  return (
    <section className='flex flex-row justify-normal'>
        <div className='relative w-full h-full'>
        <div className='absolute inset-0 bg-gradient-to-t from-black opacity-80 from-0%'></div>
            <img 
                src={BackgroudImage}
                alt='background_image'
                className='h-screen w-full object-cover'
            />
            <div className='absolute bottom-10 w-full px-40 text-2xl font-bold text-white text-center'>
                Delivery service just got easier, elegant & superb with
                <span className='text-amber-600'> Ryder</span>
            </div>
        </div>
        <div className='flex justify-center w-1/2 h-full'>
            <div className='flex flex-col justify-center space-y-6 w-full mx-10 my-5'>
                <div className='flex flex-row justify-normal space-x-3'>
                    <img 
                        src={RyderLogo}
                        alt='background_image'
                        className='w-10 h-10'
                    />
                    <h1 className='capitalize text-2xl font-bold'>ryder</h1>
                </div>
                <Outlet />
            </div>
        </div>
    </section>
  )
}
