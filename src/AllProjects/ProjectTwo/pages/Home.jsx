import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Heading from '../components/navbar/Heading';
import MasterLayer from './../../../components/layers/MasterLayer';
import Banner from '../components/banner/Banner';
import Technology from '../components/technology/Technology';
import WhoWeAre from '../components/whoWeAre/WhoWeAre';
import Services from '../components/services/Services';
import OurPrices from '../components/ourPrices/OurPrices';
import Review from '../components/reviews/Review';
import Posts from '../components/posts/Posts';
import Partner from '../components/partner/Partner';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <MasterLayer>
            <Heading/>
            <NavBar/>
            <Banner/>
            <Technology/>
            <WhoWeAre/>
            <Services/>
            <OurPrices/>
            <Review/>
            <Posts/>
            <Partner/>
            <Footer/>
        </MasterLayer>
    );
};

export default Home;



