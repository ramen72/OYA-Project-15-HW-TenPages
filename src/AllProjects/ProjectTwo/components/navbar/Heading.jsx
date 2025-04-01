import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import logoNav from '../../images/logoNav.png'
import { Link } from 'react-router';

const Heading = () => {
    return (
        <>
            <div className='bg-[#079cf4]'>
                <div className="max-w-containerTwo mx-auto">
                    <div className="flex justify-between items-center py-5 text-white">
                        <div className='uppercase text-[11px]'>
                            <Link to={"/projectTwo"} className='inline-block'><IoIosArrowForward className='inline-block'/>about us</Link>
                            <Link to={"/projectTwo"} className='inline-block ml-5'><IoIosArrowForward className='inline-block'/>about us</Link>
                        </div>
                        <div className="flex justify-center gap-x-8 px-8 me-8">
                            <FaFacebookF/>
                            <FaXTwitter/>
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-containerTwo mx-auto py-11">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-x-6'>
                        <FaRegClock className='text-4xl text-[#079cf4]'/>
                        <div className='text-paraColor font-semibold text-sm'>
                            <p>MON - FRI: 10:00 - 18:00</p>
                            <p>SAT - SUN: 10:00 - 14:00</p>
                        </div>
                    </div>
                    <Link to={"/projectTwo"}>
                        <img src={logoNav} alt="logoNav" className='max-w-24' />
                    </Link>
                    <div className='flex items-center gap-x-6'>
                        <div className='text-paraColor font-semibold text-sm'>
                            <p>(123) 456-7890</p>
                            <p>(123) 456-7891</p>
                        </div>
                        <MdOutlineWhatsapp className='text-4xl text-[#079cf4]'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Heading;