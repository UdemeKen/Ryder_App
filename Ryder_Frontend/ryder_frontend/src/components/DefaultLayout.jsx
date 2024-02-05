import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/Logo.png';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { FormUp, FormDown, Menu, Close, User } from 'grommet-icons';
import { HashLink } from 'react-router-hash-link';
import { useStateContext } from '../context/ContextProvider';
import Notification_Icon from '../assets/icons/notification_icon.png';

export default function DefaultLayout() {
  const userDetailsUrl = "/users/me";
  const location = useLocation();

  const { userToken } = useStateContext();
  const [ dropDown, setDropDown ] = useState(false);
  const [ menu, setMenu ] = useState(false);

  const handleDropDown = () => {
      setDropDown(!dropDown);
  }
  const handleMenu = () => {
      setMenu(!menu);
  }

  if(!userToken){
    return <Navigate to={"/guest/login"} />
  }

  const getUserDetails = async () => {
    try{
      const response = await axiosClient.get(userDetailsUrl);
      console.log(response.data.data.user);
      setCurrentUser(response.data.data.user);
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <section>
      <div className={`flex justify-between sm:justify-normal px-2 sm:px-10 py-2 sm:py-2 bg-slate-200 sticky top-0 z-10`}>
        <div className='sm:w-full'>
          <Link to={"/"} className='flex justify-normal space-x-3 cursor-pointer w-1/3'>
            <img 
              src={Logo}
              alt='logo'
              className='w-8 sm:w-10 h-8 sm:h-10'
            />
            <h1 className='capitalize text-xl sm:text-2xl font-bold'>ryder</h1>
          </Link>
        </div>
        {location.pathname === "/" && 
        <div className='w-full sm:block hidden'>
          <ul className='flex justify-center space-x-5 py-2 text-slate-700'>
            <li className={`capitalize hover:font-semibold ${location.pathname === "/" ? "text-orange-500 font-semibold" : ""} hover:text-orange-500 transform duration-300 ease-in-out`}><HashLink to={"#home"} smooth>home</HashLink></li>
            <li className='capitalize hover:font-semibold hover:text-orange-500 transform duration-300 ease-in-out'><HashLink to={"#service"} smooth>services</HashLink></li>
            <li className='capitalize hover:font-semibold hover:text-orange-500 transform duration-300 ease-in-out'><HashLink to={"#about"} smooth>about</HashLink></li>
            <li className='capitalize hover:font-semibold hover:text-orange-500 transform duration-300 ease-in-out'><HashLink to={"#footer"} smooth>contact us</HashLink></li>
          </ul>
        </div>
        }
        {location.pathname === "/customerdashboard" && 
        <div className='w-full sm:block hidden'>
          <ul className='flex justify-center space-x-5 py-2 text-slate-700'>
            <li className='capitalize hover:font-semibold hover:text-orange-500 transform duration-300 ease-in-out'><Link to={"/requestrider"} smooth>request rider</Link></li>
            <li className='capitalize hover:font-semibold hover:text-orange-500 transform duration-300 ease-in-out'><Link to={""} smooth>payment</Link></li>
            <li className='capitalize hover:font-semibold hover:text-orange-500 transform duration-300 ease-in-out'><Link to={""} smooth>logout</Link></li>
          </ul>
        </div>
        }
        {userToken ? (
        <div className='sm:flex sm:justify-end sm:items-center space-x-5 w-full py-2 hidden sm:block'>
          <Link to={"/guest/login"} className='capitalize hover:font-semibold text-slate-700 hover:text-orange-500 transform duration-300 ease-in-out'>
            <img 
              src={Notification_Icon}
              alt='notification_icon'
              className='w-3 sm:w-5 h-3 sm:h-5'
            />
          </Link>
          <div className='flex justify-normal items-center space-x-2 capitalize font-semibold'>
            <div className='flex justify-center border-2 border-slate-500 sm:w-8 sm:h-8 rounded-full'>
              <User />
            </div>
            <p>udeme kendrick</p>
          </div>
        </div>
        ) : (
        <div className='sm:flex sm:justify-end space-x-5 w-full py-2 hidden sm:block'>
          <Link to={"/guest/login"} className='capitalize hover:font-semibold text-slate-700 hover:text-orange-500 transform duration-300 ease-in-out'>login</Link>
        </div>
        )}
        <div className='cursor-pointer sm:hidden block'>
          {!menu ? <Menu onClick={handleMenu}/> : <Close onClick={handleMenu}/>}
        </div>
      </div>
      {/* Mobile Menu */}
      {menu && 
        <div className='sm:hidden block flex justify-center'>
          <div className='flex flex-col justify-normal space-y-4 capitalize bg-transparent w-full font-semibold pb-2 px-4'>
            <div>
              <Link to={""} className='hover:text-orange-500'>home</Link>
            </div>
            <div>
              <Link to={""} className='hover:text-orange-500'>about</Link>
            </div>
            <div>
              <Link to={""} className='hover:text-orange-500'>services</Link>
            </div>
            <div>
              <Link to={""} className='hover:text-orange-500'>contact us</Link>
            </div>
          </div>
        </div>
      }
      <Outlet />
    </section>
  )
}
