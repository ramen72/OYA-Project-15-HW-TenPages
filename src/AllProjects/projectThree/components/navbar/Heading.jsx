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
        </>
    );
};

export default Heading;