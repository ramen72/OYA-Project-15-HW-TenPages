import React from 'react';
import MasterLayer from '../../../components/layers/MasterLayer';
import Heading from './../components/navbar/Heading';
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/Banner';
import Service from '../components/services/Service';
import Team from '../components/team/Team';

const Home = () => {
    return (
        <MasterLayer>
            <Heading/>
            <NavBar/>
            <Banner/>
            <Service/>
            <Team/>
        </MasterLayer>
    );
};

export default Home;



