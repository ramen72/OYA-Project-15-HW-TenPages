import React from 'react';
import bannerImage1 from '../../images/bannerImage1.jpg'
import bannerImage2 from '../../images/bannerImage2.jpg'
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <img src={bannerImage1} alt="bannerImage" />
                <div className='text-center'>
                    <h4 className='uppercase text-headingColor text-[21px] font-semibold'>PORTO TEMPLATE</h4>
                    <h1 className='uppercase text-headingColor text-[52px] font-extrabold tracking-tighter'>INCREDIBLE DESIGNS</h1>
                    <p className='text-xl tracking-wide font-light text-paraColor mb-10'>Porto is a huge success in the one of world's largest MarketPlace.</p>
                    <Link to={"/projectTwo"} className=' uppercase inline-block text-white bg-twoPrimaryColor py-4 px-9 rounded-md font-bold tracking-wide text-[13px]'>get Stared now <FaArrowRight className='inline-block ml-2 text-lg'/></Link>
                </div>
                <img src={bannerImage2} alt="bannerImage" />
            </div>
        </>
    );
};

export default Banner;