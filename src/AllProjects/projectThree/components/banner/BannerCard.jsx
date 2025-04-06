import React from 'react';
import { Link } from 'react-router';

const BannerCard = ({url,title,para,buttonText}) => {
    return (
        <>
            <div className='w-[400px] bg-white py-16 px-[60px] flex justify-center flex-col border border-x-threeBgColor'>
                <img src={url} alt="strategicImage" className='max-w-[72px] mx-auto'/>
                <h4 className='text-threePrimaryColor font-semibold capitalize text-2xl mt-8 mb-3 text-center'>{title}</h4>
                <p className='text-center text-threeParaColor text-sm font-light leading-6 mb-4'>{para}</p>
                <Link to={"/businessConsulting"} className='text-threeSecondaryColor text-center font-bold'>{buttonText}</Link>
            </div>
        </>
    );
};

export default BannerCard;