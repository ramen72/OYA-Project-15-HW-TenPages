import React from 'react';
import MasterLayer from '../../../components/layers/MasterLayer';
import Heading from './../components/navbar/Heading';
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/Banner';

const Home = () => {
    return (
        <MasterLayer>
            <Heading/>
            <NavBar/>
            <Banner/>
        </MasterLayer>
    );
};

export default Home;



