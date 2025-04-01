import React, { Fragment, useState } from 'react';
import logDark from "../../images/logo-dark.png"
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PageOneNavData } from './PageOneNavData';
import { Link } from 'react-router';

const NavBar = () => {
    const [active, setActive] = useState('Home');
    return (
        <Fragment>
            <div className='h-20 relative'>
                <nav className='w-full bg-navBG shadow-sm font-poppins fixed z-50'>
                    <div className="max-w-containerOne mx-auto">
                        <div className="flex justify-between items-center py-4">
                                <img src={logDark} alt="Logo" className='w-[123px]' />                            
                                <div className='flex justify-end'>
                                <ul className="flex justify-end items-center gap-x-8 me-8">
                                    {
                                        PageOneNavData.map((item,index)=>(
                                            <li key={index}><Link to={item.url} onClick={()=>setActive(item.navItem)} className={`text-sm capitalize ${active === item.navItem && "text-pOnePrimary"} font-bold transition-all duration-200 hover:text-pOnePrimary`}>{item.navItem}</Link></li>
                                        ))
                                    }
                                </ul>
                                    <div className="flex justify-center gap-x-8 px-8 border-x me-8">
                                        <FaFacebookF/>
                                        <FaXTwitter/>
                                        <FaLinkedinIn/>
                                    </div>
                                    <IoSearchSharp className='text-xl'/>
                                </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
};

export default NavBar;