import React from 'react';
import { Link } from 'react-router';
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const Heading = () => {
    return (
        <>
            <div className=''>
                <div className="max-w-containerThree mx-auto">
                    <div className="flex justify-between items-center">
                        <div className='flex justify-start items-center'>
                            <a href="tel:123-456-7890" className='inline-block text-base text-threePrimaryColor font-semibold'><IoIosPhonePortrait className='inline-block text-3xl border p-1 mr-1 rounded-full bg-[#dde2ea] text-threeParaColor'/>(800) 123-4567</a>
                            <a href="mailto:business@portotheme.com" className='inline-block ml-5 text-[12px]'><IoMailOutline className='inline-block text-3xl border p-1 mr-1 rounded-full bg-[#dde2ea] text-threeParaColor'/>business@portotheme.com</a>
                            <span className='inline-block ml-5 text-[12px]'><SlCalender className='inline-block text-3xl border p-1 mr-1 rounded-full bg-[#dde2ea] text-threeParaColor'/>Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED</span>
                        </div>
                        <Link to={"/businessConsulting"} className='bg-threeSecondaryColor py-6 px-9 text-[12px] font-semibold uppercase text-white rounded-sm'>Free intial consultation</Link>                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Heading;