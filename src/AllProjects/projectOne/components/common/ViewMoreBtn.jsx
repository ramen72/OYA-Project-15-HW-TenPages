import React from 'react';
import { Link } from 'react-router';
import { FaArrowRightLong } from "react-icons/fa6";

const ViewMoreBtn = ({btnText}) => {
    return (
        <>
            <Link to={""} className='font-medium text-pOnePrimary flex justify-start items-center gap-x-2 transition-all duration-500 hover:gap-x-4'>{btnText} <FaArrowRightLong/></Link>
        </>
    );
};

export default ViewMoreBtn;