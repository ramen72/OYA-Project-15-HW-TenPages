import React from 'react';
import technology from '../../images/technology.jpg'

const Technology = () => {
    return (
        <>
            <div className="bg-[#383f48] text-white text-center py-11 relative">
                <h3 className='text-center font-bold text-xl tracking-tight'>The fastest way to grow your business with the leader in</h3>
                <p className='text-clip text-twoPara font-normal mt-2'>Check out our options and features included.</p>
                <img src={technology} alt="technology" className='absolute left-[calc(50%+274px)] top-9' />
            </div>
        </>
    );
};

export default Technology;