import React from 'react';
import SectionHead from '../common/SectionHead';

const Services = () => {
    return (
        <>
            <div className="bg-[#f4f4f4] pt-24 pb-28 relative">
                <div className="max-w-containerOne mx-auto">
                    <SectionHead title={"Services"} para={"Cras a elit sit amet leo accumsan volutsudisse."}/>
                </div>
                <div className={"w-[195px] h-[120px] bg-[#e04622] pt-24 pb-28 absolute bottom-0 right-7"} style={{ clipPath: "polygon(52% 49%, 0% 100%, 100% 100%)" }}></div>
                <div className={"w-[195px] h-[120px] bg-[#212529] pt-24 pb-28 absolute bottom-0 right-28 z-10"} style={{ clipPath: "polygon(52% 49%, 0% 100%, 100% 100%)" }}></div>
            </div>
        </>
    );
};

export default Services;