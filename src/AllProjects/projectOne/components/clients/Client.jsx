import React from 'react';
import client1 from '../../images/client-1.png'
import client2 from '../../images/client-2.png'
import client3 from '../../images/client-3.png'
import client4 from '../../images/client-4.png'
import client5 from '../../images/client-5.png'
import client6 from '../../images/client-6.png'

const Client = () => {
    return (
        <>
            <div className='border-b-[1px]'>
                <div className='max-w-containerOne mx-auto py-16'>
                    <div className="flex justify-between items-center">
                        <img src={client1} alt="Client1" className='max-w-[90px]'/>
                        <img src={client2} alt="Client2" className='max-w-[140px]'/>
                        <img src={client3} alt="Client3" className='max-w-[140px]'/>
                        <img src={client4} alt="Client4" className='max-w-[140px]'/>
                        <img src={client5} alt="Client5" className='max-w-[100px]'/>
                        <img src={client6} alt="Client6" className='max-w-[100px]'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Client;