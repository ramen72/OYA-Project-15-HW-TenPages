import React from 'react';
import userOne from '../../images/userOne.jpg'
import { Link } from 'react-router';

const Stories = () => {
    return (
        <>
            <div className="bg-threeBgColor pt-28 pb-20">
                <div className="max-w-containerThree mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="w-[605px]">
                            <div className="w-[430px] bg-[#fafafa] py-11 pl-11 pr-[140px] relative">
                                <h3 className='font-bold text-threePrimaryColor text-xl capitalize mb-5'>Go gold golden case</h3>
                                <p className='text-sm text-threeParaColor leading-7'>
                                    Lorem ipsum dolor sit amet, adipiscing elit. Sed eget porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.
                                </p>
                                <div className="flex justify-start items-center gap-x-5 mt-11">
                                    <img src={userOne} alt="userOne" className='w-[72px] rounded-full' />
                                    <div>
                                        <h3 className='font-bold text-lg text-threePrimaryColor'>Bob smith</h3>
                                        <span className='text-threeParaColor font-semibold uppercase text-sm'>Manager</span>
                                    </div>
                                </div>
                                <div className="w-[270px] h-56 bg-white absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-[70px] py-10">
                                    <div className='bg-black text-white py-6 px-4'>
                                        <span className='text-xl font-bold'>go<br/>gold<br/>golden</span>
                                    </div>
                                    <Link to={"/businessConsulting"} className='inline-block bg-threeSecondaryColor py-4 px-8 rounded-md text-[12px] font-semibold uppercase text-white absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2'>read more</Link>
                                </div>
                                <div className='flex justify-center items-center gap-x-2 absolute left-1/2 -bottom-8'>
                                    <span className='inline-block w-4 h-4 border-2 rounded-full border-threeSubTitleColor flex justify-center items-center'>
                                        <span className='inline-block w-3 h-3 border-2 rounded-full bg-threeSubTitleColor'></span>
                                    </span>
                                    <span className='inline-block w-4 h-4 border-2 rounded-full border-threeSubTitleColor'></span>
                                    <span className='inline-block w-4 h-4 border-2 rounded-full border-threeSubTitleColor'></span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[605px] pl-[118px]">
                            <h4 className='text-threeSecondaryColor text-base font-bold uppercase ml-11 mt-7 pl-4 relative before:content="" before:w-11 before:h-[3px] before:bg-threeSecondaryColor before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full '>real world stories</h4>
                            <h2 className='font-bold text-threePrimaryColor text-3xl capitalize'>Sucessful Cases</h2>
                            <p className='font-semibold text-threeParaColor text-sm my-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a elit sit amet leo accumsan volutpat.
                            </p>
                            <p className='text-sm text-threeParaColor mb-7'>
                            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non. Integer aliquet ullamcorper dolor, quis sollicitudin.
                            </p>
                            <div className="flex justify-start items-center gap-x-12">
                                <div>
                                    <span className='block text-[40px] font-bold text-threeSecondaryColor text-center'>240+</span>
                                    <p className='font-bold text-threeSecondaryColor capitalize'>Satisfied Clients</p>
                                </div>
                                <div>
                                    <span className='block text-[40px] font-bold text-threeSecondaryColor text-center'>2000+</span>
                                    <p className='font-bold text-threeSecondaryColor capitalize'>Successfull Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stories;