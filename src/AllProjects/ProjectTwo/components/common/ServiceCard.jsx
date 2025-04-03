import React from 'react';
import { serviceData } from '../../dataFiles/Services';

const ServiceCard = () => {
    return (
        <>
        {
            serviceData.map((item,index)=>(
                <div className='w-72'>
                    <item.icon className='text-5xl text-twoPrimaryColor'/>
                    <h4 className='text-xl capitalize font-bold mt-1 mb-2'>{item.title}</h4>
                    <p className='text-twoPara text-[14px] leading-7'>{item.para}</p>
                </div>
                
            ))
        }
        </>
    );
};

{/* <IoCopyOutline/>
<MdOutlineCalculate/>
<IoStarOutline/>
<IoWaterOutline/>
<BsMouse/> */}

export default ServiceCard;