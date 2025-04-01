import React from 'react';
import projectOne from '../../../../assets/images/project-1.jpg'
import projectTwo from '../../../../assets/images/project-2.jpg'
import projectThree from '../../../../assets/images/project-3.jpg'
import projectFour from '../../../../assets/images/project-4.jpg'
import projectFive from '../../../../assets/images/project-5.jpg'
import projectSix from '../../../../assets/images/project-6.jpg'
import projectSeven from '../../../../assets/images/project-7.jpg'
import ViewMoreBtn from '../common/ViewMoreBtn';

const Project = () => {
    return (
        <>
            <div className='py-20'>
                <div className='max-w-containerOne mx-auto'>
                        <ul className="relative flex justify-around items-center">
                            <li className='relative rotate-[45deg] inline-block after:content-[""] after:w-full after:h-full after:bg-black after:opacity-0 after:absolute after:left-0 after:top-0 after:z-10 after:transition-all after:duration-300 hover:after:opacity-30 hover:cursor-pointer'>
                                <img className='h-64 w-64 ' src={projectOne} alt="projectImage" />
                            </li>
                             <li className='relative rotate-[45deg] inline-block after:content-[""] after:w-full after:h-full after:bg-black after:opacity-0 after:absolute after:left-0 after:top-0 after:z-10 after:transition-all after:duration-300 hover:after:opacity-30 hover:cursor-pointer'>
                                <img className='h-64 w-64' src={projectTwo} alt="projectImage" />
                            </li>
                            <li className='relative rotate-[45deg] inline-block after:content-[""] after:w-full after:h-full after:bg-black after:opacity-0 after:absolute after:left-0 after:top-0 after:z-10 after:transition-all after:duration-300 hover:after:opacity-30 hover:cursor-pointer'>
                                <img className='h-64 w-64' src={projectThree} alt="projectImage" />                                
                            </li>
                            <li className='rotate-[45deg] inline-block after:content-[""] after:w-full after:h-full after:bg-black after:opacity-0 after:absolute after:left-0 after:top-0 after:z-10 after:transition-all after:duration-300 hover:after:opacity-30 hover:cursor-pointer absolute -top-16 right-[312px]'>
                                <img className='h-36 w-36' src={projectFour} alt="projectImage" />
                            </li>
                            <li className='rotate-[45deg] inline-block after:content-[""] after:w-full after:h-full after:bg-black after:opacity-0 after:absolute after:left-0 after:top-0 after:z-10 after:transition-all after:duration-300 hover:after:opacity-30 hover:cursor-pointer absolute top-[92%] right-[259px] -translate-y-9 z-10'>
                                <img className='h-60 w-60' src={projectFive} alt="projectImage" />
                            </li>
                            <li className='rotate-[45deg] inline-block after:content-[""] after:w-full after:h-full after:bg-black after:opacity-0 after:absolute after:left-0 after:top-0 after:z-10 after:transition-all after:duration-300 hover:after:opacity-30 hover:cursor-pointer absolute  top-[98%] right-0'>
                                <img className='h-36 w-36' src={projectSix} alt="projectImage" />
                            </li>
                            <li className='rotate-[45deg] inline-block after:content-[""] after:w-full after:h-full after:bg-black after:opacity-0 after:absolute after:left-0 after:top-0 after:z-10 after:transition-all after:duration-300 hover:after:opacity-30 hover:cursor-pointer absolute bottom-[-253px] right-[120px]'>
                                <img className='h-36 w-36' src={projectSeven} alt="projectImage" />
                            </li>
                        </ul>
                    <p className='max-w-[540px] pt-48 text-paraColor mb-6'>
                        Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non hendrerit vehicula leo, vel efficitur felis ultrices non.
                    </p>
                    <p className='w-48 cursor-pointer bg-pOnePrimary py-3 px-6'>
                        <ViewMoreBtn btnColor={true} linkTo={"/"} btnText={"View Projects"}/>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Project;