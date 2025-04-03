import React from 'react';
import { Link } from 'react-router';
import { IoIosArrowForward } from "react-icons/io";
import ourOffice1 from '../../images/our-office-1.jpg'
import ourOffice2 from '../../images/our-office-2.jpg'
import ourOffice3 from '../../images/our-office-3.jpg'

const WhoWeAre = () => {
    return (
        <>
            <div className="max-w-containerTwo mx-auto my-20">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className='text-2xl text-headingColor font-medium capitalize mb-6'><span className='font-bold'>Who</span> we are</h3>
                        <p className='max-w-[625px] text-paraColor text-lg mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enikklam id valorem ipsum dolor sit amet, consectetur adipiscinLorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className='max-w-[610px] text-paraColor text-[14px] mb-6'>
                            Phasellus blandit massa enim. Nullam id varius elit. blandit massa enim d varius blandit massa enimariusi d varius elit. blandit massa enimariud varius elit. blandit massa enimariusisi ariusius.
                        </p>
                        <Link to={"/projectTwo"} className='text-twoPrimaryColor font-bold text-[12px] uppercase border py-2 px-5 rounded-sm'>View more <IoIosArrowForward className='inline-block text-base'/></Link>
                    </div>
                    <div className='w-[450px] flex items-center gap-8'>
                        <div className='inline-block'>
                            <img src={ourOffice1} alt="ourOffice" />
                        </div>
                        <div className='inline-flex flex-col gap-8'>
                            <img src={ourOffice2} alt="ourOffice" />
                            <img src={ourOffice3} alt="ourOffice" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoWeAre;