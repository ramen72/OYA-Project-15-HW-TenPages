import React from 'react';
import SectionHead from '../common/SectionHead';
import { blogData } from './blogData';

const Blog = () => {
    return (
        <>
            <div className='relative py-20'>
                <div className="max-w-containerOne mx-auto">
                    <SectionHead title={"Blog"} para={"Cras a elit sit amet leo accumsan volutsudisse."}/>
                    <div className='flex justify-between items-center gap-x-6 mt-11'>
                        {
                            blogData.map((blog,index)=>(
                                    <div key={index}>
                                        <img src={blog.url} alt="blogImage" />
                                        <h3 className='mt-8 mb-1 text-base font-semibold uppercase text-[#969696]'>{blog.user}</h3>
                                        <h2 className='mb-2 font-bold text-xl text-headingColor'>{blog.title}</h2>
                                        <p className='text-paraColor mb-2'>{blog.para}</p>
                                        <blog.button btnText={"View More"}/>
                                    </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"w-[212px] h-[112px] bg-[#e04622] pt-24 pb-28 absolute bottom-0 left-11"} style={{ clipPath: "polygon(52% 49%, 0% 100%, 100% 100%)" }}></div>
            </div>
        </>
    );
};

export default Blog;