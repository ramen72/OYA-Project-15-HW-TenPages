import React from 'react';
import teamprogress from '../../images/teamProgress.png'
import coaching from '../../images/coaching-1.jpg'
import coachingTow from '../../images/coaching-2.jpg'
import coachingThree from '../../images/coaching-3.jpg'

const Team = () => {
    return (
        <>
            <div className="bg-[#f6f6f6] pt-24 pb-28">
                <div className="max-w-containerThree mx-auto">
                    <div className="flex justify-between items-center">
                        <div className='w-[605px]'>
                            <h4 className='text-threeSecondaryColor text-base font-bold uppercase ml-11 mt-7 pl-4 relative before:content="" before:w-11 before:h-[3px] before:bg-threeSecondaryColor before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full '>coaching and consulting</h4>
                            <h2 className='font-bold text-threePrimaryColor text-3xl capitalize'>Experienced Team</h2>
                            <p className='font-semibold text-threeParaColor text-sm my-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non. Integer aliquet ullamcorper dolor, quis sollicitudin.
                            </p>
                            <p className='text-sm text-threeParaColor mb-7'>
                                Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non. Integer aliquet ullamcorper dolor, quis sollicitudin.
                            </p>
                            <div className="flex justify-start items-center gap-x-4">
                                <img src={teamprogress} alt="teamprogress" />
                                <h3 className='max-w-48 font-bold text-xl text-threeSubTitleColor'>Successful cases in 15 years.</h3>
                            </div>
                        </div>
                        <div className='w-[605px] relative'>
                            <img src={coaching} alt="coaching" className="absolute top-1/2 right-0 -translate-y-1/2 border-[20px] border-white" />
                            <img src={coachingTow} alt="coaching" className="absolute top-0 right-[253px] -translate-y-[133px] border-[20px] border-white" />
                            <img src={coachingThree} alt="coaching" className="absolute top-1/2 right-28 -translate-y-[15%] border-[20px] border-white" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;