import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Heading from '../components/navbar/Heading';
import MasterLayer from './../../../components/layers/MasterLayer';

const Home = () => {
    return (
        <MasterLayer>
            <Heading/>
            <NavBar/>
        </MasterLayer>
    );
};

export default Home;



