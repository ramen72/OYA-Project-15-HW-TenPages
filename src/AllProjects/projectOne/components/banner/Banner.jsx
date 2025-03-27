import React, { Fragment } from 'react';
import bannerBG from '../../images/bannerBg.jpg'
import bannerImage from '../../images/bannerImage.png'

const Banner = () => {
    return (
        <Fragment>
            <div className={`bg-pOneBannerBG bg-top bg-no-repeat bg-cover relative overflow-x-hidden`}>
                <div className='max-w-containerOne mx-auto'>
                    <div className='py-44'>
                        <h1 className={"font-poppins font-bold text-[137px] text-white leading-[90%] text-center relative z-0 before:content-['_BUILDING'] before:absolute before:z-[-1] before:-top-[27%] before:left-[26.5%] before:ml-0.5 before:text-red-500 before:text-transparent-stroke after:content-['_DREAMS'] after:text-[110px] after:absolute after:z-[-1] after:top-[83%] after:left-1/2 after:-translate-x-1/2 after:ml-0.5 after:text-red-500 after:text-transparent-stroke"}>BUILDING DREAMS</h1>
                    </div>
                </div>
                <img src={bannerImage} alt="" className='absolute right-16 bottom-0 h-[714px]'/>
                <div class="absolute bottom-0 transform -translate-y-1/2 right-[-70px] w-[975px] bg-pOnePrimary text-white font-bold uppercase text-2xl md:text-2xl py-9 px-14 skew-x-[-50deg]">
                    <span class="inline-block skew-x-[50deg]">#1 Fastest-Growing Company</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Banner;