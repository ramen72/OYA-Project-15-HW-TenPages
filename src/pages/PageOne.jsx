import React from 'react';
import MasterLayer from '../components/layers/masterLayer';

const PageOne = () => {
    return (
        <MasterLayer>
            <div className="w-full h-96 flex justify-center items-center">
                <h1 className='text-9xl font-bold text-center mt-52 capitalize'>Welcome <br/> to <br/> Our Projects</h1>
            </div>
        </MasterLayer>
    );
};

export default PageOne;