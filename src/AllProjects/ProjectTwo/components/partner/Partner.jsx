import React from 'react';
import partner1 from '../../images/partner-1.png'
import partner2 from '../../images/partner-2.png'
import partner3 from '../../images/partner-3.png'
import partner4 from '../../images/partner-4.png'
import partner5 from '../../images/partner-5.png'
import partner6 from '../../images/partner-6.png'

const Partner = () => {
    return (
        <>
            <div className="py-20">
                <div className="max-w-containerTwo mx-auto">
                    <div className="flex justify-between items-center">
                        <img src={partner1} alt="partner" className='max-h-8'/>
                        <img src={partner2} alt="partner" className='max-h-8'/>
                        <img src={partner3} alt="partner" className='max-h-8'/>
                        <img src={partner4} alt="partner" className='max-h-8'/>
                        <img src={partner5} alt="partner" className='max-h-8'/>
                        <img src={partner6} alt="partner" className='max-h-8'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partner;