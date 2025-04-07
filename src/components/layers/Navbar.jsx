import React, { useState } from 'react';
import { navItemData } from '../../data/NavItemData';
import { Link } from 'react-router';
import { useLocation } from 'react-router'


const Navbar = () => {
    let location = useLocation()
    console.log(location)
    
    return (
        <>
            <div className="h-[66px]">
                <div className="w-full z-50 bg-gray-300 py-3 shadow-md fixed">
                    <div className="max-w-containerWidth mx-auto">
                        <ul className='flex justify-center items-center gap-x-3 my-1'>
                            {
                                navItemData.map((item,index)=>(
                                    // <li key={index}><a href={item.url} onClick={()=>setActive(item.itemText)} className={`text-base font-bold border border-[#284656] transition-all duration-200 hover:text-white ${active === item.itemText && "bg-[#284656] text-white"} hover:bg-[#284656] py-1 px-3 inline-block rounded-2xl`}>{item.itemText}</a></li>
                                    <li key={index}>
                                        <Link to={item.url} className={`text-base font-bold border border-[#284656] transition-all duration-200 hover:text-white ${location.pathname === item.url ? "bg-[#284656] text-white" : ""} hover:bg-[#284656] py-1 px-3 inline-block rounded-2xl`}>{item.itemText}</Link>
                                        </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;