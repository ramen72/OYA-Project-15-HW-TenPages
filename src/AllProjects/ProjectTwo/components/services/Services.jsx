import React from 'react';
import ServiceCard from '../common/ServiceCard';
import { serviceData } from '../../dataFiles/Services';

const Services = () => {
    return (
        <>
            <div className='bg-twoBgColor py-20'>
                <div className="max-w-containerTwo mx-auto">
                    <h2 className='text-center font-extrabold text-[25px] capitalize'><span className='font-normal'>our</span> services</h2>
                    <div className="flex flex-wrap justify-between gap-8 mt-16">
                        {
                            serviceData.map((item,index)=>(
                                <ServiceCard key={index} icon={item.icon} title={item.title} para={item.para}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;