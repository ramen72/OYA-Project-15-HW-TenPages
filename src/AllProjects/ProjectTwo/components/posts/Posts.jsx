import React from 'react';
import PostCard from './PostCard';
import { PostCardData } from '../../dataFiles/PostCardData';

const Posts = () => {
    return (
        <>
            <div className="py-20 border-b">
                <div className="max-w-containerTwo mx-auto">
                    <h2 className='text-center font-extrabold text-[25px] capitalize'><span className='font-normal'>latest</span> posts</h2>
                    <div className="mt-16 flex justify-between items-start">
                        {
                            PostCardData.map((item,index)=>(                                
                                <PostCard key={index} day={item.day} month={item.month} title={item.title} para={item.para} buttonText={item.buttonText}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;