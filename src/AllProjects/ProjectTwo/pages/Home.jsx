import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Heading from '../components/navbar/Heading';
import MasterLayer from './../../../components/layers/MasterLayer';
import Banner from '../components/banner/Banner';
import Technology from '../components/technology/Technology';
import WhoWeAre from '../components/whoWeAre/WhoWeAre';

const Home = () => {
    return (
        <MasterLayer>
            <Heading/>
            <NavBar/>
            <Banner/>
            <Technology/>
            <WhoWeAre/>
        </MasterLayer>
    );
};

export default Home;



