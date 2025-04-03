import React, { Fragment, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';
import { NavDataProjectTwo } from './NavDataProjectTwo';

const NavBar = () => {
    const [active, setActive] = useState('Home');
    return (
        <Fragment>
            <div className='h-20 relative border-t-2'>
                <nav className='w-full bg-navBG font-poppins py-8 sticky top-20 z-[99999]'>
                    <ul className="flex justify-center items-center gap-x-8 me-8">
                        {
                            NavDataProjectTwo.map((item,index)=>(
                                <li key={index}><Link to={item.url} onClick={()=>setActive(item.navItem)} className={`text-sm uppercase ${active === item.navItem && "text-twoPrimaryColor"} py-4 px-3 font-bold transition-all duration-200 hover:text-twoPrimaryColor relative after:transition-all after:duration-200 after:content=[""] after:w-0 after:h-1 after:absolute after:left-0 after:top-0 after:bg-twoPrimaryColor hover:after:w-full`}>{item.navItem}</Link></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default NavBar;