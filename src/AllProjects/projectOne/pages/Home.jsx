import React from 'react';
import MasterLayer from '../../../components/layers/masterLayer';
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/Banner';
import WhoWeAre from '../components/whoWeAre/WhoWeAre';
import Services from '../components/services/Services';

const Home = () => {
    return (
        <MasterLayer>
            <NavBar/>
            <Banner/>
            <WhoWeAre/>
            <Services/>
        </MasterLayer>
    );
};

export default Home;