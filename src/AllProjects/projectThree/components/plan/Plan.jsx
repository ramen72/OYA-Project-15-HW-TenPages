import React from 'react';
import { Link } from 'react-router';
import { FaMobileScreenButton } from "react-icons/fa6";

const Plan = () => {
    return (
        <>
            <div className="bg-threePrimaryColor text-white py-16">
                <div className="max-w-containerThree mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="w-[605px]">
                            <h4 className='text-base font-bold uppercase ml-11 pl-4 relative before:content="" before:w-11 before:h-[3px] before:bg-threeSecondaryColor before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full '>Are you looking for a</h4>
                            <h2 className='font-bold text-3xl capitalize'>Business Plan Consultant?</h2>
                            <p className='font-semibold text-sm mt-2'>Schedule your company strategy session right now!</p>
                        </div>
                        <div className="w-[605px] flex justify-end items-center gap-x-8">
                            <a href="tel:(800) 123-4567"><FaMobileScreenButton className='inline-block bg-[#dde2ea] text-threeParaColor text-5xl p-3 rounded-full mr-2'/> (800) 123-4567</a>
                            <Link to={"/businessConsulting"} className='inline-block bg-threeSecondaryColor mt-8 mb-8 py-5 px-14 rounded-md text-[12px] font-semibold uppercase text-white'>free initial consultation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plan;