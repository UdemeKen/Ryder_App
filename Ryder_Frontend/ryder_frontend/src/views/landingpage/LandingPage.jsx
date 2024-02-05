import React, { useState } from 'react'
import BackgroundImage from '../../assets/images/landingpage_photo.png';
import { Link } from 'react-router-dom';
import Icon_01 from '../../assets/icons/icon_01.png';
import Icon_02 from '../../assets/icons/icon_02.png';
import Icon_03 from '../../assets/icons/icon_03.png';
import Icon_04 from '../../assets/icons/icon_04.png';
import Icon_05 from '../../assets/icons/icon_05.png';
import Icon_06 from '../../assets/icons/icon_06.png';
import Footer_Logo_01 from '../../assets/icons/footer_logo_icon_01.png';
import Star_01 from '../../assets/icons/star_01.png';
import Frame_01 from '../../assets/images/Frame_01.png';
import Photo_01 from '../../assets/images/photo_01.png';
import FacebookIcon from '../../assets/icons/Facebook.png';
import TwitterIcon from '../../assets/icons/Twitter.png';
import LinkedinIcon from '../../assets/icons/Linkedin.png';
import GoogleIcon from '../../assets/icons/Google.png';
import Logo from '../../assets/images/Logo.png';
import { FormUp, FormDown, Menu, Close, User } from 'grommet-icons';
import { HashLink } from 'react-router-hash-link';
import Notification_Icon from '../../assets/icons/notification_icon.png';
import { useStateContext } from '../../context/ContextProvider';

export default function LandingPage() {

  const { userToken, setCurrentUser, setUserToken } = useStateContext();
  const [ dropDown, setDropDown ] = useState(false);
  const [ menu, setMenu ] = useState(false);

  const handleDropDown = () => {
      setDropDown(!dropDown);
  }
  const handleMenu = () => {
      setMenu(!menu);
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
            <li className='capitalize hover:font-semibold hover:text-orange-500 transform duration-300 ease-in-out' onClick={logout}>logout</li>
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
            <p>{username}</p>
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
      {/* <Outlet /> */}
    <section>
        <div className='relative' id={"home"}>
        <div className='absolute inset-0 bg-gradient-to-t from-black opacity-80 from-0%'></div>
            <img 
                src={BackgroundImage}
                alt='background_image'
                className='h-full w-full object-cover'
            />
            <div className='flex justify-center'>
                <div className='absolute top-3 sm:top-0 flex flex-col sm:inset-y-0 justify-center sm:space-y-5 text-center items-center sm:w-2/3'>
                    <h1 className='sm:text-5xl font-bold text-white leading-tight'>Fast, Reliable & Quality Dispatch Service</h1>
                    <div className='flex justify-normal space-x-2 text-sm sm:text-base capitalize text-white'>
                        <p>send.</p>
                        <p>track.</p>
                        <p>receive.</p>
                    </div>
                    <div className='flex justify-normal space-x-5'>
                        <div>
                            <Link to={"/guest/signup"} className='bg-orange-500 hover:bg-orange-800 transform duration-300 ease-in-out text-white px-3 sm:px-5 sm:py-2 rounded sm:rounded-md text-xs sm:text-base'>Signup as Customer</Link>
                        </div>
                        <div>
                            <Link to={""} className='bg-transparent hover:bg-orange-500 border-2 border-white hover:border-0 transform duration-100 ease-in-out text-white px-3 sm:px-5 sm:py-2 rounded-md text-xs sm:text-base'>Signup as Rider</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center' id={"service"}>
            <div className='w-4/5 mt-2 sm:my-12'>
                <h1 className='text-center capitalize text-2xl sm:text-3xl font-semibold text-orange-500'>top notch services</h1>
                <div className='flex justify-center my-5'>
                    <p className='text-center w-full sm:w-1/2 leading-tight'>Quickly integrate powerful solutions that gives you more flexibility and control over your parcel shipping and logistics processes.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-y-4 flex flex-col justify-normal space-y-2 sm:space-y-0 my-10'>
                    <div className='flex flex-col justify-center items-center space-y-5 py-10 border-2'>
                        <img 
                            src={Icon_01}
                            alt='icon_01'
                            className='h-10 w-10'
                        />
                        <h2 className='font-semibold'>Reliable and Secure</h2>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-5 py-10 border-2 sm:border-y-2'>
                        <img 
                            src={Icon_02}
                            alt='icon_01'
                            className='h-10 w-10'
                        />
                        <h2 className='font-semibold'>On-Time Delivery</h2>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-5 py-10 border-2'>
                        <img 
                            src={Icon_03}
                            alt='icon_01'
                            className='h-10 w-10'
                        />
                        <h2 className='font-semibold'>Track Your Shipemnt</h2>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-5 py-10 border-2'>
                        <img 
                            src={Icon_04}
                            alt='icon_01'
                            className='h-10 w-10'
                        />
                        <h2 className='font-semibold'>Great Customer Service</h2>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-5 py-10 border-2 sm:border-y-2'>
                        <img 
                            src={Icon_05}
                            alt='icon_01'
                            className='h-10 w-10'
                        />
                        <h2 className='font-semibold'>Nationwide Delivery</h2>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-5 py-10 border-2'>
                        <img 
                            src={Icon_06}
                            alt='icon_01'
                            className='h-10 w-10'
                        />
                        <h2 className='font-semibold'>Order Fulfillment</h2>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center bg-slate-100' id={"about"}>
            <div className='flex flex-col sm:flex-row justify-center w-4/5 my-10'>
                <div className='w-full'>
                    <img 
                        src={Frame_01}
                        alt='frame_01'
                        className='w-full h-full'
                    />
                </div>
                <div className='flex flex-col justify-center w-full'>
                    <div className='flex flex-col justify-normal space-y-5 sm:mx-16 mt-4 sm:mt-0'>
                        <h1 className='capitalize text-2xl font-bold text-orange-500 text-center sm:text-left'>quality riders and partners ready to deliver</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Convallis volutpat tortor ultricies tincidunt magna. 
                            Faucibus tempus pretium sed enim integer at aliquet a. 
                            Semper vel id lectus quis vitae, velit est. Orci mi sed dui viverra.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-center capitalize text-3xl font-semibold text-orange-500 my-10'>what our clients say about us</p>
            <div className='sm:grid sm:grid-cols-3 sm:gap-y-8 sm:gap-x-4 flex flex-col justify-normal space-y-2 w-4/5'>
                <div className='flex flex-col justify-center items-center space-y-5 py-5 border-2'>
                    <div className='w-1/6'>
                        <img 
                            src={Photo_01}
                            alt='photo_01'
                            className='w-full h-full'
                        />
                    </div>
                    <p className='mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. 
                        Amet, ac nec, nunc viverra massa blandit nec enim volutpat. 
                        Cursus pretium velit eget justo, turpis.</p>
                    <div className='flex justify-between w-full px-5'>
                        <p className='text-sm font-semibold'>Udeme Kendrick</p>
                        <div className='flex justify-normal'>
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5 py-5 border-2'>
                    <div className='w-1/6'>
                        <img 
                            src={Photo_01}
                            alt='photo_01'
                            className='w-full h-full'
                        />
                    </div>
                    <p className='mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. 
                        Amet, ac nec, nunc viverra massa blandit nec enim volutpat. 
                        Cursus pretium velit eget justo, turpis.</p>
                    <div className='flex justify-between w-full px-5'>
                        <p className='text-sm font-semibold'>Udeme Kendrick</p>
                        <div className='flex justify-normal'>
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5 py-5 border-2'>
                    <div className='w-1/6'>
                        <img 
                            src={Photo_01}
                            alt='photo_01'
                            className='w-full h-full'
                        />
                    </div>
                    <p className='mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. 
                        Amet, ac nec, nunc viverra massa blandit nec enim volutpat. 
                        Cursus pretium velit eget justo, turpis.</p>
                    <div className='flex justify-between w-full px-5'>
                        <p className='text-sm font-semibold'>Udeme Kendrick</p>
                        <div className='flex justify-normal'>
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5 py-5 border-2'>
                    <div className='w-1/6'>
                        <img 
                            src={Photo_01}
                            alt='photo_01'
                            className='w-full h-full'
                        />
                    </div>
                    <p className='mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. 
                        Amet, ac nec, nunc viverra massa blandit nec enim volutpat. 
                        Cursus pretium velit eget justo, turpis.</p>
                    <div className='flex justify-between w-full px-5'>
                        <p className='text-sm font-semibold'>Udeme Kendrick</p>
                        <div className='flex justify-normal'>
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5 py-5 border-2'>
                    <div className='w-1/6'>
                        <img 
                            src={Photo_01}
                            alt='photo_01'
                            className='w-full h-full'
                        />
                    </div>
                    <p className='mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. 
                        Amet, ac nec, nunc viverra massa blandit nec enim volutpat. 
                        Cursus pretium velit eget justo, turpis.</p>
                    <div className='flex justify-between w-full px-5'>
                        <p className='text-sm font-semibold'>Udeme Kendrick</p>
                        <div className='flex justify-normal'>
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5 py-5 border-2'>
                    <div className='w-1/6'>
                        <img 
                            src={Photo_01}
                            alt='photo_01'
                            className='w-full h-full'
                        />
                    </div>
                    <p className='mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. 
                        Amet, ac nec, nunc viverra massa blandit nec enim volutpat. 
                        Cursus pretium velit eget justo, turpis.</p>
                    <div className='flex justify-between w-full px-5'>
                        <p className='text-sm font-semibold'>Udeme Kendrick</p>
                        <div className='flex justify-normal'>
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                            <img 
                                src={Star_01}
                                alt='star_01'
                                className='w-5 h-5'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-2 bg-blue-950 py-8 mt-16' id={"footer"}>
            <div className='flex flex-col sm:flex-row justify-normal sm:w-3/4'>
                <div className='flex justify-center sm:justify-normal w-full'>
                    <Link to={"/"} className='flex justify-normal items-center space-x-2 w-1/3'>
                        <img 
                            src={Footer_Logo_01}
                            alt='photo_01'
                            className='w-10 h-10'
                        />
                        <h2 className='capitalize text-white text-xl font-bold'>ryder</h2>
                    </Link>
                </div>
                <div className='capitalize text-white font-semibold w-full'>
                    <ul className='flex justify-center items-center text-sm sm:text-base space-x-5 my-2'>
                        <li className='cursor-pointer'>home</li>
                        <li className='cursor-pointer'>about us</li>
                        <li className='cursor-pointer'>FAQ</li>
                        <li className='cursor-pointer'>contact us</li>
                    </ul>
                </div>
                <div className='flex justify-center sm:justify-end space-x-2 w-full py-2'>
                    <Link to={"/"}>
                        <img 
                            src={FacebookIcon}
                            alt='facebook_icon'
                            className='w-5 h-5'
                        />
                    </Link>
                    <Link to={"/"}>
                        <img 
                            src={TwitterIcon}
                            alt='twitter_icon'
                            className='w-5 h-5'
                        />
                    </Link>
                    <Link to={"/"}>
                        <img 
                            src={LinkedinIcon}
                            alt='linkedin_icon'
                            className='w-5 h-5'
                        />
                    </Link>
                    <Link to={"/"}>
                        <img 
                            src={GoogleIcon}
                            alt='google_icon'
                            className='w-5 h-5'
                        />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-normal items-center sm:items-start text-white text-sm sm:w-3/4 space-y-3 sm:space-y-0'>
                <div className='text-center sm:text-left w-3/4'>
                    <p>&copy; 2024 All rights reserved</p>
                </div>
                <div className='w-full'>
                    <ul className='flex justify-center items-center space-x-4'>
                        <Link to={"/"}>
                            <li>Privacy Policy</li>
                        </Link>
                        <Link to={"/"}>
                            <li>Terms and Conditions</li>
                        </Link>
                        <Link to={"/"}>
                            <li>Legal</li>
                        </Link>
                        <Link to={"/"}>
                            <li>Help</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex justify-center sm:justify-end w-3/4'>
                    <p>English Version</p>
                </div>
            </div>
        </div>
    </section>
    </section>
  )
}