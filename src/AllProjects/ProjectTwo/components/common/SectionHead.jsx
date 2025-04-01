import React from 'react';

const SectionHead = ({title,para}) => {
    return (
        <>
            <h2 className='font-bold text-[28px] leading-none text-headingColor mb-3'>{title}</h2>
            <p className='text-base text-paraColor font-light leading-7'>{para}</p>
        </>
    );
};

export default SectionHead;