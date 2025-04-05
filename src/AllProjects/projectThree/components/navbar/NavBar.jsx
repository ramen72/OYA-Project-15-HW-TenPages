import React, { Fragment, useState } from 'react';
import { Link } from 'react-router';
import { NavDataProjectThree } from './NavDataProjectThree';
import logo from '../../images/porto.png'
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
    const [active, setActive] = useState('Home');
    return (
        <Fragment>
            <div className='h-20 relative border-t-2'>
                <nav className='w-full bg-white font-poppins sticky top-20 z-[99999] border'>
                    <div className="max-w-containerThree mx-auto">
                        <div className="flex justify-between items-center py-6 ">
                            <Link to={"/businessConsulting"}>
                                <img src={logo} className='max-h-8'/>
                            </Link>
                            <div className='flex justify-end items-center gap-x-3'>
                                <ul className="flex justify-end items-center gap-x-3">
                                    {
                                        NavDataProjectThree.map((item,index)=>(
                                            <li key={index}><Link to={item.url} onClick={()=>setActive(item.navItem)} className={`text-sm capitalize text-threePrimaryColor ${active === item.navItem && "text-threeSecondaryColor"} py-4 px-3 font-semibold transition-all duration-200 hover:text-threeSecondaryColor`}>{item.navItem}</Link></li>
                                        ))
                                    }
                                    <IoSearch className='text-lg cursor-pointer ms-4'/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
};

export default NavBar;