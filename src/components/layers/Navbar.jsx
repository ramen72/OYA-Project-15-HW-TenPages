import React, { useState } from 'react';
import { navItemData } from '../../data/NavItemData';


const Navbar = () => {
    const [active, setActive] = useState("Home")
    
    return (
        <>
            <div className="w-full z-50 bg-gray-300 py-3 shadow-md fixed">
                <div className="max-w-containerWidth mx-auto">
                    <ul className='flex justify-center items-center gap-x-3 my-1'>
                        {
                            navItemData.map((item,index)=>(
                                <li key={index}><a href={item.url} onClick={()=>setActive(item.itemText)} className={`text-base font-bold border border-[#284656] transition-all duration-200 hover:text-white ${active === item.itemText && "bg-[#284656] text-white"} hover:bg-[#284656] py-1 px-3 inline-block rounded-2xl`}>{item.itemText}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;