import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Heading from '../components/navbar/Heading';
import MasterLayer from './../../../components/layers/MasterLayer';
import Banner from '../components/banner/Banner';
import Technology from '../components/technology/Technology';
import WhoWeAre from '../components/whoWeAre/WhoWeAre';
import Services from '../components/services/Services';

const Home = () => {
    return (
        <MasterLayer>
            <Heading/>
            <NavBar/>
            <Banner/>
            <Technology/>
            <WhoWeAre/>
            <Services/>
        </MasterLayer>
    );
};

export default Home;



