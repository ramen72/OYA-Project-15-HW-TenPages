import React from 'react';
import { Link } from 'react-router';

const BlogCard = ({url,date,comments,user,title,para,buttonText}) => {
    return (
        <div className='w-[595px] bg-white p-7'>
                <div className='h-[180px] overflow-hidden'>
                    <img src={url} alt="Image" className='h-full' />
                </div>
                <div className="flex justify-start items-center gap-x-8 mt-2">
                    <span className='text-[11px] text-threeParaColor uppercase'>{date}</span>
                    <span className='text-[11px] text-threeParaColor uppercase relative before:content="" before:w-[1px] before:h-1/2 before:bg-[#7777774d] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2' >{comments}</span>
                    <span className='text-[11px] text-threeParaColor uppercase relative before:content="" before:w-[1px] before:h-1/2 before:bg-[#7777774d] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2' >{user}</span>
                </div>
                <h2 className='font-bold text-threePrimaryColor text-xl my-5'>{title}</h2>
                <p className="text-threeParaColor text-sm leading-6 mb-5">{para}</p>
                <Link to={"/businessConsulting"} className='text-threeSecondaryColor text-center uppercase text-sm font-bold'>{buttonText}</Link>
        </div>
    );
};

export default BlogCard;