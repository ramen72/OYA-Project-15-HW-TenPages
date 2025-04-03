import React from 'react';
import { Link } from 'react-router';
import { IoIosArrowForward } from "react-icons/io";

const PostCard = ({day,month,title,para,buttonText}) => {
    return (
        <>
            <div className="w-[235px] flex justify-start items-start gap-x-4">
                <div>
                    <span className='block bg-twoBgColor py-2 text-center px-2 text-lg font-bold'>{day}</span>
                    <span className='block bg-twoPrimaryColor text-center py-2 px-2 text-[]8px uppercase'>{month}</span>
                </div>
                <div>
                    <h4 className='text-[15px] font-semibold mb-2'>{title}</h4>
                    <p className='text-paraColor text-[14px] mb-5'>{para}</p>
                    <Link to={"/projectTwo"} className='inline-block text-twoPrimaryColor font-bold text-[12px] uppercase border py-2 px-5 rounded-sm'>{buttonText} <IoIosArrowForward className='inline-block text-base'/></Link>
                </div>
            </div>
        </>
    );
};

export default PostCard;