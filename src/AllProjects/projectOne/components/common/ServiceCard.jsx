import React from 'react';
import ViewMoreBtn from './ViewMoreBtn';

const ServiceCard = ({icon,title,para,btnLink}) => {
    return (
       <>
            <div className="w-[490px] flex items-start gap-x-4 p-4">
                <div className="text-3xl">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-headingColor">{title}</h3>
                    <p className="text-paraColor my-4">{para}</p>
                    <ViewMoreBtn linkTo={btnLink} btnText={"View More"}/>
                </div>
            </div>
       </>
    );
};

export default ServiceCard;