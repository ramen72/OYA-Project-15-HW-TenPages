import React from 'react';
import client from '../../images/client-1.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Review = () => {
    return (
        <>
            <div className="bg-twoBgColor py-20">
                <div className="max-w-containerTwo mx-auto">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <img src={client} alt="client" className='w-16 h-auto rounded-full'/>
                        <p className='text-[19px] text-center text-[#575a5d] mt-9 relative'>
                            <RiDoubleQuotesL className='inline-block text-5xl text-headingColor absolute left-0 -translate-x-full top-0 -translate-y-1/2'/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus, convallis non consectetur sed, pharetra nec ex.
                            <RiDoubleQuotesR className='inline-block text-5xl text-headingColor absolute right-0 translate-x-full bottom-0 translate-y-1/2'/>
                        </p>
                        <div>
                            <strong>-John Smith. Okler</strong>
                            <div className="flex justify-center items-center gap-x-2 mt-2">
                                <span className='inline-block w-2 h-2 bg-twoPara rounded-full'></span>
                                <span className='inline-block w-2 h-2 bg-twoPrimaryColor rounded-full'></span>
                                <span className='inline-block w-2 h-2 bg-twoPara rounded-full'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;