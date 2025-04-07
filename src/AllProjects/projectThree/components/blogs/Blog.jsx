import React from 'react';
import BlogCard from './BlogCard';
import { BlogCardData } from '../../dataFiles/BlogCardData';

const Blog = () => {
    return (
        <>
            <div className='bg-[#f7f7f7] py-20'>
                <div className="max-w-containerThree mx-auto">
                    <h4 className='text-threeSecondaryColor text-base font-bold uppercase ml-11 mt-7 pl-4 relative before:content="" before:w-11 before:h-[3px] before:bg-threeSecondaryColor before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full '>our blog</h4>
                    <h2 className='font-bold text-threePrimaryColor text-3xl capitalize'>News and Articles</h2>
                    <div className="flex justify-between items-center">
                        {
                            BlogCardData.map((item,index)=>(
                                <BlogCard key={index} url={'#'} date={item.date} comments={item.comments} user={item.user} title={item.title} para={item.para} buttonText={item.buttonText}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;