import React from 'react';
import OurPriceCard from './OurPriceCard';
import { priceCardData } from '../../dataFiles/PriceCardData';

const OurPrices = () => {
    return (
        <>
            <div className='py-20'>
                <div className="max-w-containerTwo mx-auto">
                    <h2 className='text-center font-extrabold text-[25px] capitalize'><span className='font-normal'>our</span> prices</h2>
                    <div className="flex justify-between mt-16">
                        {
                            priceCardData.map((item,index)=>(
                                <OurPriceCard key={index} title={item.title} currency={item.currency} price={item.price} duration={item.duration} packageDetails={item.packageDetails} buttonText={item.buttonText}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurPrices;