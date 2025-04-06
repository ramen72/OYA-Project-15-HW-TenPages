import React from 'react';
import { Link } from 'react-router';
import BannerCard from './BannerCard';
import { BannerCardData } from '../../dataFiles/BannerCardData';

const Banner = () => {
    return (
        <>
        <div className="bg-[#eff0f4] relative">
            <div className="bg-threeBannerBg bg-left-bottom bg-no-repeat pt-64 pb-[370px] ">
                <div className="max-w-containerThree mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2"></div>
                        <div className="w-1/2  pt-6">
                            <h4 className='text-threeSecondaryColor text-base font-bold uppercase ml-11 pl-4 relative before:content="" before:w-11 before:h-[3px] before:bg-threeSecondaryColor before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full '>Business Consulting services located in Los Angeles, CA</h4>
                            <h1 className='text-[35px] font-extrabold capitalize text-threePrimaryColor'>Your success is our main business</h1>
                            <p className='text-threeParaColor text-[16px] py-5 capitalize'>Professional helping you design success!</p>
                            <Link to={"/businessConsulting"} className='inline-block bg-threeSecondaryColor py-6 px-10 rounded-md text-[12px] font-semibold uppercase text-white'>get started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex">
                {
                    BannerCardData.map((item,index)=>(
                        <BannerCard key={index} url={item.url} title={item.title} para={item.para} buttonText={item.buttonText}/>
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default Banner;