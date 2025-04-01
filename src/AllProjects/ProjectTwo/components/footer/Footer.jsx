import React from 'react';
import footerLogo from '../../images/footerLogo.png'
import ViewMoreBtn from '../common/ViewMoreBtn';
import { LuPhoneCall } from "react-icons/lu";
import { CiAt } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-footerBg bg-bottom py-52'>
                <div className='max-w-containerOne mx-auto'>
                    <div className="flex justify-between items-center border-b pb-11">
                        <img src={footerLogo} alt="FooterLogo" className='max-w-32'/>
                        <ul>
                            <li className='inline-block text-lg font-bold text-headingColor capitalize pb-4'>Navigation</li>
                            <li><a href="#" className='inline-block text-paraColor capitalize py-2 transition-all duration-200 hover:text-pOnePrimary'>home</a></li>
                            <li><a href="#" className='inline-block text-paraColor capitalize py-2 transition-all duration-200 hover:text-pOnePrimary'>Company</a></li>
                            <li><a href="#" className='inline-block text-paraColor capitalize py-2 transition-all duration-200 hover:text-pOnePrimary'>Services</a></li>
                        </ul>
                        <ul>
                            <li className='inline-block text-lg font-bold text-headingColor capitalize pb-4'></li>
                            <li><a href="#" className='inline-block text-paraColor capitalize py-2 transition-all duration-200 hover:text-pOnePrimary'>Projects</a></li>
                            <li><a href="#" className='inline-block text-paraColor capitalize py-2 transition-all duration-200 hover:text-pOnePrimary'>Blog</a></li>
                            <li><a href="#" className='inline-block text-paraColor capitalize py-2 transition-all duration-200 hover:text-pOnePrimary'>Contact</a></li>
                        </ul>
                        <div>
                            <h3 className='inline-block text-lg font-bold text-headingColor capitalize mb-5'>Newsletter</h3>
                            <div className='flex justify-end items-center'>
                                <input type="text" placeholder='Email Address...' className='w-[385px] py-5 px-4' />
                                <div className='inline-block bg-pOnePrimary py-6 px-9'>
                                    <ViewMoreBtn btnColor={true}/>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-x-8">
                                <a href="tel:+8801700000000" className='flex items-center gap-x-2 font-bold mt-4'><LuPhoneCall className='text-xl'/> +8801700000000</a>
                                <a href="mailto:abc@xyz.com" className='flex items-center gap-x-2 font-bold mt-4'><CiAt className='text-xl'/> abc@xyz.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='text-center pt-10'>
                        <p className='pb-8 text-paraColor'>Porto Construction © 2025. All Rights Reserved.</p>
                        <div className="flex justify-center items-center gap-x-4 text-2xl text-paraColor">
                            <FaInstagram/>
                            <FaXTwitter/>
                            <FaFacebookF/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;