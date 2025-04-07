import React, { useState } from 'react';
import { Link } from 'react-router';
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import NavBar from '../navbar/NavBar';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { NavDataProjectThree } from '../navbar/NavDataProjectThree';
import porto from '../../images/porto.png';

const Footer = () => {
    const [active, setActive] = useState('Home');
    return (
        <>
            <div className="bg-threeBgColor py-20 relative">
                <div className="max-w-containerThree mx-auto border-b pb-10">
                    <div className="flex justify-between">
                        <div>
                            <img src={porto} alt="logo" />
                            <p className='max-w-72 text-sm text-threeParaColor mt-8'>
                                Lorem ipsum dolor sit amet, conse adipiscing elit. Nunc viverra lorem ipsum erat orci, ac auctor.
                            </p>
                        </div>
                        <div>
                            <div>
                                <div className="flex justify-end items-center gap-x-4">
                                    <div className='flex justify-start items-center'>
                                        <a href="tel:123-456-7890" className='inline-block text-base text-threePrimaryColor font-semibold'><IoIosPhonePortrait className='inline-block text-3xl border p-1 mr-1 rounded-full bg-[#dde2ea] text-threeParaColor'/>(800) 123-4567</a>
                                        <a href="mailto:business@portotheme.com" className='inline-block ml-5 text-[12px]'><IoMailOutline className='inline-block text-3xl border p-1 mr-1 rounded-full bg-[#dde2ea] text-threeParaColor'/>business@portotheme.com</a>
                                        <span className='inline-block ml-5 text-[12px]'><SlCalender className='inline-block text-3xl border p-1 mr-1 rounded-full bg-[#dde2ea] text-threeParaColor'/>Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED</span>
                                    </div>
                                    <div className='flex justify-end items-center gap-x-4'>
                                        <LuInstagram className='inline-block text-4xl p-[10px] bg-[#dde2ea] rounded-full transition-all duration-300 hover:bg-[#7c4a3a] hover:text-white'/>
                                        <FaXTwitter className='inline-block text-4xl p-[10px] bg-[#dde2ea] rounded-full transition-all duration-300 hover:bg-[#1aa9e1] hover:text-white'/>
                                        <FaFacebookF className='inline-block text-4xl p-[10px] bg-[#dde2ea] rounded-full transition-all duration-300 hover:bg-threePrimaryColor hover:text-white'/>
                                    </div>
                                </div>
                            </div>
                            <ul className="flex justify-end items-center gap-x-3 mt-24">
                                {
                                    NavDataProjectThree.map((item,index)=>(
                                        <li key={index}><Link to={item.url} onClick={()=>setActive(item.navItem)} className={`text-sm capitalize text-threePrimaryColor ${active === item.navItem && "text-threeSecondaryColor"} py-4 px-3 font-bold transition-all duration-200 hover:text-threeSecondaryColor`}>{item.navItem}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center pt-14'>
                    <p className='text-[13px] text-threeParaColor text-center'>Porto Business Consulting. © 2025. All Rights Reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;