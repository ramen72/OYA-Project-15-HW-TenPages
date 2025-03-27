import React from 'react';
import MasterLayer from '../../../components/layers/masterLayer';
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/Banner';

const Home = () => {
    return (
        <MasterLayer>
            <NavBar/>
            <Banner/>
        </MasterLayer>
    );
};

export default Home;