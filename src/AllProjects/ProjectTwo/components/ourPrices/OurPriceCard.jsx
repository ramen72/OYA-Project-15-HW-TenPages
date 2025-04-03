import React from 'react';
import { Link } from 'react-router';

const OurPriceCard = ({title,currency,price,duration,packageDetails,buttonText}) => {
    return (
        <>
            <div className="group w-[280px] text-center transition-all duration-300 hover:scale-110 hover:z-10">
                <h5 className='bg-[#212529] font-bold text-[12px] text-white uppercase text-center py-4 transition-all duration-300 group-hover:bg-twoPrimaryColor'>{title}</h5>
                <div className="border pb-10 bg-white">
                    <div className='bg-[#f4f4f4] flex flex-col justify-center items-center py-9'>
                        <span className='flex items-start font-semibold text-[43px] -mb-2'><span className='text-[50%] mt-2'>{currency}</span>{price}</span>
                        <label className='uppercase text-center text-paraColor text-[12px]'>{duration}</label>
                    </div>
                    <ul className='text-center text-[13px] text-paraColor px-5 pb-11 font-normal'>
                        {
                            Object.values(packageDetails).map((item,index)=>(
                                <li className='py-3 border-b border-[#ededed] lastChild-li-border-none' key={index}>{item}</li>
                            ))
                        }
                    </ul>
                    <Link to={"/projectTwo"} className='uppercase border-2 border-headingColor py-1 px-4 transition-all duration-300 group-hover:bg-twoPrimaryColor group-hover:border-twoPrimaryColor group-hover:text-white'>buttonText</Link>
                </div>
            </div>
        </>
    );
};

export default OurPriceCard;