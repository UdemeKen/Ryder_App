import React from 'react'
import Filter_Icon from '../../assets/icons/filter_icon.png';

export default function RidersHistory() {

  return (
    <section className='flex justify-center w-full h-full'>
        <div className='bg-slate-100 w-1/2 h-full p-4 my-10'>
            <div className='flex justify-between border-b-2 border-b-black capitalize py-2'>
                <h2 className='text-center font-bold text-lg'>history</h2>
                <div className='flex justify-center items-center space-x-2 bg-slate-300 px-5 py-1 rounded-md'>
                    <p className='text-slate-800'>filter</p>
                    <img
                        src={Filter_Icon}
                        alt='filter-icon'
                        className='w-4 h-4'
                    />
                </div>
            </div>
            <div className='my-4 mx-16'>
            
            </div>
        </div>
    </section>
  )
}
