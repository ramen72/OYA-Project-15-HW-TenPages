import React from 'react';
import { Link } from 'react-router';

const Service = () => {
    return (
        <>
            <div className="pt-[280px]">
                <div className="bg-threeServiceBG bg-left bg-no-repeat flex justify-between items-center">
                    <div className="max-w-containerThree mx-auto flex justify-between items-center">
                        <div className="w-[605px]"></div>
                        <div className="w-[605px] pl-[118px]">
                        <h4 className='text-threeSecondaryColor text-base font-bold uppercase ml-11 mt-7 pl-4 relative before:content="" before:w-11 before:h-[3px] before:bg-threeSecondaryColor before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full '>Our services</h4>
                        <h2 className='font-bold text-threePrimaryColor text-3xl capitalize'>What we do?</h2>
                        <p className='font-semibold text-threeParaColor text-sm my-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut.
                        </p>
                        <p className='text-sm text-threeParaColor mb-7'>
                            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non. Integer aliquet.
                        </p>
                        <div className="bg-threeBgColor rounded-md pt-3">
                            <h5 className='font-semibold text-sm mx-3'>Management Consulting</h5>
                            <div className="bg-white p-6 my-4 mx-3">
                                <p className='text-threeParaColor text-sm leading-7 mb-6'>
                                    Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non. Integer aliquet ullamcorper dolor, quis sollicitudin.
                                </p>
                                <Link to={"/businessConsulting"} className='text-threeSecondaryColor uppercase text-sm text-center font-semibold'>read more +</Link>
                            </div>
                            <div className='py-4 px-3  border-b-2 border-t-4 border-white'>
                                <h5 className='font-semibold text-sm capitalize text-threeSubTitleColor'>Business Coaching</h5>
                            </div>
                            <div className='py-4 px-3 border-y-2 border-white'>
                                <h5 className='font-semibold text-sm capitalize text-threeSubTitleColor'>Performance Consulting and Coaching</h5>
                            </div>
                            <div className='py-4 px-3 border-y-2 border-white'>
                                <h5 className='font-semibold text-sm capitalize text-threeSubTitleColor'>Strategy and marketing</h5>
                            </div>
                            <div className='py-4 px-3 border-y-2 border-white'>
                                <h5 className='font-semibold text-sm capitalize text-threeSubTitleColor'>Service Benchmarking</h5>
                            </div>
                        </div>
                        <Link to={"/businessConsulting"} className='inline-block bg-threeSecondaryColor mt-8 mb-8 py-6 px-10 rounded-md text-[12px] font-semibold uppercase text-white'>find out more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;