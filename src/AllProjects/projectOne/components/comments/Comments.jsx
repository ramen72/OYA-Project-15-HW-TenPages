import React from 'react';
import author from '../../images/author-1-big.png'

const Comments = () => {
    return (
        <>
            <div className='bg-pOneBannerComment bg-center bg-cover'>
                <div className='max-w-containerOne mx-auto'>
                    <div className="flex justify-start items-center gap-x-3 pt-12">
                        <img src={author} alt="Author" />
                       <div>
                            <p className='text-[#999999] font-semibold'>
                                Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast ehicula leo, vel efficitur felis ultrices non cras a elit sit amet leo acun volutpat. Suspendisse hendrerit vehicula leo, vel efficitur fel.
                            </p>
                            <h4 className='text-xl text-[#111111] font-bold mt-9'>Anne Doe Smith</h4>
                            <span className='text-paraColor'>Porto Magazine</span>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comments;