import React from 'react';

const ServiceCard = ({icon:Icon,title,para}) => {
    return (
        <>
            <div className='w-72'>
                <Icon className='text-5xl text-twoPrimaryColor'/>
                <h4 className='text-xl capitalize font-bold mt-1 mb-2'>{title}</h4>
                <p className='text-twoPara text-[14px] leading-7'>{para}</p>
            </div>
        </>
    );
};

export default ServiceCard;