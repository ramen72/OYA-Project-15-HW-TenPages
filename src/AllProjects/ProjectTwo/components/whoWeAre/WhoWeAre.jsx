import React from 'react';
import SectionHead from '../common/SectionHead';
import ViewMoreBtn from '../common/ViewMoreBtn';

const WhoWeAre = () => {
    return (
        <>
            <div className="py-20">
                <div className="max-w-containerOne mx-auto">
                    <div className="flex justify-between relative">
                        <div className='w-[356px]'>
                            <SectionHead title={"Who We Are"} para={"Cras a elit sit amet leo accumsan volutsudisse hendrerit vehicula leo, vel efficitur felis ultrices non nteger."}/>
                        </div>
                        <div className='w-[540px]'>
                            <p className='text-base text-paraColor font-light leading-7 mb-3'>
                                Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non hendrerit vehicula leo, vel efficitur felis ultrices non.
                            </p>
                            <ViewMoreBtn btnText={"View More"}/>
                        </div>
                        <span className='inline-block rotate-[125deg] text-paraColor absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2'>---------------</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoWeAre;