import React from 'react';
import MasterLayer from '../../../components/layers/masterLayer';
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/Banner';
import WhoWeAre from '../components/whoWeAre/WhoWeAre';
import Services from '../components/services/Services';
import Project from '../components/projects/Project';
import Comments from '../components/comments/Comments';
import Client from '../components/clients/Client';
import Blog from '../components/blogs/Blog';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <MasterLayer>
            <NavBar/>
            <Banner/>
            <WhoWeAre/>
            <Services/>
            <Project/>
            <Comments/>
            <Client/>
            <Blog/>
            <Footer/>
        </MasterLayer>
    );
};

export default Home;