import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <>
            <div className="bg-headingColor py-20 relative">
                <div className="max-w-containerTwo mx-auto">
                    <div className="flex justify-between items-start text-white">
                        <div className="w-[350px] border">
                            <h5 className='uppercase text-[14px] font-medium -tracking-wider mb-5'>about us</h5>
                            <p className='text-paraColor text-[12px] leading-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque.
                            </p>
                            <p className='text-paraColor text-[12px] leading-6 mt-5 mb-3'>
                            Praesent venenatis turpis vitae purus semper, eget sagittis velit venenatis ptent taciti sociosqu ad litora...
                            </p>
                            <Link to={"/projectTwo"} className='inline-block text-white font-bold text-[12px] uppercase py-2'>View More<IoIosArrowForward className='inline-block text-base'/></Link>
                        </div>
                        <div className="w-[260px] border">
                        <h5 className='uppercase text-[14px] font-medium -tracking-wider mb-5'>RECENT POSTS</h5>
                        </div>
                        <div className="w-[220px] border"></div>
                        <div className="w-[135px] border"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;