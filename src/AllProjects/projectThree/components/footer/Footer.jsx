import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router';
import footerImage1 from '../../images/footerImage-1.jpg'
import footerImage2 from '../../images/footerImage-2.jpg'
import footerLogo from '../../images/logo-footer.png'

const Footer = () => {
    return (
        <>
            <div className="bg-headingColor py-20 relative">
                <div className="max-w-containerTwo mx-auto">
                    <div className="flex justify-between items-start text-white">
                        <div className="w-[350px]">
                            <h5 className='uppercase text-[14px] font-medium -tracking-wider mb-5'>about us</h5>
                            <p className='text-paraColor text-[12px] leading-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque.
                            </p>
                            <p className='text-paraColor text-[12px] leading-6 mt-5 mb-3'>
                                Praesent venenatis turpis vitae purus semper, eget sagittis velit venenatis ptent taciti sociosqu ad litora...
                            </p>
                            <Link to={"/projectTwo"} className='inline-block text-white font-bold text-[12px] uppercase py-2'>View More<IoIosArrowForward className='inline-block text-base'/></Link>
                        </div>
                        <div className="w-[260px]">
                            <h5 className='uppercase text-[14px] font-medium -tracking-wider mb-5'>RECENT POSTS</h5>
                            <div className='flex justify-start items-center gap-x-4'>
                                <img src={footerImage1} alt="footerImage1" className='rounded-full max-w-[70px]'/>
                                <div>
                                    <p className='text-[12px] leading-6 mb-2'>
                                        Lorem ipsum dolor sit, consectetur adipiscing elit.
                                    </p>
                                    <span className='text-[11px] text-paraColor'>12:53 AM Dec 19th</span>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-x-4 mt-9'>
                                <img src={footerImage2} alt="footerImage1" className='rounded-full max-w-[70px]'/>
                                <div>
                                    <p className='text-[12px] leading-6 mb-2'>
                                        Lorem ipsum dolor sit, consectetur adipiscing elit.
                                    </p>
                                    <span className='text-[11px] text-paraColor'>12:53 AM Dec 19th</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[220px]">
                            <h5 className='uppercase text-[14px] font-medium -tracking-wider mb-5'>RECENT comments</h5>
                            <p className='text-[12px] leading-6 mb-2'>
                                <IoIosArrowForward className='inline-block text-twoPrimaryColor text-base'/> <strong>John doe</strong> commented on <strong className='text-twoPrimaryColor'>lorem ipsum dolor sit amet.</strong>
                            </p>
                            <span className='text-[11px] text-paraColor'>12:53 AM Dec 19th</span>
                            <p className='text-[12px] leading-6 mb-2 mt-9'>
                                <IoIosArrowForward className='inline-block text-twoPrimaryColor text-base'/> <strong>John doe</strong> commented on <strong className='text-twoPrimaryColor'>lorem ipsum dolor sit amet.</strong>
                            </p>
                            <span className='text-[11px] text-paraColor'>12:53 AM Dec 19th</span>
                        </div>
                        <div className="w-[150px] flex justify-start flex-wrap gap-2">
                            <Link to={"/projectTwo"} className='inline-block bg-black py-2 px-3 rounded-md text-[11px] uppercase'>design</Link>
                            <Link to={"/projectTwo"} className='inline-block bg-black py-2 px-3 rounded-md text-[11px] uppercase'>code</Link>
                            <Link to={"/projectTwo"} className='inline-block bg-black py-2 px-3 rounded-md text-[11px] uppercase'>lifestyle</Link>
                            <Link to={"/projectTwo"} className='inline-block bg-black py-2 px-3 rounded-md text-[11px] uppercase'>brands</Link>
                            <Link to={"/projectTwo"} className='inline-block bg-black py-2 px-3 rounded-md text-[11px] uppercase'>promo</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#16181b] py-8">
            <div className="max-w-containerTwo mx-auto">
                <div className="flex justify-between items-center">
                    <div className='flex justify-start items-center gap-x-7'>
                        <img src={footerLogo} alt="footerLogo" className='max-h-8'/>
                        <p className='text-[11px] text-paraColor'>© Copyright 2025. All Rights Reserved.</p>
                    </div>
                    <div className='flex justify-end items-center gap-x-3'>
                        <Link to={"/projectTwo"} className='text-paraColor text-[11px]'><IoIosArrowForward className='inline-block'/> FAQ's</Link>
                        <Link to={"/projectTwo"} className='text-paraColor text-[11px]'><IoIosArrowForward className='inline-block'/> Sitemap</Link>
                        <Link to={"/projectTwo"} className='text-paraColor text-[11px]'><IoIosArrowForward className='inline-block'/> Contact us</Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Footer;