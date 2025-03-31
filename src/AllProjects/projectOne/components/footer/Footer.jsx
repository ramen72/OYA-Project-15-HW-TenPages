import React from 'react';
import footerLogo from '../../images/footerLogo.png'
import ViewMoreBtn from '../common/ViewMoreBtn';

const Footer = () => {
    return (
        <>
            <div className='bg-footerBg bg-bottom py-56'>
                <div className='max-w-containerOne mx-auto'>
                    <div className="flex justify-between items-center">
                        <img src={footerLogo} alt="FooterLogo" className='max-w-32'/>
                        <ul>
                            <li><a href="#">Navigation</a></li>
                            <li><a href="#">home</a></li>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div>
                            <h3>Newsletter</h3>
                            <div className='flex justify-end items-center'>
                                <input type="text" placeholder='Email Address...' className='w-[385px] py-3 px-4' />
                                <div className='inline-block bg-pOnePrimary py-3 px-4'>
                                <ViewMoreBtn btnColor={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;